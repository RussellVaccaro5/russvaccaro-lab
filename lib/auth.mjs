import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';

export const sessionCookie = 'rv_lab_editor_session';
export const stateCookie = 'rv_lab_editor_oauth_state';

const encode = (value) => Buffer.from(value).toString('base64url');
const sign = (value, secret) => createHmac('sha256', secret).update(value).digest('base64url');

function sameValue(left, right) {
  const a = Buffer.from(left || '');
  const b = Buffer.from(right || '');
  return a.length === b.length && timingSafeEqual(a, b);
}

export function parseCookies(request) {
  return Object.fromEntries(String(request.headers.cookie || '').split(';').flatMap((part) => {
    const index = part.indexOf('=');
    if (index < 0) return [];
    try {
      return [[part.slice(0, index).trim(), decodeURIComponent(part.slice(index + 1).trim())]];
    } catch {
      return [];
    }
  }));
}

export function cookie(name, value, { maxAge = 600, httpOnly = true } = {}) {
  return `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax; Secure${httpOnly ? '; HttpOnly' : ''}`;
}

export function clearCookie(name) {
  return cookie(name, '', { maxAge: 0 });
}

export function createState() {
  return randomBytes(24).toString('base64url');
}

export function createSession(user) {
  const secret = process.env.EDITOR_SESSION_SECRET;
  if (!secret || secret.length < 32) throw new Error('EDITOR_SESSION_SECRET must contain at least 32 characters.');
  const payload = encode(JSON.stringify({ login: user.login, avatarUrl: user.avatar_url, exp: Date.now() + 8 * 60 * 60 * 1000 }));
  return `${payload}.${sign(payload, secret)}`;
}

export function readSession(request) {
  const secret = process.env.EDITOR_SESSION_SECRET;
  if (!secret) return null;
  const token = parseCookies(request)[sessionCookie];
  if (!token) return null;
  const [payload, signature] = token.split('.');
  if (!payload || !signature || !sameValue(signature, sign(payload, secret))) return null;
  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString());
    return typeof session.login === 'string' && session.exp > Date.now() ? session : null;
  } catch {
    return null;
  }
}

export function isAllowedLogin(login) {
  return String(process.env.EDITOR_ALLOWED_GITHUB_LOGINS || '').split(',').map((value) => value.trim().toLowerCase()).filter(Boolean).includes(String(login).toLowerCase());
}

export function editorSiteUrl() {
  const value = process.env.EDITOR_SITE_URL;
  if (!value) throw new Error('EDITOR_SITE_URL is not configured.');
  return value.replace(/\/$/, '');
}

export function requireSession(request, response) {
  const session = readSession(request);
  if (!session) {
    response.status(401).json({ error: 'Sign in with an approved GitHub account to continue.' });
    return null;
  }
  return session;
}
