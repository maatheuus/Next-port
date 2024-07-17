const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: { medium: "1.6rem" },
      colors: {
        background: "rgb(var(--background))",
        "btn-bg": "rgb(var(--btn-bg))",
        "svg-fill": "rgb(var(--svg-fill))",
        "btn-color": "rgb(var(--btn-color))",
        "primary-white": "rgb(var(--primary-white))",
        "primary-gray": "rgb(var(--primary-gray))",
        "text-layout": "rgb(var(--text-layout))",
      },
      textColor: {
        hoverColor: "#a1ce5f",
      },
      borderColor: {
        borderHover: "#a1ce5f",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [new MiniCssExtractPlugin()],
};
