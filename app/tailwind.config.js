/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('./src/assets/images/bg.jpg')"
    },
    colors: {
        brand: {
          dark: "#0f172a",    // Fundo principal (Slate 900)
          card: "#1e293b",    // Fundo dos cards (Slate 800)
          neon: "#99ccff",    // Sua cor principal (Azul Maker)
          text: "#cbd5e1",    // Texto secundário (Slate 300)
          white: "#f1f5f9",   // Títulos e destaques (Slate 100)
        }
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "sans-serif"], // Para títulos impactantes
        body: ["'Poppins'", "sans-serif"],          // Para descrições e menus
      },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
}



