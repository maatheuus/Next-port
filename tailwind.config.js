import MiniCssExtractPlugin from "mini-css-extract-plugin";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const darkMode = "class";
export const theme = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./@/**/*.{js,jsx}",
  ],
  prefix: "",
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
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    textColor: {
      hoverColor: "#a1ce5f",
    },
    borderColor: {
      borderHover: "#a1ce5f",
    },
    animation: {
      "infinite-scroll": "infinite-scroll 25s linear infinite",
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
};
export const plugins = [
  new MiniCssExtractPlugin(),
  require("tailwindcss-animate"),
];
