export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        // Background
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-dark': 'var(--color-bg-dark)',

        // Text
        'text-base': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'text-white': 'var(--color-text-white)',

        // Brand
        'primary': 'var(--color-primary)',
        
        // Border
        'border-base': 'var(--color-border-primary)',
        'border-secondary': 'var(--color-border-secondary)',
      },
    },
  },
  plugins: [],
}