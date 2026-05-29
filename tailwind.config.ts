import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0faf4',
          100: '#dcf5e5',
          200: '#b8eacc',
          300: '#84d4a2',
          400: '#52b788',
          500: '#2d9e6b',
          600: '#1e7d52',
          700: '#1a6344',
          800: '#184f38',
          900: '#14402e',
          950: '#0a2318',
        },
        secondary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#48cae4',
          500: '#0096c7',
          600: '#0077b6',
          700: '#005f8e',
          800: '#004e75',
          900: '#003d5c',
        },
        accent: {
          50: '#fef5ef',
          100: '#fde9d7',
          200: '#fad0ae',
          300: '#f7b267',
          400: '#f4845f',
          500: '#e07a5f',
          600: '#cc5e43',
          700: '#a84535',
          800: '#883930',
          900: '#6e312a',
        },
        stone: {
          50: '#fdfcf9',
          100: '#faf0e6',
          200: '#f5e6d3',
          300: '#e8d5b7',
          400: '#d4b896',
          500: '#c9b89a',
          600: '#a89070',
          700: '#8a7055',
          800: '#6e5640',
          900: '#574330',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(0,0,0,0.08)',
        'soft-lg': '0 8px 40px rgba(0,0,0,0.12)',
        'soft-xl': '0 16px 60px rgba(0,0,0,0.16)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(160deg, #87CEEB 0%, #48cae4 25%, #2d9e6b 60%, #1a4731 100%)',
        'pool-gradient': 'linear-gradient(135deg, #48cae4 0%, #0096c7 40%, #0077b6 100%)',
        'garden-gradient': 'linear-gradient(135deg, #52b788 0%, #2d9e6b 40%, #1a4731 100%)',
        'floral-gradient': 'linear-gradient(135deg, #f4845f 0%, #e07a5f 40%, #cc5e43 100%)',
        'stone-gradient': 'linear-gradient(135deg, #e8d5b7 0%, #c9b89a 40%, #a89070 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
