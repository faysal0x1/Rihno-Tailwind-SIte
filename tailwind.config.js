/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*",
    "./node_modules/flowbite/**/*.js",
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
    "./src/**/*.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#161825",
      secondary: "#fe9901",
      third: "#efefef"
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
        padding: "2rem",
        position: "center",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/banner2.jpg')",
        "banner-img": "url('/img/banner2.jpg')",
        "banner-img1": "url('/img/choose_bg.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
