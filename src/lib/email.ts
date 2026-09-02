import { Resend } from 'resend';
import { RESEND_API_KEY, RESEND_AUDIENCE_ID } from 'astro:env/server';

/** Resend client, or null when RESEND_API_KEY is unset (local dev without secrets). */
export const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

/** Newsletter Audience id, or undefined when unset. */
export const audienceId = RESEND_AUDIENCE_ID;

/**
 * Where each kind of form submission is routed.
 *
 * `from` sends on a dedicated subdomain (send.conorfoy.com) so the website's
 * automated mail keeps its own sending reputation and DNS records, separate
 * from the mailbox on conorfoy.com. Verify `send.conorfoy.com` in Resend.
 * Replies go to the person who filled the form (`replyTo` on each send), not
 * to this address.
 *
 * `contactTo` / `waitlistTo` are the real inboxes (also shown on the site).
 */
export const MAIL = {
  from: 'Conor Foy Plaster <send@send.conorfoy.com>',
  /** Contact / project inquiries. */
  contactTo: 'info@conorfoy.com',
  /** JobsOxo waitlist. */
  waitlistTo: 'hello@jobsoxo.com',
} as const;
