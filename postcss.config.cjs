const tailwindcss = require("tailwindcss");
const nesting = require("tailwindcss/nesting");
const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		nesting(),
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		postcssPresetEnv({
			features: { "nesting-rules": false },
		}),
		autoprefixer,
	],
};

module.exports = config;
