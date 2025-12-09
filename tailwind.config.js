/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 🌙 Dark mode body'deki .dark classı ile aktif olur
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}"
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: "#00AEEF", // Turkuaz mavi
        primaryDark: "#0096CC",

        // Theme Backgrounds
        dark: "#0D1B2A",
        mid: "#1B263B",
        light: "#F7F9FC",

        // Ekstra UI renkleri
        card: "#1E2A3D",
        muted: "#9AA5B1"
      },

      // Container ayarı → büyük ekranlarda çok genişlemesin
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px"
        },
      },

      // Smooth shadowlar (daha premium his)
      boxShadow: {
        card: "0 4px 25px rgba(0,0,0,0.15)",
        cardHover: "0 8px 30px rgba(0,0,0,0.25)"
      },

      // Border radius
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },

      // Animations (menü aç/kapa için)
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },

      animation: {
        fadeIn: "fadeIn 0.4s ease-out",
        slideDown: "slideDown 0.25s ease-out"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")
  ]
};
