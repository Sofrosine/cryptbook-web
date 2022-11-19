const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
      },
      margin: {
        "59px": "59px",
      },
      fontFamily: {
        bold: ["Nunito-Bold", ...defaultTheme.fontFamily.sans],
        sans: ["Nunito-Regular", ...defaultTheme.fontFamily.sans],
        medium: ["Nunito-Medium", ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        "1xl": "0px 4px 13px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        "1sm": "40px 0px 0px 56px;",
      },
    },
  },
  plugins: [],
};
