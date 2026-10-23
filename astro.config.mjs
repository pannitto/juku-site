// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Vercel で初期公開する場合の URL。公開後に独自ドメインに差し替えます。
  site: 'https://juku-site.vercel.app',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    // CSS をすべて外部ファイルにする。
    // HTML の中に <style> を書かないことで、CSP で 'unsafe-inline' を許さずに済む（vercel.json）
    inlineStylesheets: 'never',
  },
});
