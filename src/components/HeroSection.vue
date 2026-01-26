<template>
  <section
    class="min-h-screen flex items-center justify-center text-center px-4 relative overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-linear-to-br from-orange-500/70 via-orange-600/50 to-black/60 z-0"
    ></div>
    <img
      loading="lazy"
      src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1600&h=900&fit=crop"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover -z-10"
    />

    <div class="text-white max-w-4xl z-10 px-6">
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
        Nova Coleção 2026
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-light px-2">
        Descubra os sneakers mais exclusivos e modernos do mercado
      </p>
      <a
        href="#products"
        class="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-semibold rounded-full text-base sm:text-lg transition-all duration-300 hover:bg-orange-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40 active:scale-95"
      >
        Explorar Coleção
      </a>
    </div>
  </section>
  <section class="relative bg-black py-16 md:py-20 text-center overflow-hidden">
    <h2
      class="relative z-10 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
    >
      Escolha seu
      <span class="text-primary">próximo passo</span>
    </h2>

    <span
      class="absolute inset-0 flex items-center justify-center text-white/5 text-[120px] md:text-[200px] font-black select-none pointer-events-none"
    >
      SNEAKERS
    </span>
  </section>
</template>
