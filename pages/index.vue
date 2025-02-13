<template>
  <div
    class="min-h-screen bg-black/50 backdrop-blur-md transition-opacity duration-300 opacity-100 text-white"
  >
    <Navbar />
    <div
      class="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden"
    >
      <!-- Background Image with Overlay -->
      <div
        class="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
      >
        <div class="absolute inset-0 bg-black/70"></div>
      </div>

      <!-- Main Content -->
      <div
        class="relative z-10 text-center p-6 md:p-12 bg-black/60 rounded-2xl shadow-xl backdrop-blur-md"
      >
        <h1
          class="text-4xl md:text-6xl font-bold text-red-500 mb-6"
          v-motion="{
            initial: { opacity: 0, y: -50 },
            enter: { opacity: 1, y: 0, transition: { duration: 1000 } },
          }"
        >
          Happy Valentine's Day P 💖
        </h1>

        <p
          class="text-lg md:text-xl text-white/80 mb-6 leading-relaxed"
          v-motion="{
            initial: { opacity: 0, y: 50 },
            enter: {
              opacity: 1,
              y: 0,
              transition: { duration: 1000, delay: 500 },
            },
          }"
        >
          "You make every moment special and unforgettable." 🌹
        </p>

        <!-- Button with Confetti Trigger -->
        <NuxtLink
          to="memories"
          class="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-all transform hover:scale-105"
          v-motion="{
            initial: { opacity: 0, scale: 0.8 },
            enter: {
              opacity: 1,
              scale: 1,
              transition: { duration: 1000, delay: 1000 },
            },
          }"
        >
          Discover
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import party from "party-js";

const triggerConfetti = () => {
  party.confetti(document.body, {
    count: 150,
    size: 2,
    spread: 50,
  });
};

onMounted(triggerConfetti);
</script>
