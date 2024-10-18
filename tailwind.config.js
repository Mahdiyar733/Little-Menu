/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"ORG-color": "#F66141",
			},
		},
	},
	plugins: [require("daisyui"), require("tailwindcss-animated")],
};
