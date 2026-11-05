import { Redis } from '@upstash/redis';

// Works with both the Upstash integration env names and the legacy Vercel KV names.
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN,
});

// Only these event names are accepted, to prevent junk data.
export const ALLOWED_EVENTS = [
  'resume_download',
  'resume_open',
  'cv_download',
  'cv_open',
  'resume_modal_open',
  'contact_submit',
  'email_click',
  'email_copy',
  'phone_copy',
  'github_click',
  'linkedin_click',
];

export const MAX_RECENT = 500;
