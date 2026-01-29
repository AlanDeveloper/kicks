<script setup lang="ts">
import type { Sneaker } from '@/types/Sneaker'
const props = defineProps<{
  sneaker: Sneaker
  cartCount: number
}>()
const emit = defineEmits<{
  'update:cartCount': [value: number]
}>()
const formatPrice = (value: number) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
const addToCart = (): void => {
  emit('update:cartCount', props.cartCount + 1)
}
</script>
<template>
  <div
    class="group text-white bg-secondary relative rounded-xl overflow-hidden max-w-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-primary/50"
  >
    <span
      v-if="sneaker.flag"
      :style="{ backgroundColor: sneaker.flag.bg_color }"
      class="absolute left-4 top-4 px-3 py-1.5 rounded-md z-10 text-xs md:text-sm font-semibold tracking-wide"
    >
      {{ sneaker.flag.name }}
    </span>
    <div class="overflow-hidden aspect-square">
      <img
        loading="lazy"
        :src="sneaker.src"
        :alt="sneaker.name"
        class="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      />
    </div>
    <div class="p-5">
      <p class="text-gray-400 text-xs md:text-sm uppercase tracking-wider">
        {{ sneaker.category.name }}
      </p>
      <h2 class="text-lg md:text-xl font-bold mt-1.5 line-clamp-2">{{ sneaker.name }}</h2>
      <div class="flex gap-2.5 mt-3">
        <div
          class="w-5 h-5 rounded-full border-2 border-gray-300 bg-white transition-transform hover:scale-110 cursor-pointer"
        ></div>
        <div
          class="w-5 h-5 rounded-full bg-indigo-400 transition-transform hover:scale-110 cursor-pointer"
        ></div>
        <div
          class="w-5 h-5 rounded-full bg-red-400 transition-transform hover:scale-110 cursor-pointer"
        ></div>
      </div>
      <div class="flex justify-between items-center mt-5">
        <div class="flex flex-col gap-0.5">
          <p
            class="line-through text-gray-400 text-sm"
            v-if="sneaker.originalPrice != sneaker.price"
          >
            {{ formatPrice(sneaker.originalPrice) }}
          </p>
          <p class="font-bold text-lg md:text-xl">{{ formatPrice(sneaker.price) }}</p>
        </div>
        <button
          aria-label="Adicionar ao carrinho"
          class="h-12 w-12 bg-primary rounded-lg font-bold text-xl hover:bg-[#ff8555] duration-300 transition-all hover:rotate-90 hover:scale-110 cursor-pointer flex items-center justify-center"
          @click="addToCart"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>
