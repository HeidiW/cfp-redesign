import type { APIRoute } from 'astro';
import { resend, audienceId } from '../../lib/email';
import { field, isEmail, isBot, sameOrigin, json, wantsHtml, htmlPage } from '../../lib/forms';

export const prerender = false;

const CONFIRMATION = 'Thank you — you are on the list.';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const html = wantsHtml(request);

  if (!sameOrigin(request)) {
    const error = 'This request looks like it came from another site.';
    return html ? htmlPage(error, 403) : json({ ok: false, error }, 403);
  }

  if (isBot(data)) {
    return html ? htmlPage(CONFIRMATION) : json({ ok: true });
  }

  const email = field(data, 'email');
  if (!isEmail(email)) {
    const error = 'Please enter a valid email.';
    return html ? htmlPage(error, 400) : json({ ok: false, error }, 400);
  }

  if (!resend || !audienceId) {
    console.warn('[api/newsletter] Resend not configured — signup from', email, 'not saved');
    const error = 'Signups are not open yet — check back soon.';
    return html ? htmlPage(error, 503) : json({ ok: false, error }, 503);
  }

  const { error } = await resend.contacts.create({
    audienceId,
    email,
    unsubscribed: false,
  });

  // A re-subscribe returns an "already exists" style error — treat as success.
  if (error && !/already|exist/i.test(error.message ?? '')) {
    console.error('[api/newsletter] Resend error', error);
    const message = 'Could not sign you up just now — please try again.';
    return html ? htmlPage(message, 502) : json({ ok: false, error: message }, 502);
  }

  return html ? htmlPage(CONFIRMATION) : json({ ok: true });
};

export const GET: APIRoute = () => json({ ok: false, error: 'Method not allowed.' }, 405);
