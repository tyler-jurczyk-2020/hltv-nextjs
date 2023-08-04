/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
theme: {
    extend: {
        fontFamily: { 
            ibm : ['"IBM Plex Sans"'], 
            poppins: ['Poppins'],
        },
        height: {
            'nav-b': '58px',
        },
        margin: {
            'nav-b': '58px',
        },
        padding: {
            'nav-b': '58px',
            'nav-e': '16px',
        },
        backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
