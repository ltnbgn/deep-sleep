module.exports = {
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			...theme('colors'),
			primary: '#FFC947',
			secondary: '#185ADB'
		})
	},
	variants: {
		extend: {}
	},
	plugins: []
}
