import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import siteConfig from './src/data/site-config';

// https://astro.build/config
export default defineConfig({
    site: 'h4k4riel.github.io',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap()]
});
