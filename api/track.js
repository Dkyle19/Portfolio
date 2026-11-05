import { redis, ALLOWED_EVENTS, MAX_RECENT } from './_redis.js';

function detectDevice(ua = '') {
  if (/bot|crawl|spider|slurp|preview/i.test(ua)) return 'bot';
  if (/ipad|tablet/i.test(ua)) return 'tablet';
  if (/mobi|android|iphone/i.test(ua)) return 'mobile';
  return 'desktop';
}

function detectBrowser(ua = '') {
  if (/edg\//i.test(ua)) return 'Edge';
  if (/opr\//i.test(ua)) return 'Opera';
  if (/chrome\//i.test(ua)) return 'Chrome';
  if (/safari\//i.test(ua)) return 'Safari';
  if (/firefox\//i.test(ua)) return 'Firefox';
  return 'Other';
}

function referrerHost(ref) {
  try {
    return ref ? new URL(ref).hostname.replace(/^www\./, '') : 'direct';
  } catch {
    return 'direct';
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const event = String(body.event || '');
    if (!ALLOWED_EVENTS.includes(event)) return res.status(400).json({ error: 'Unknown event' });

    const ua = req.headers['user-agent'] || '';
    const device = detectDevice(ua);
    if (device === 'bot') return res.status(204).end();

    // Coarse, non-identifying info only. The IP address is never read or stored.
    const record = {
      event,
      ts: Date.now(),
      country: req.headers['x-vercel-ip-country'] || 'Unknown',
      device,
      browser: detectBrowser(ua),
      referrer: referrerHost(body.referrer),
    };

    const day = new Date().toISOString().slice(0, 10);

    await Promise.all([
      redis.hincrby('stats:totals', event, 1),
      redis.hincrby(`stats:day:${day}`, event, 1),
      redis.lpush('stats:recent', JSON.stringify(record)),
      redis.ltrim('stats:recent', 0, MAX_RECENT - 1),
    ]);

    return res.status(204).end();
  } catch (err) {
    console.error('track error', err);
    return res.status(500).json({ error: 'Failed to record event' });
  }
}
