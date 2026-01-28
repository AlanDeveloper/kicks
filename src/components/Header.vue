<script setup lang="ts">
import { ref, type Ref } from 'vue'

const isMenuOpen: Ref<boolean> = ref(false)

const openMenu = (): void => {
  isMenuOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeMenu = (): void => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

defineProps<{
  cartCount: number
}>()
</script>
<template>
  <div
    v-if="isMenuOpen"
    class="fixed inset-0 bg-black/80 z-40 md:hidden"
    @click.self="closeMenu"
  ></div>

  <aside
    class="fixed top-0 right-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out md:hidden"
    :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <div class="flex justify-end p-4">
      <button @click="closeMenu" class="cursor-pointer" aria-label="Fechar menu">✕</button>
    </div>
    <ul class="flex flex-col gap-6 p-6">
      <li>
        <a @click="closeMenu" class="hover:text-primary cursor-pointer" href="#products"
          >Produtos</a
        >
      </li>
      <li>
        <a @click="closeMenu" class="hover:text-primary cursor-pointer" href="#about">Sobre</a>
      </li>
      <li>
        <a @click="closeMenu" class="hover:text-primary cursor-pointer" href="#contacts"
          >Contatos</a
        >
      </li>
    </ul>
  </aside>

  <header
    class="sticky top-0 left-0 w-full z-30 flex items-center justify-between p-5 md:p-8 lg:px-20 lg:py-10 bg-black text-white"
  >
    <h1 class="w-50 lg:w-70">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 60" fill="none">
        <text
          x="0"
          y="30"
          font-family="'Arial Black', 'Arial Bold', sans-serif"
          font-size="28"
          font-weight="900"
          fill="#fff"
          letter-spacing="-1"
        >
          KICKS
        </text>

        <text
          x="0"
          y="50"
          font-family="Arial, sans-serif"
          font-size="11"
          font-weight="600"
          fill="#ff6b35"
          letter-spacing="3"
        >
          PREMIUM SNEAKERS
        </text>
      </svg>
    </h1>

    <div class="flex items-center gap-6">
      <ul class="hidden md:flex gap-10 list-none">
        <li><a class="hover:text-primary cursor-pointer" href="#products">Produtos</a></li>
        <li><a class="hover:text-primary cursor-pointer" href="#about">Sobre</a></li>
        <li><a class="hover:text-primary cursor-pointer" href="#contacts">Contatos</a></li>
      </ul>

      <button class="cursor-pointer md:hidden text-2xl" @click="openMenu" aria-label="Abrir menu">
        ☰
      </button>

      <div class="relative cursor-pointer hover:scale-110 transition-transform duration-300">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>

        <span
          class="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-primary rounded-full"
        >
          {{ cartCount }}
        </span>
      </div>
    </div>
  </header>
</template>
