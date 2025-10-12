/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,js,njk,md}",
		"./src/_includes/**/*.{html,js,njk}",
		"./src/_layouts/**/*.{html,js,njk}",
	],
	theme: {
		extend: {
			colors: {
				"ws-blue": {
					100: "#e6f0ff",
					200: "#bfdaff",
					300: "#99c4ff",
					400: "#73aeff",
					500: "#4d98ff",
					600: "#267aff",
					700: "#0061ff",
					800: "#0050d9",
					900: "#003fb3",
				},
			},
			fontFamily: {
				sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
			},
		},
	},
	plugins: [],
};
