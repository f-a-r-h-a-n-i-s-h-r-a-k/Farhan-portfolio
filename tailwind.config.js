/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        secondary: 'var(--secondary)',
        dark: 'var(--dark)',
        darker: 'var(--darker)',
        light: 'var(--light)',
        gray: 'var(--gray)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        custom: 'var(--shadow)',
        card: 'var(--card-shadow)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};