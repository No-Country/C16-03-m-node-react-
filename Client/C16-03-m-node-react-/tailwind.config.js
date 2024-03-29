/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        bgForm: "rgba(0,0,0,.5)",
        Amethyst: "#916ACC",
        black: "#000000",
        white: "#FFFFFF",
        pink: "#F08898",
        green: "#8BEA00",
        purple: "#421A80",
        gray: "#8e8e8e",
        bgDashboard: "#421A80",
        bgDetailDashboard: "#73599C",
        purpleDark: "#221633",
        greyForm: "#e9ecef",
        lavander: "#E6AFFC",
      },
      screens: {
        sm: "700px",
        ms: "905px",
        md: "1240px",
        lg: "1400px",
      },
    },
  },
  plugins: [],
};
