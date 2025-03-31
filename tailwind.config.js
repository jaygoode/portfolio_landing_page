/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // ✅ For Next.js App Router
    "./components/**/*.{js,ts,jsx,tsx}", // ✅ For components
    "./pages/**/*.{js,ts,jsx,tsx}", // ✅ For Next.js Pages Router (if using)
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ If your components are inside `src/`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};