/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    fontSize: {
      sm: "18px",
      md: "23px",
      lg: "30px",
      xl: "60px",
    },
    colors: {
      Amethyst: "#916ACC",
      black: "#000000",
      white: "#FFFFFF",
      pink: "#F08898",
      green: "#8BEA00",
      purple: "#421A80",
    },
    screens: {
      sm: "600px",
      ms: "905px",
      md: "1240px",
      lg: "1400px",
    },
    extend: {},
  },
  plugins: [],
};
