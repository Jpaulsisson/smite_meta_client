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
        'bg-color': 'var(--primaryBgColor)',
        'font-color': 'var(--primaryFontColor)',
      },
      borderWidth: {
        'thin': '1px',
      },
      backgroundImage: {
        'grade': 'radial-gradient(circle at bottom right, black 10%, transparent, transparent)',
      },
      boxShadow: {
        'link-shadow': '5px 5px 10px silver',
      }
    },
  },
  plugins: [],
}
export default config
