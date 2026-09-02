import type { APIRoute } from 'astro';
import { resend, MAIL } from '../../lib/email';
import { field, isEmail, isBot, json, wantsHtml, htmlPage } from '../../lib/forms';

export const prerender = false;

const CONFIRMATION = "Thank you — we'll be in touch.";

/**
 * JobsOxo waitlist. Emails the JobsOxo inbox. Fields are read leniently so the
 * JobsOxo page's form can decide which of name / company / message to collect.
 */
export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const html = wantsHtml(request);

  if (isBot(data)) {
    return html ? htmlPage(CONFIRMATION) : json({ ok: true });
  }

  const email = field(data, 'email');
  const name = field(data, 'name');
  const company = field(data, 'company');
  const crewSize = field(data, 'crewSize');
  const message = field(data, 'message');

  if (!isEmail(email)) {
    const error = 'Please enter a valid email.';
    return html ? htmlPage(error, 400) : json({ ok: false, error }, 400);
  }

  if (!resend) {
    console.warn('[api/waitlist] RESEND_API_KEY not set — waitlist signup from', email, 'not sent');
    const error = 'The waitlist is not connected yet — please email hello@jobsoxo.com.';
    return html ? htmlPage(error, 503) : json({ ok: false, error }, 503);
  }

  const body = [
    name && `Name:      ${name}`,
    `Email:     ${email}`,
    company && `Company:   ${company}`,
    crewSize && `Crew size: ${crewSize}`,
    message && `\n${message}`,
  ]
    .filter(Boolean)
    .join('\n');

  const { error } = await resend.emails.send({
    from: MAIL.from,
    to: MAIL.waitlistTo,
    replyTo: email,
    subject: `JobsOxo waitlist — ${name || email}`,
    text: body,
  });

  if (error) {
    console.error('[api/waitlist] Resend error', error);
    const message = 'Could not add you just now — please try again or email hello@jobsoxo.com.';
    return html ? htmlPage(message, 502) : json({ ok: false, error: message }, 502);
  }

  return html ? htmlPage(CONFIRMATION) : json({ ok: true });
};

export const GET: APIRoute = () => json({ ok: false, error: 'Method not allowed.' }, 405);
