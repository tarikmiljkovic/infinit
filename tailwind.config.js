/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   white: "#ffffff",
    //   'tahiti': {
    //     100: "#a5a5a5",
    //     200: "#a5f3fc",
    //     300: "#67e8f9",
    //     400: "#22d3ee",
    //     500: "#06b6d4",
    //     600: "#0891b2",
    //     700: "#0e7490",
    //     800: "#155e75",
    //     900: "#164e63",
    //   },
    //   'blue': {
    //     100: "#004B88",
    //     200: "#004B88",
    //     300: "#004B88",
    //     400: "#004B88",
    //     500: "#1d4473",
    //     600: "#004B88",
    //     700: "#1d4473",
    //     800: "#004B88",
    //     900: "#004B88",
    //   },
    // },
    extend: {
      fontFamily: {
        sans: ["Poppins", "Libre Franklin", "Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
