<script setup lang="ts">
import { ref } from 'vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import Card from './components/Card.vue'
import type { Sneaker } from './types/Sneaker'

const sneakers = ref<Sneaker[]>([
  {
    name: 'Air Max Velocity',
    originalPrice: 1229.0,
    price: 899.0,
    category: {
      name: 'RUNNING',
    },
    flag: {
      name: 'Novo',
      bg_color: '#00d4ff',
    },
  },
])
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="grow bg-black p-5 md:p-8 lg:px-20 lg:py-12">
      <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        <Card v-for="sneaker in sneakers" :key="sneaker.name" :sneaker="sneaker" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
