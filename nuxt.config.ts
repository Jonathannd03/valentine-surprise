import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({  
  compatibilityDate: "2024-11-01",  
  devtools: { enabled: true }, 
  css: ['~/assets/css/main.css'],
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap' },
    ],
  }, 
  vite: {    
    plugins: [      
      tailwindcss(),    
    ],  
  },
});