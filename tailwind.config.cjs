/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'pigment-indigo': {
          '50': '#fbf4ff',
          '100': '#f6e6ff',
          '200': '#eed2ff',
          '300': '#e1aeff',
          '400': '#cf7bff',
          '500': '#bc49ff',
          '600': '#ac25f8',
          '700': '#9515db',
          '800': '#7d17b2',
          '900': '#67148f',
          '950': '#5a0086',
        },
        'neon-carrot': {
          '50': '#fff7ed',
          '100': '#ffedd5',
          '200': '#ffd8a9',
          '300': '#febb73',
          '400': '#fd9136',
          '500': '#fb7514',
          '600': '#ec590a',
          '700': '#c4410a',
          '800': '#9b3411',
          '900': '#7d2d11',
          '950': '#441406',
        },      
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
		},
	},
	plugins: [],
}
