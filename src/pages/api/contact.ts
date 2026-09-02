import type { APIRoute } from 'astro';
import { resend, MAIL } from '../../lib/email';
import { field, isEmail, isBot, sameOrigin, readForm, json, wantsHtml, htmlPage } from '../../lib/forms';

export const prerender = false;

const CONFIRMATION = "Thank you — we'll reply within one business day.";

export const POST: APIRoute = async ({ request }) => {
  const html = wantsHtml(request);

  if (!sameOrigin(request)) {
    const error = 'This request looks like it came from another site.';
    return html ? htmlPage(error, 403) : json({ ok: false, error }, 403);
  }

  const data = await readForm(request);
  if (!data) {
    const error = 'Could not read the form. Please try again.';
    return html ? htmlPage(error, 400) : json({ ok: false, error }, 400);
  }

  if (isBot(data)) {
    return html ? htmlPage(CONFIRMATION) : json({ ok: true });
  }

  const name = field(data, 'name');
  const email = field(data, 'email');
  const company = field(data, 'company');
  const phone = field(data, 'phone');
  const role = field(data, 'role');
  const projectType = field(data, 'projectType');
  const location = field(data, 'location');
  const area = field(data, 'area');
  const timeline = field(data, 'timeline');
  const finishes = data.getAll('finishes').filter((v): v is string => typeof v === 'string');
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
    company && `Company:  ${company}`,
    phone && `Phone:    ${phone}`,
    role && `Role:     ${role}`,
    projectType && `Project:  ${projectType}`,
    location && `Location: ${location}`,
    area && `Area:     ${area}`,
    timeline && `Timeline: ${timeline}`,
    finishes.length > 0 && `Finishes: ${finishes.join(', ')}`,
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
