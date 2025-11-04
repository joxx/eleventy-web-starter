const js = require("@eslint/js");

module.exports = [
	// Base configuration for all files
	js.configs.recommended,

	{
		// General configuration for all JavaScript files
		files: ["**/*.js"],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "script", // Default to script (CommonJS)
			globals: {
				// Node.js globals
				process: "readonly",
				Buffer: "readonly",
				__dirname: "readonly",
				__filename: "readonly",
				module: "readonly",
				require: "readonly",
				exports: "readonly",
				global: "readonly",
				console: "readonly",
			},
		},
		rules: {
			// Best practices (formatting rules removed - handled by Prettier)
			"no-console": "warn",
			"no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
			"no-undef": "error",
			"prefer-const": "error",
			"no-var": "error",
		},
	},

	{
		// Configuration for browser JavaScript files
		files: ["src/assets/js/**/*.js"],
		languageOptions: {
			sourceType: "module", // ES modules for browser code
			globals: {
				// Browser globals
				window: "readonly",
				document: "readonly",
				navigator: "readonly",
				localStorage: "readonly",
				sessionStorage: "readonly",
				fetch: "readonly",
				console: "readonly",
			},
		},
		rules: {
			"no-console": "off", // Allow console in browser development
		},
	},

	{
		// Configuration for Eleventy and Node.js config files
		files: [".eleventy.js", "tailwind.config.js", "postcss.config.js"],
		languageOptions: {
			sourceType: "script",
		},
		rules: {
			"no-console": "off", // Allow console in config files
		},
	},

	{
		// Ignore built files and dependencies
		ignores: [
			"node_modules/**",
			"dist/**",
			"src/static/build/**",
			"*.min.js",
			"**/*.njk", // Ignore Nunjucks template files
			"**/*.html", // Ignore HTML files
			"**/*.md", // Ignore Markdown files
		],
	},
];
