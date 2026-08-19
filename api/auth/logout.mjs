import { clearCookie, sessionCookie } from '../../lib/auth.mjs';

export default function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed.' });
  response.setHeader('Set-Cookie', clearCookie(sessionCookie));
  return response.status(204).end();
}
