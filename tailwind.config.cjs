/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				first: {
					50: 'hsl(245, 100%, 97%)',
					100: 'hsl(240, 100%, 95%)',
					200: 'hsl(240, 100%, 92%)',
					300: 'hsl(242, 100%, 85%)',
					400: 'hsl(244, 100%, 76%)',
					500: 'hsl(248, 99%, 66%)',
					600: 'hsl(252, 92%, 58%)',
					700: 'hsl(253, 77%, 50%)',
					800: 'hsl(253, 76%, 42%)',
					900: 'hsl(253, 74%, 33%)',
					950: 'hsl(251, 79%, 23%)'
				},
				second: {
					50: 'hsl(30, 100%, 96%)',
					100: 'hsl(31, 100%, 92%)',
					200: 'hsl(28, 100%, 83%)',
					300: 'hsl(26, 100%, 72%)',
					400: 'hsl(22, 100%, 61%)',
					500: 'hsl(20, 100%, 54%)',
					600: 'hsl(16, 95%, 48%)',
					700: 'hsl(13, 93%, 40%)',
					800: 'hsl(10, 84%, 34%)',
					900: 'hsl(11, 79%, 28%)',
					950: 'hsl(8, 86%, 15%)'
				},
				third: {
					50: 'hsl(168, 88%, 97%)',
					100: 'hsl(169, 100%, 89%)',
					200: 'hsl(169, 100%, 79%)',
					300: 'hsl(171, 92%, 64%)',
					400: 'hsl(173, 79%, 50%)',
					500: 'hsl(174, 96%, 40%)',
					600: 'hsl(176, 100%, 32%)',
					700: 'hsl(176, 92%, 26%)',
					800: 'hsl(177, 82%, 22%)',
					900: 'hsl(177, 73%, 19%)',
					950: 'hsl(180, 100%, 10%)'
				}
			},
			fontFamily: {
				InterTight: ['InterTight', 'sans'],
				'InterTight-Bold': ['InterTight-Bold', 'sans'],
				'InterTight-Regular': ['InterTight-Regular', 'sans'],
				'InterTight-ExtraBold': ['InterTight-ExtraBold', 'sans']
			}
		}
	},
	plugins: []
}
