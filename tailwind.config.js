module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },

  theme: {
    fontFamily: {
      "sans": ["Open\\ Sans", 'sans-serif']
    },
    extend: {},
  },
  variants: {},

  plugins: [require("@tailwindcss/typography")],
};
