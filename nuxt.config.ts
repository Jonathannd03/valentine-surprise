import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    head: {
      title: "Priscillia",
      meta: [
        {
          name: "description",
          content: "Happy valentine day mi amor",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  compatibilityDate: "2025-02-13",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});