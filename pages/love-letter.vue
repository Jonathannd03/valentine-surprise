<template>
  <div class="min-h-screen bg-black/50 backdrop-blur-md transition-opacity duration-300 opacity-100 text-white">
    <Navbar />
    <div class="min-h-screen p-8 flex flex-col items-center">
      <h1 class="text-4xl font-bold text-white-500 mb-8 mt-20">A Letter Just for You 💌</h1>
      <div
        class="max-w-2xl bg-black/50 p-8 rounded-lg shadow-lg backdrop-blur-md"
        v-motion="{
          initial: { opacity: 0, scale: 0.9 },
          enter: { opacity: 1, scale: 1, transition: { duration: 1000 } },
        }"
      >
        <p class="text-white/80 text-lg leading-relaxed">
          To the most incredible person I know,<br /><br />
          Your kindness, your laughter, and the way you see the world inspire me every day. I feel so lucky to know you, and I cherish every moment we’ve shared.<br /><br />
          This Valentine’s Day, I want you to know that you are loved, appreciated, and admired more than words can express. You deserve all the happiness in the world, and I hope this little surprise brings a smile to your face.<br /><br />
          😌,<br />
          Ton beau gosse 💖
        </p>
      </div>
    </div>
  </div>
</template>