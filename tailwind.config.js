/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false,
    },
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: '#dff6ff',
                rtmOrange: '#fdb83e',
                skyBlue: '#3ebaeb',
            },
            fontFamily: {
                ubuntu: ['var(--font-ubuntu)'],
            },
        },
    },
    plugins: [],
};
