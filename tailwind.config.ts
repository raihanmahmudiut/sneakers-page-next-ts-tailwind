import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: 'hsl(26, 100%, 55%)',
          'pale-orange': 'hsl(25, 100%, 94%)',
        },
        neutral: {
          'very-dark-blue': 'hsl(220, 13%, 13%)',
          'dark-grayish-blue': 'hsl(219, 9%, 45%)',
          'grayish-blue': 'hsl(220, 14%, 75%)',
          'light-grayish-blue': 'hsl(223, 64%, 98%)',
          white: 'hsl(0, 0%, 100%)',
          'black-opacity-75': 'hsla(0, 0%, 0%, 0.75)',
        },
      },
      
    },
  },
  plugins: [],
}
export default config
