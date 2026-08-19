import { readSession } from '../../lib/auth.mjs';

export default function handler(request, response) {
  if (request.method !== 'GET') return response.status(405).json({ error: 'Method not allowed.' });
  const session = readSession(request);
  response.setHeader('Cache-Control', 'private, no-store');
  return response.status(200).json(session ? { authenticated: true, user: { login: session.login, avatarUrl: session.avatarUrl } } : { authenticated: false });
}
