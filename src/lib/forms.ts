/** Shared helpers for the /api form endpoints. */

/** Read a form field as a trimmed string ('' when missing or a file). */
export function field(data: FormData, key: string): string {
  const value = data.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const isEmail = (value: string): boolean => EMAIL_RE.test(value);

/**
 * Honeypot: a field named `_gotcha` that is hidden from people but filled by
 * naive bots. A non-empty value means "drop this silently".
 */
export const isBot = (data: FormData): boolean => field(data, '_gotcha') !== '';

/** True when the request expects an HTML page back (a no-JS form POST). */
export const wantsHtml = (request: Request): boolean =>
  (request.headers.get('accept') ?? '').includes('text/html');

export const json = (body: unknown, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

/** Minimal styled confirmation page for the no-JS fallback path. */
export const htmlPage = (heading: string, status = 200): Response =>
  new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8">` +
      `<meta name="viewport" content="width=device-width, initial-scale=1">` +
      `<title>${heading}</title></head>` +
      `<body style="font-family:Georgia,'Times New Roman',serif;color:#132a13;background:#ebf2fa;` +
      `max-width:34rem;margin:18vh auto 0;padding:0 1.5rem;line-height:1.8;font-size:1.05rem">` +
      `<p>${heading}</p>` +
      `<p><a href="/" style="color:#640d14">&larr; Back to conorfoy.com</a></p>` +
      `</body></html>`,
    { status, headers: { 'content-type': 'text/html; charset=utf-8' } },
  );
