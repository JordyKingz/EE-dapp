const colors = require('tailwindcss/colors')
module.exports = {
    purge: [],
    darkMode: 'class', // false or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                rose: colors.rose,
                blue: {
                    500: '#00AEE8'
                },
                pink: {
                    500: '#FF3BFA'
                },
                green: {
                    500: '#5EFF67'
                },
                black: {
                    100: '#111111',
                    150: '#151617'
                }
            }
        }
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
