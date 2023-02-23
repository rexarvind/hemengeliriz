/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
        fontFamily: {
            'sans': ['Rubik','-apple-system','BlinkMacSystemFont','Arial','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'],
        },
        container: {
            center: true,
        },
        colors: {
            blue: {
                400: '#24bff5',
                500: '#00a8e2',
                800: '#4a5a6a',
                900: '#34495f',
            }
        },
        borderRadius: {
            DEFAULT: '5px',
        },
        screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
        },
    },
  },
  plugins: [],
}
