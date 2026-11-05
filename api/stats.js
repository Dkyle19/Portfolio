import { redis } from './_redis.js';

// Only the dashboard site may read stats (plus a password check below).
const ALLOWED_ORIGINS = (process.env.DASHBOARD_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

function setCors(req, res) {
  const origin = req.headers.origin;
  if (origin && (ALLOWED_ORIGINS.length === 0 || ALLOWED_ORIGINS.includes(origin))) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization');
}

export default async function handler(req, res) {
  setCors(req, res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).end();

  const password = process.env.DASHBOARD_PASSWORD;
  const auth = req.headers.authorization || '';
  if (!password || auth !== `Bearer ${password}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Last 30 days of daily counts
    const days = [];
    for (let i = 29; i >= 0; i--) {
      days.push(new Date(Date.now() - i * 86400000).toISOString().slice(0, 10));
    }

    const [totals, recentRaw, ...daily] = await Promise.all([
      redis.hgetall('stats:totals'),
      redis.lrange('stats:recent', 0, -1),
      ...days.map((d) => redis.hgetall(`stats:day:${d}`)),
    ]);

    const recent = (recentRaw || []).map((r) => (typeof r === 'string' ? JSON.parse(r) : r));

    return res.status(200).json({
      totals: totals || {},
      daily: days.map((date, i) => ({ date, counts: daily[i] || {} })),
      recent,
    });
  } catch (err) {
    console.error('stats error', err);
    return res.status(500).json({ error: 'Failed to load stats' });
  }
}
