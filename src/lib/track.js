/**
 * Lightweight, privacy-friendly event tracker.
 *
 * Sends anonymous interaction events (e.g. resume downloads, contact form
 * submissions) to the /api/track serverless function. No cookies, no IP
 * addresses and no personal data are collected or stored.
 *
 * Usage:
 *   - Call trackEvent('event_name') directly, or
 *   - Add a data-track="event_name" attribute to any clickable element.
 */

const ENDPOINT = '/api/track';

export function trackEvent(event) {
  // Skip tracking during local development
  if (import.meta.env.DEV) return;

  try {
    const payload = JSON.stringify({
      event,
      path: window.location.pathname,
      referrer: document.referrer || '',
    });

    // sendBeacon survives page navigation / downloads; fall back to fetch
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, new Blob([payload], { type: 'application/json' }));
    } else {
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // Tracking must never break the site
  }
}

/** Global listener: any click on an element with data-track="..." is recorded. */
export function initClickTracking() {
  document.addEventListener(
    'click',
    (e) => {
      const el = e.target.closest?.('[data-track]');
      if (el) trackEvent(el.getAttribute('data-track'));
    },
    { capture: true }
  );
}
