/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "320px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
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
