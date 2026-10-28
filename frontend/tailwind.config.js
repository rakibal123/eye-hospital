/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a3d5c',
        navy2: '#08324d',
        teal: {
          DEFAULT: '#1fb5a3',
          hover: '#1aa392'
        },
        bg: '#f1f7fc',
        card: '#ffffff',
        ink: '#12324a',
        mute: '#5d7487',
        line: '#dbe7f1',
        tint: '#e3f4f2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        'btn': '8px',
        'card': '12px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(10, 61, 92, 0.08)',
      }
    },
  },
  plugins: [],
}
