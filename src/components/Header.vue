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
    class="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm"
    @click.self="closeMenu"
  ></div>
  <aside
    class="fixed top-0 right-0 h-full w-72 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl"
    :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <div class="flex justify-end p-6">
      <button
        @click="closeMenu"
        class="cursor-pointer text-2xl hover:text-primary transition-colors duration-300 w-10 h-10 flex items-center justify-center"
        aria-label="Fechar menu"
      >
        ✕
      </button>
    </div>
    <ul class="flex flex-col gap-6 p-8">
      <li>
        <router-link
          @click="closeMenu"
          class="text-lg font-medium hover:text-primary cursor-pointer transition-colors duration-300 block py-2"
          :to="{ path: '/', hash: '#products' }"
        >
          Produtos
        </router-link>
      </li>
      <li>
        <router-link
          @click="closeMenu"
          class="text-lg font-medium hover:text-primary cursor-pointer transition-colors duration-300 block py-2"
          :to="{ path: '/', hash: '#about' }"
        >
          Sobre
        </router-link>
      </li>
      <li>
        <router-link
          @click="closeMenu"
          class="text-lg font-medium hover:text-primary cursor-pointer transition-colors duration-300 block py-2"
          :to="{ path: '/', hash: '#contacts' }"
        >
          Contatos
        </router-link>
      </li>
    </ul>
  </aside>
  <header
    class="sticky top-0 left-0 w-full z-30 flex items-center justify-between p-4 md:p-6 lg:px-20 lg:py-8 bg-black/95 backdrop-blur-md text-white border-b border-white/5"
  >
    <router-link to="/" class="cursor-pointer">
      <h1 class="w-40 md:w-44 lg:w-52">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" fill="none">
          <text
            x="0"
            y="26"
            font-family="'Arial Black', 'Arial Bold', sans-serif"
            font-size="36"
            font-weight="900"
            fill="#fff"
            letter-spacing="-1.5"
          >
            KICKS
          </text>
          <text
            x="0"
            y="42"
            font-family="Arial, sans-serif"
            font-size="9"
            font-weight="600"
            fill="#ff6b35"
            letter-spacing="4.5"
          >
            PREMIUM SNEAKERS
          </text>
        </svg>
      </h1>
    </router-link>
    <div class="flex items-center gap-6 md:gap-8">
      <ul class="hidden md:flex gap-8 lg:gap-10 list-none text-sm lg:text-base">
        <li>
          <router-link
            class="font-medium hover:text-primary cursor-pointer transition-colors duration-300"
            :to="{ path: '/', hash: '#products' }"
          >
            Produtos
          </router-link>
        </li>
        <li>
          <router-link
            class="font-medium hover:text-primary cursor-pointer transition-colors duration-300"
            :to="{ path: '/', hash: '#about' }"
          >
            Sobre
          </router-link>
        </li>
        <li>
          <router-link
            class="font-medium hover:text-primary cursor-pointer transition-colors duration-300"
            :to="{ path: '/', hash: '#contacts' }"
          >
            Contatos
          </router-link>
        </li>
      </ul>
      <button
        class="cursor-pointer md:hidden text-2xl hover:text-primary transition-colors duration-300"
        @click="openMenu"
        aria-label="Abrir menu"
      >
        ☰
      </button>
      <router-link to="/cart">
        <div
          class="relative cursor-pointer hover:scale-110 transition-transform duration-300 group"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="group-hover:text-primary transition-colors duration-300"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span
            v-if="cartCount > 0"
            class="absolute -top-2 -right-2 min-w-[22px] h-[22px] flex items-center justify-center text-xs font-bold text-white bg-primary rounded-full px-1.5 animate-pulse"
          >
            {{ cartCount }}
          </span>
        </div>
      </router-link>
    </div>
  </header>
</template>
