module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      margin: {
        100: "26rem",
      },
      fontFamily: {
        roboto: "Roboto",
        montserrat: "Montserrat",
        poppins: "Poppins",
        lato: "Lato",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
