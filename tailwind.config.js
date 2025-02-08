/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        interw: "500", // Custom weight
        interw2: "300",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"], // Ensure "Inter" is loaded in your project
        bagel: ["Bagel Fat One", "serif"],
      },
      colors: {
        bgColor: "#FAF6F3",
        rOrange: "rgba(254, 118, 10, 1)", // This is fine, but you can also use hex: "#FE760A"
      },
      screens: {
        mobile: { max: "1000px" },
      },
    },
  },
  plugins: [],
};
