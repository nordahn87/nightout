const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,jsx,tsx,html}'],
    theme: {
        screens: {
            xs: '440px',
            ...defaultTheme.screens,
        },
    },
    plugins: [],
}
