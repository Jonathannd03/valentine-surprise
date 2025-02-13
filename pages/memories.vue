<template>
  <div class="min-h-screen bg-black/50 backdrop-blur-md transition-opacity duration-300 opacity-100 text-white">
    <Navbar />
    <div class="min-h-screen p-8 ">
      <h1 class="text-4xl font-bold text-white-500 text-center mb-8 mt-20">Precious Memories 💕</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(memory, index) in memories"
          :key="index"
          class="relative group overflow-hidden cursor-pointer bg-black/50 p-8 rounded-lg shadow-lg backdrop-blur-md"
          v-motion="{
            initial: { opacity: 0, y: 50 },
            enter: { opacity: 1, y: 0, transition: { duration: 1000, delay: index * 200 } },
          }"
          @click="openLightbox(memory.src)"
        >
          <img
            :src="memory.src"
            :alt="memory.alt"
            class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p class="text-white text-lg">{{ memory.caption }}</p>
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <div
        v-if="lightboxImage"
        class="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        @click="lightboxImage = null"
      >
        <img :src="lightboxImage" class="max-w-full max-h-full rounded-lg" />
      </div>
    </div>
  </div>
</template>

<script setup>
const memories = [
  { src: '/images/memory6.jpg', alt: 'Memory 6', caption: ' Tala beauté kisanola 💃' },
  { src: '/images/memory2.jpg', alt: 'Memory 2', caption: 'Neti na film 😎' },
  { src: '/images/memory3.jpg', alt: 'Memory 3', caption: 'fossettes eke ezongi 😊' },
  { src: '/images/memory4.jpg', alt: 'Memory 4', caption: 'GF material 📷' },
  { src: '/images/memory5.jpg', alt: 'Memory 5', caption: 'Dégât ☕' },
  { src: '/images/memory1.jpg', alt: 'Memory 1', caption: 'Uhm mwana Bukavu 🌟' },
];

const lightboxImage = ref(null);

function openLightbox(src) {
  lightboxImage.value = src;
}
</script>