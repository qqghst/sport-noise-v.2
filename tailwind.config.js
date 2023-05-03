const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-montserrat)', ...fontFamily.sans],
            },
            colors: {
                red: '#E2183F',
                blue: '#324590',
                black: '#202124',
                grey: '#888C9B',
                line: '#A9B2D9',
                hover: '#4353FF',
            }
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.stylesAbout': {
                    '@apply text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[37px] font-medium tracking-[-1%] leading-[140%] lg:leading-[52px] text-black w-full md:w-[78%]':
                        {},
                },
                '.stylesMoreProjectsTitle': {
                    '@apply text-[2.074rem] sm:text-[2.488rem] md:text-[2.986rem] lg:text-[3.583rem] xl:text-[4.3rem] 2xl:text-[4.3rem] font-normal':
                        {},
                },
            });
        },
    ],
};
