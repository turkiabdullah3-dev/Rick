/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',
        mist: '#EEF4F1',
        emerald: {
          50: '#effbf6',
          100: '#d7f5e6',
          200: '#b2ead0',
          300: '#7fd9b2',
          400: '#49c48f',
          500: '#22a96f',
          600: '#188658',
          700: '#156a48',
          800: '#14543c',
          900: '#124532',
        },
        sand: '#F5EFE4',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.08)',
        panel: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
      fontFamily: {
        sans: [
          '"Helvetica Neue W23 for SKY"',
          '"Helvetica Neue"',
          '"Noto Sans Arabic"',
          '"Tahoma"',
          'sans-serif',
        ],
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at center, rgba(255,255,255,0.12) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
