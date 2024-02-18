/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'geist': 'Geist, sans-serif',
				'geist-mono': 'Geist Mono, monospace'
			}
		}
	},
	plugins: [],
}
