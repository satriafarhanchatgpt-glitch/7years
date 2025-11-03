import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ghibli-sky': '#87CEEB',
        'ghibli-sky-light': '#B8DCF5',
        'ghibli-sky-deep': '#6AAFE6',
        'ghibli-sky-horizon': '#E8F4FA',
        'ghibli-grass': '#77B36E',
        'ghibli-grass-bright': '#96D48A',
        'ghibli-grass-dark': '#5A9B52',
        'ghibli-grass-yellow': '#BCD97E',
        'ghibli-earth': '#8BAA68',
        'ghibli-earth-dark': '#6B8A4B',
        'ghibli-tree': '#8B6F47',
        'ghibli-tree-dark': '#5D4A2F',
        'ghibli-foliage': '#68B55E',
        'ghibli-foliage-light': '#8DD482',
        'ghibli-foliage-dark': '#4D9645',
        'ghibli-text': '#2C2416',
        'ghibli-sun': '#FFE878',
        'ghibli-cloud': '#FFFFFF',
      },
      fontFamily: {
        'ghibli': ['var(--font-quicksand)', 'Quicksand', 'sans-serif'],
        'sans': ['var(--font-nunito)', 'Nunito', 'system-ui', 'sans-serif'],
      },
      animation: {
        'sway': 'sway 4s ease-in-out infinite',
        'drift': 'drift 60s linear infinite',
        'fadeInUp': 'fadeInUp 1s ease-out forwards',
        'fadeIn': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        drift: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

