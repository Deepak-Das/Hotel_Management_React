// /** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#5e84a5",
        transparent: "transparent",
        primaryColor: "#8F8AFF",
        secondaryColor: "#FFA11D", // Example of a complementary color
        tertiaryColor: "#C1C1FF",
        // tertiaryColorDull: #c1c1ff6b,
        highLight: "#09C2DE",
        // Example of a lighter shade of the primary color
        // mainTextColor: "#333333", /
      },
    },
  },
  plugins: [],
  prefix: "tw-",
};
