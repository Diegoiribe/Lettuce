/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        phone: '280px', // Tu valor personalizado para teléfono
        tablet: '640px', // Tu valor personalizado para tablet
        mac: '1280px', // Tu valor personalizado para tablet
        laptop: '1536px', // Tu valor personalizado para laptop
        desktop: '1920px' // Tu valor personalizado para desktop
        // Puedes añadir más breakpoints personalizados si lo necesitas
      }
    }
  },
  plugins: []
}
