const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,jsx,tsx,html}'],
    theme: {
        screens: {
            xs: '440px',
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                lexend: ['Lexend Deca', 'san-serif'],
                mukta: ['Mukta', 'san-serif'],
            },
            colors: {
                gray: '#f3f3f3',
            },
        },
    },
    plugins: [],
}
