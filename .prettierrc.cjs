module.exports = {
	printWidth: 80,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: true,
	overrides: [
		{
			files: ['*.json', '*.md', '*.toml', '*.yml', '*.astro', '*.jsx', '*.js'],
			options: {
				useTabs: false
			}
		}
	],
	endOfLine: 'lf'
}
