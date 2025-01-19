/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        'grey-0': 'hsl(0 0% 4%)',
        'grey-100': 'hsl(240 3% 6%)',
        'grey-200': 'hsl(220 6% 10%)',
        'grey-300': 'hsl(228 8% 13%)',
        'grey-400': 'hsl(228 12% 16%)',
        'grey-500': 'hsl(227 9% 20%)',
        'grey-600': 'hsl(220 1% 30%)',
        'grey-700': 'hsl(220 1% 45%)',
        'grey-800': 'hsl(225 2% 61%)',
        'grey-900': 'hsl(0 0% 98%)',
        'green': 'hsl(166 100% 47%)',
      },
      fontSize: {
        'sm': ['12px', {lineHeight: '18px'}],
        'base': ['13px', {lineHeight: '20px'}],
        'xl': ['18px', {lineHeight: '22px'}],
        '2xl': ['24px', {lineHeight: '28px'}],
      },
    },
  },
  plugins: [],
};
