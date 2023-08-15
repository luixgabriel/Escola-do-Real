import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e7e7ee',
          100: '#b4b6c9',
          200: '#9092af',
          300: '#5d618a',
          400: '#3d4274',
          500: '#0d1351',
          600: '#0c114a',
          700: '#090d3a',
          800: '#070a2d',
          900: '#050822',
        },
        green: {
          50: '#e8f9f5',
          100: '#b7ebde',
          200: '#94e2cf',
          300: '#64d5b9',
          400: '#45cdab',
          500: '#17c096',
          600: '#15af89',
          700: '#10886b',
          800: '#0d6a53',
          900: '#0a513f',
        },
      },
    },
  },
  plugins: [],
}
export default config
