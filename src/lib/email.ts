import { Resend } from 'resend';
import { RESEND_API_KEY, RESEND_AUDIENCE_ID } from 'astro:env/server';

/** Resend client, or null when RESEND_API_KEY is unset (local dev without secrets). */
export const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

/** Newsletter Audience id, or undefined when unset. */
export const audienceId = RESEND_AUDIENCE_ID;

/**
 * Where each kind of form submission is routed. These are public addresses
 * (also printed on the Contact page and in the handoff). The `from` domain
 * must be verified in Resend for mail to actually send.
 */
export const MAIL = {
  from: 'Conor Foy Plaster <website@conorfoy.com>',
  /** Contact / project inquiries. */
  contactTo: 'info@conorfoy.com',
  /** JobsOxo waitlist. */
  waitlistTo: 'hello@jobsoxo.com',
} as const;
