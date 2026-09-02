import type { APIRoute } from 'astro';
import { resend, MAIL } from '../../lib/email';
import { field, isEmail, isBot, json, wantsHtml, htmlPage } from '../../lib/forms';

export const prerender = false;

const CONFIRMATION = "Thank you — we'll reply within one business day.";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const html = wantsHtml(request);

  if (isBot(data)) {
    return html ? htmlPage(CONFIRMATION) : json({ ok: true });
  }

  const name = field(data, 'name');
  const email = field(data, 'email');
  const projectType = field(data, 'projectType');
  const timeline = field(data, 'timeline');
  const message = field(data, 'message');

  if (!name || !isEmail(email)) {
    const error = 'Please include your name and a valid email.';
    return html ? htmlPage(error, 400) : json({ ok: false, error }, 400);
  }

  if (!resend) {
    console.warn('[api/contact] RESEND_API_KEY not set — inquiry from', email, 'not sent');
    const error = 'The form is not connected yet — please email info@conorfoy.com.';
    return html ? htmlPage(error, 503) : json({ ok: false, error }, 503);
  }

  const body = [
    `Name:     ${name}`,
    `Email:    ${email}`,
    projectType && `Project:  ${projectType}`,
    timeline && `Timeline: ${timeline}`,
    '',
    message || '(no message)',
  ]
    .filter(Boolean)
    .join('\n');

  const { error } = await resend.emails.send({
    from: MAIL.from,
    to: MAIL.contactTo,
    replyTo: email,
    subject: `Inquiry — ${name}`,
    text: body,
  });

  if (error) {
    console.error('[api/contact] Resend error', error);
    const message = 'Could not send just now — please try again or email info@conorfoy.com.';
    return html ? htmlPage(message, 502) : json({ ok: false, error: message }, 502);
  }

  return html ? htmlPage(CONFIRMATION) : json({ ok: true });
};

export const GET: APIRoute = () => json({ ok: false, error: 'Method not allowed.' }, 405);
