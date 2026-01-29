<script setup lang="ts">
import { useCartStore } from '@/stores/CartStore'
import type { Sneaker } from '@/types/Sneaker'
import { formatPrice } from '@/utils/formatPrice'
import { ref } from 'vue'

defineProps<{
  sneaker: Sneaker
}>()

const selectedSize = ref<number | null>(null)
const cart = useCartStore()
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
      <div class="flex gap-2.5 mt-3 flex-wrap">
        <button
          v-for="size in sneaker.size"
          :key="size"
          @click="selectedSize = size"
          class="w-10 h-10 flex items-center justify-center rounded-lg border-2 text-sm font-semibold transition-all cursor-pointer"
          :class="
            selectedSize === size
              ? 'border-primary bg-primary text-white scale-105'
              : 'border-gray-500 bg-transparent text-gray-200 hover:border-primary hover:text-white hover:scale-110'
          "
        >
          {{ size }}
        </button>
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
          :disabled="!selectedSize"
          aria-label="Adicionar ao carrinho"
          class="h-12 w-12 rounded-lg font-bold text-xl flex items-center justify-center transition-all duration-300 bg-primary hover:bg-[#ff8555] hover:rotate-90 hover:scale-110 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:hover:rotate-0 disabled:hover:scale-100 disabled:opacity-50 cursor-pointer"
          @click="cart.addToCart(sneaker, selectedSize!)"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>
