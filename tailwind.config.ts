import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-rubik)'],
        mono: ['var(--font-roboto-mono)'],
        logo: ['var(--font-indie-flower)'],
      },
      colors: {
        primary: {
          '50': '#f2f4fc',
          '100': '#e2e8f7',
          '200': '#ccd6f1',
          '300': '#a9bce7',
          '400': '#809ada',
          '500': '#6179d0',
          '600': '#4e60c2',
          '700': '#4652b9',
          '800': '#3c4391',
          '900': '#343b74',
          '950': '#232648',
        },
      },
    },
  },
  plugins: [],
};
export default config;
