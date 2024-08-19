/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scrollbar: ["rounded"], // Enable rounded scrollbars
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".custom-scrollbar::-webkit-scrollbar": {
          width: "8px",
        },
        ".custom-scrollbar::-webkit-scrollbar-track": {
          "background-color": "#2d3748",
          "border-radius": "10px",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb": {
          "background-color": "#4a5568",
          "border-radius": "10px",
          border: "2px solid #2d3748",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb:hover": {
          "background-color": "#718096",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
