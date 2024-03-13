/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "320px",
      bigPhone: "480px",
      tablet: "900px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Pragmata", "sans-serif"],
      },
      animation: {
        slowShow: "slowShow 0.5s ease-in-out",
      },
      keyframes: {
        slowShow: {
          "0%": { opacity: 0, innerHeight: 0, display: "none" },
          "100%": {
            opacity: 100,
            display: "inline-flex",
          },
        },
      },
    },
  },
  plugins: [],
};
