<template>
  <div class="min-h-screen bg-black/50 backdrop-blur-md transition-opacity duration-300 opacity-100 text-white">
    <Navbar />
    <div class="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <!-- Background video or image -->
      <div class="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>

      <!-- Content -->
      <div class="relative z-10 text-center p-8 mt-10 bg-black/50 rounded-lg shadow-lg backdrop-blur-md">
        <h1
          class="text-6xl font-bold text-red-500 mb-8"
          v-motion="{
            initial: { opacity: 0, y: -50 },
            enter: { opacity: 1, y: 0, transition: { duration: 1000 } },
          }"
        >
          Happy Valentine's Day, Priscillia! 💖
        </h1>
        <p
          class="text-xl text-white/80 mb-8"
          v-motion="{
            initial: { opacity: 0, y: 50 },
            enter: { opacity: 1, y: 0, transition: { duration: 1000, delay: 500 } },
          }"
        >
        "You make every moment special and unforgettable." 🌹 
        </p>
        <NuxtLink
          to="/memories"
          class="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
          v-motion="{
            initial: { opacity: 0, scale: 0.8 },
            enter: { opacity: 1, scale: 1, transition: { duration: 1000, delay: 1000 } },
          }"
        >
          Discover
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMotion } from '@vueuse/motion';
import party from 'party-js';

onMounted(() => {
  party.confetti(document.body, {
    count: 100,
    size: 2,
    spread: 30,
  });
});
</script>