module.exports = {
  mode: "jit",
  purge: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        buttonGreen: "#65E4A3",
        blueDark: "#0A2640",
        grayLight: "#777777",
        blueLight: "#0DBBFC",
        pink: "#C4C4C4",
        greenLight: "#69E6A6",
        lightWhite:"#F1F1F1"
      },
      maxWidth: {
        max: "1400px",
      },
      screens: {
        "m-max": { max: "915px" },
        m: "915px",
        "sm-max": { max: "715px" },
        smm: "820px",
      },
    },
  },
  plugins: [],
};
