import { cookie, createState, editorSiteUrl, stateCookie } from '../../lib/auth.mjs';

export default function handler(request, response) {
  if (request.method !== 'GET') return response.status(405).json({ error: 'Method not allowed.' });
  if (!process.env.GITHUB_CLIENT_ID) return response.status(503).json({ error: 'GitHub authentication is not configured.' });
  const state = createState();
  const callback = `${editorSiteUrl()}/api/auth/callback`;
  const authorize = new URL('https://github.com/login/oauth/authorize');
  authorize.searchParams.set('client_id', process.env.GITHUB_CLIENT_ID);
  authorize.searchParams.set('redirect_uri', callback);
  authorize.searchParams.set('state', state);
  response.setHeader('Set-Cookie', cookie(stateCookie, state));
  return response.redirect(302, authorize.toString());
}
