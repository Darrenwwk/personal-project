/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false,
    },
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: '#00A99D',
                secondary: '#82CEC8',
                'primary-dark': '#1D1D1D',
                'secondary-dark': '#292929',
                'off-white': '#F3F3F3',
            },
            fontFamily: {
                ubuntu: ['var(--font-ubuntu)'],
            },
        },
    },
    plugins: [],
};
