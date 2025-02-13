<template>
  <div class="min-h-screen bg-black/50 backdrop-blur-md transition-opacity duration-300 opacity-100 text-white">
    <Navbar />
    <div class="min-h-screen p-8 flex flex-col items-center">
      <h1 class="text-4xl font-bold text-white-500 mb-8 mt-20">Just for Fun 💐</h1>
      <div
        class="max-w-2xl bg-black/50 p-8 rounded-lg shadow-lg backdrop-blur-md"
        v-motion="{
          initial: { opacity: 0, y: 50 },
          enter: { opacity: 1, y: 0, transition: { duration: 1000 } },
        }"
      >
        <p class="text-white/80 text-lg mb-4">Why did I build you an entire website?</p>
        <p class="text-white/80 text-lg">Because you’re worth more than just a text! 💻❤️</p>
      </div>
    </div>
  </div>
</template>