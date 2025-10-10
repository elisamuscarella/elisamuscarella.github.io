/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./_projects/*.md",
    "./_games/*.md",
    "./pages/*.html",
    "./pages/*.md",
    "./*.html",
    "./*.md"
  ],
  theme: {
    extend: {
      colors: {
        'game-primary': '#6366f1',
        'game-secondary': '#8b5cf6',
        'game-accent': '#06b6d4',
        'game-dark': '#0f172a',
        'game-light': '#f8fafc',
      },
      fontFamily: {
        'display': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #6366f1, 0 0 10px #6366f1, 0 0 15px #6366f1' },
          '100%': { boxShadow: '0 0 20px #6366f1, 0 0 30px #6366f1, 0 0 40px #6366f1' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}