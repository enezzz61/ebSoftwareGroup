/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 🌙 Dark mode body class üzerinden çalışacak
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00AEEF",
        dark: "#0D1B2A",
        mid: "#1B263B"
      }
    }
  },
  plugins: []
};
