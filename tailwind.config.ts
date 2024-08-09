/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "128px",
      },
    },
    // fontFamily: {
    //   display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
    //   body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
    // },

    extend: {
      colors: {
        secondary: {
          50: "#edc4b3",
          100: "#e6b8a2",
          200: "#deab90",
          300: "#d69f7e",
          400: "#cd9777",
          500: "#c38e70",
          600: "#b07d62",
          700: "#9d6b53",
          800: "#8a5a44",
          900: "#774936",
        },
        primary: {
          50: "#a9d6e5",
          100: "#89c2d9",
          200: "#61a5c2",
          300: "#468faf",
          400: "#2c7da0",
          500: "#2a6f97",
          600: "#014f86",
          700: "#01497c",
          800: "#013a63",
          900: "#012a4a",
        },
        neutral: {
          50: "#F8F9FA",
          100: "#E7EAEC",
          200: "#D6DADE",
          300: "#C0C6CB",
          400: "#A2A9B0",
          500: "#767D85",
          600: "#3F454C",
          700: "#343A40",
          800: "#2B3035",
          900: "#212529",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
