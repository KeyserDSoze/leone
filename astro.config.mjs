// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// Configurazione per il sito di Leone - Lista nascita e celebrazione
const forceGitHubPages = process.env.DEPLOY_TARGET === 'github';
const forceCustomDomain = process.env.DEPLOY_TARGET === 'custom';
const useGitHubConfig = forceGitHubPages || (process.env.CI && !process.env.CUSTOM_DOMAIN && !forceCustomDomain);

// Configurazione URL con supporto per leonerapiti.com
const siteUrl = forceCustomDomain ? 'https://leonerapiti.com' : (useGitHubConfig ? 'https://keyserdsoze.github.io' : 'https://leonerapiti.com');
const baseUrl = (useGitHubConfig && !forceCustomDomain) ? '/leone' : '';

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	base: baseUrl,
	integrations: [mdx(), sitemap(), tailwind()],
	build: {
		assets: '_astro'
	}
});
