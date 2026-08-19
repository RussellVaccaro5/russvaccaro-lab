import { createSign } from 'node:crypto';
import { requireSession } from '../lib/auth.mjs';
=======

const paths = {
  books: 'src/data/books.json',
  interview: 'src/data/interview-questions.json',
  learning: 'src/data/learning-cards.json',
  discovery: 'src/data/discovery-questions.json',
};

const encode = (value) => Buffer.from(value).toString('base64url');
const json = (response, status, body) => response.status(status).json(body);

function appJwt(appId, privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const header = encode(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payload = encode(JSON.stringify({ iat: now - 60, exp: now + 540, iss: appId }));
  const unsigned = `${header}.${payload}`;
  const signer = createSign('RSA-SHA256');
  signer.update(unsigned);
  return `${unsigned}.${signer.sign(privateKey.replace(/\\n/g, '\n'), 'base64url')}`;
}

async function github(path, options, token) {
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: { accept: 'application/vnd.github+json', 'x-github-api-version': '2022-11-28', authorization: `Bearer ${token}`, 'content-type': 'application/json', ...options?.headers },
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || `GitHub returned ${response.status}.`);
  return body;
}

function validatePayload(body) {
  if (!body || typeof body !== 'object') return 'Request body is missing.';
  if (typeof body.title !== 'string' || body.title.trim().length < 3 || body.title.length > 100) return 'Enter a pull request title between 3 and 100 characters.';
  if (typeof body.summary !== 'string' || body.summary.trim().length < 3) return 'Enter a change summary.';
  if (!body.datasets || typeof body.datasets !== 'object' || Array.isArray(body.datasets)) return 'No datasets were supplied.';
  const keys = Object.keys(body.datasets);
  if (!keys.length || keys.some((key) => !(key in paths))) return 'The dataset selection is invalid.';
  for (const key of keys) {
    const dataset = body.datasets[key];
    if (!Array.isArray(dataset) || dataset.length === 0) return `${key} must be a non-empty array.`;
    const ids = new Set();
    for (const entry of dataset) {
      if (!entry || typeof entry !== 'object' || typeof entry.id !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.id)) return `${key} contains an invalid entry or ID.`;
      if (ids.has(entry.id)) return `${key} contains duplicate ID “${entry.id}”.`;
      ids.add(entry.id);
    }
  }
  return null;
}

export default async function handler(request, response) {
  if (request.method !== 'POST') return json(response, 405, { error: 'Method not allowed.' });
  if (!requireSession(request, response)) return;
=======
  const error = validatePayload(request.body);
  if (error) return json(response, 400, { error });

  const required = ['GITHUB_APP_ID', 'GITHUB_APP_PRIVATE_KEY', 'GITHUB_APP_INSTALLATION_ID', 'GITHUB_REPOSITORY_OWNER', 'GITHUB_REPOSITORY_NAME'];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length) return json(response, 503, { error: `Publishing is not configured (${missing.join(', ')}).` });

  try {
    const owner = process.env.GITHUB_REPOSITORY_OWNER;
    const repo = process.env.GITHUB_REPOSITORY_NAME;
    const base = process.env.GITHUB_BASE_BRANCH || 'main';
    const jwt = appJwt(process.env.GITHUB_APP_ID, process.env.GITHUB_APP_PRIVATE_KEY);
    const installation = await github(`/app/installations/${process.env.GITHUB_APP_INSTALLATION_ID}/access_tokens`, { method: 'POST', body: '{}' }, jwt);
    const token = installation.token;
    const baseRef = await github(`/repos/${owner}/${repo}/git/ref/heads/${encodeURIComponent(base)}`, {}, token);
    const branch = `content/editor-${new Date().toISOString().replace(/[-:]/g, '').replace(/\..+/, '').replace('T', '-')}`;
    await github(`/repos/${owner}/${repo}/git/refs`, { method: 'POST', body: JSON.stringify({ ref: `refs/heads/${branch}`, sha: baseRef.object.sha }) }, token);

    for (const [key, dataset] of Object.entries(request.body.datasets)) {
      const path = paths[key];
      const existing = await github(`/repos/${owner}/${repo}/contents/${path}?ref=${encodeURIComponent(branch)}`, {}, token);
      await github(`/repos/${owner}/${repo}/contents/${path}`, {
        method: 'PUT',
        body: JSON.stringify({ message: `Update ${key} content`, content: Buffer.from(`${JSON.stringify(dataset, null, 2)}\n`).toString('base64'), sha: existing.sha, branch }),
      }, token);
    }

    const pull = await github(`/repos/${owner}/${repo}/pulls`, {
      method: 'POST',
      body: JSON.stringify({ title: request.body.title.trim(), body: `${request.body.summary.trim()}\n\nCreated through the protected Russ Vaccaro Lab content editor.`, head: branch, base }),
    }, token);
    return json(response, 201, { url: pull.html_url, number: pull.number });
  } catch (publishError) {
    console.error(publishError);
    return json(response, 502, { error: publishError instanceof Error ? publishError.message : 'GitHub publishing failed.' });
  }
}
