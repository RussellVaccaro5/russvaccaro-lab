import { clearCookie, cookie, createSession, editorSiteUrl, isAllowedLogin, parseCookies, sessionCookie, stateCookie } from '../../lib/auth.mjs';

const fail = (response, message) => response.redirect(302, `${editorSiteUrl()}/editor/?auth_error=${encodeURIComponent(message)}`);

export default async function handler(request, response) {
  if (request.method !== 'GET') return response.status(405).json({ error: 'Method not allowed.' });
  const code = typeof request.query.code === 'string' ? request.query.code : '';
  const state = typeof request.query.state === 'string' ? request.query.state : '';
  const expectedState = parseCookies(request)[stateCookie];
  response.setHeader('Set-Cookie', clearCookie(stateCookie));
  if (!code || !state || !expectedState || state !== expectedState) return fail(response, 'The sign-in request expired. Please try again.');

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { accept: 'application/json', 'content-type': 'application/json' },
      body: JSON.stringify({ client_id: process.env.GITHUB_CLIENT_ID, client_secret: process.env.GITHUB_CLIENT_SECRET, code, redirect_uri: `${editorSiteUrl()}/api/auth/callback` }),
    });
    const token = await tokenResponse.json();
    if (!tokenResponse.ok || !token.access_token) throw new Error(token.error_description || 'GitHub did not issue an access token.');
    const userResponse = await fetch('https://api.github.com/user', { headers: { accept: 'application/vnd.github+json', authorization: `Bearer ${token.access_token}`, 'x-github-api-version': '2022-11-28' } });
    const user = await userResponse.json();
    if (!userResponse.ok || typeof user.login !== 'string') throw new Error('GitHub user lookup failed.');
    if (!isAllowedLogin(user.login)) return fail(response, 'This GitHub account is not approved for editor access.');
    response.setHeader('Set-Cookie', [clearCookie(stateCookie), cookie(sessionCookie, createSession(user), { maxAge: 8 * 60 * 60 })]);
    return response.redirect(302, `${editorSiteUrl()}/editor/`);
  } catch (error) {
    console.error(error);
    return fail(response, 'GitHub sign-in could not be completed.');
  }
}
