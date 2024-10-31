/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "img-banner": "url('/src/assets/Banner.svg')",
      },
      colors: {
        "primary-color": "#EF6B4A",
        "secundary-color": "#6251DD",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2lg": "1100px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};