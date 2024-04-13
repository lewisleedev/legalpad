/** @type {import('tailwindcss').Config}*/
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {},
	},

	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				legalpad: {
					primary: "#226089",
					secondary: "#0b8457",
					accent: "#ff5959",
					neutral: "#3f3b3b",
					info: "#49beb7",
					success: "#83e85a",
					warning: "#eac100",
					error: "#ff304f",
					"base-100": "#fdfdfd",
				},
			},
		],
	},
};

module.exports = config;
