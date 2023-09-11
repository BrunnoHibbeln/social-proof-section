/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['var(--font-spartan)'],
      },
      fontSize: {
        body: '0.938rem',
      },
      colors: {
        'dark-magenta': 'hsl(300, 43%, 22%)',
        magenta: 'hsl(303, 10%, 53%)',
        'light-magenta': 'hsl(300, 24%, 96%)',
        pink: 'hsl(333, 80%, 67%)',
      },
      backgroundImage: {
        mobile: [
          'url(./images/bg-pattern-top-mobile.svg), url(./images/bg-pattern-bottom-mobile.svg)',
        ],
        desktop: [
          'url(./images/bg-pattern-top-desktop.svg), url(./images/bg-pattern-bottom-desktop.svg)',
        ],
      },
      backgroundPosition: {
        pattern: 'top, bottom',
      },
    },
  },
  plugins: [],
}
