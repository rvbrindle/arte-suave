/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'logo-alt': "url('/src/Assets/logo-alt.png')"
            },
            letterSpacing: {
                tightest: '-.075em',
                tighter: '-.05em',
                tight: '-.025em',
                normal: '0',
                wide: '.025em',
                wider: '.05em',
                widest: '.5em',
            },

            animation: {
                'fadeInLeft': "fadeIn 1s ease-in forwards, fromLeft 1.8s ease-in-out forwards",
                'fadeIn': "fadeIn 2s ease-in-out",
            },

            keyframes: {

                fadeIn: {
                    "0%": {
                        opacity: 0,
                    },
                    "100%": {opacity: 1,}
                },

                fromLeft: {
                    "0%": {
                        transform: 'translate(-100px)'
                    },
                    "100%": {
                        transform: 'translate(0)'
                    }
                },
            }
        },
    },
    plugins: [],
    variants: {
        animation: ["motion-safe"]
    }
}