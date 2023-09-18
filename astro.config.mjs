import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import react from '@astrojs/react'
import compressor from 'astro-compressor'

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		tailwind(),
		compressor({
			gzip: true,
			brotli: true,
			fileExtensions: ['js', 'css', 'html', 'json', 'svg', 'png', 'webp', 'ttf']
		}),
		{
			name: 'manifest',
			hooks: {
				'astro:build:setup': (options) => {
					options.vite.build.manifest = true
				}
			}
		}
	],
	redirects: {
		'/propuestas': '/'
	},
	output: 'server',
	adapter: vercel()
})
