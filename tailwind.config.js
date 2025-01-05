/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6b1e4d",
          dark: "#1e356b",
        },
        background: {
          light: "#ffffff",
          dark: "#1e293b",
        },
        text: {
          light: "#1f2937",
          dark: "#e5e7eb",
        },
        button: {
          primary: "#1e596b",
          primaryDark: "#397eea",
          secondary: "#000000",
          secondaryDark: "#ffffff",
        },
      },
      screens: {
        xs: "400px", // Custom breakpoint for extra small screens
        sm: "640px", // Default small screen
        md: "768px", // Default medium screen
        lg: "1024px", // Default large screen
        xl: "1280px", // Default extra-large screen
        "2xl": "1536px", // Default double extra-large screen
        "3xl": "1600px", // Custom breakpoint for 3XL screens
        "4xl": "1920px", // Custom breakpoint for 4XL screens
      },
    },
  },
  plugins: [nextui()],
};
