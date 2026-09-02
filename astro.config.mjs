// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';

// Marketing site for Conor Foy Plaster. The eight content pages are static;
// the form endpoints under /api opt into on-demand rendering (see
// `export const prerender = false` in each) and run as Vercel functions.
export default defineConfig({
  site: 'https://conorfoy.com',
  adapter: vercel(),
  build: {
    format: 'directory',
  },
  env: {
    schema: {
      // Resend — both optional so the site builds and runs without secrets;
      // the endpoints degrade to a clear "not configured" response.
      RESEND_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
      RESEND_AUDIENCE_ID: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
      // GA4 Measurement ID (G-XXXXXXXXXX). Optional — unset means no Google
      // Analytics and no consent banner are rendered at all.
      PUBLIC_GA_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
  },
});
