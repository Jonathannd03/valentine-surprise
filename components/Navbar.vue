<template>
    <nav
      class="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-md transition-opacity duration-300 opacity-100"
      
    >
      <div class="container mx-auto flex justify-between items-center p-4">
        <NuxtLink to="/" class="text-white text-2xl font-bold">Vrai Chérie 👑</NuxtLink>
        <!-- Hamburger Menu for Mobile -->
        <button class="md:hidden text-white focus:outline-none" @click="isOpen = !isOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <!-- Desktop Menu -->
        <ul class="hidden md:flex space-x-6">
          <li>
            <NuxtLink to="/" class="text-white hover:text-red-500 transition-colors">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/memories" class="text-white hover:text-red-500 transition-colors">Memories</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/love-letter" class="text-white hover:text-red-500 transition-colors">Love Letter</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/fun" class="text-white hover:text-red-500 transition-colors">Why</NuxtLink>
          </li>
        </ul>
      </div>
      <!-- Mobile Menu -->
      <div v-if="isOpen" class="md:hidden bg-black/50 backdrop-blur-md transition-opacity duration-300 opacity-100 p-4">
        <ul class="flex flex-col space-y-4">
          <li>
            <NuxtLink to="/" class="text-white hover:text-red-500 transition-colors">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/memories" class="text-white hover:text-red-500 transition-colors">Memories</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/love-letter" class="text-white hover:text-red-500 transition-colors">Love Letter</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/fun" class="text-white hover:text-red-500 transition-colors">Why</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup>
  const isOpen = ref(false);
  const isNavbarVisible = ref(true);
  
  onMounted(() => {
    window.addEventListener('scroll', () => {
      isNavbarVisible.value = window.scrollY > 50;
    });
  });
  </script>