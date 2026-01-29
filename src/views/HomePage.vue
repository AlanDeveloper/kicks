<script setup lang="ts">
import { computed, ref, type ComputedRef } from 'vue'
import AboutSection from '../components/AboutSection.vue'
import HeroSection from '../components/HeroSection.vue'
import Card from '../components/Card.vue'
import Filter from '../components/Filter.vue'
import { sneakersMock } from '../mocks/sneakers'
import { categoriesMock } from '../mocks/categories'
import type { Category } from '../types/Category'
import type { Sneaker } from '../types/Sneaker'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { useCartStore } from '@/stores/CartStore'
const categories: Category[] = categoriesMock
const activeCategory = ref(0)
const filteredSneakers: ComputedRef<Sneaker[]> = computed(() => {
  if (activeCategory.value === 0) return sneakersMock
  return sneakersMock.filter((sneaker) => sneaker.category.id === activeCategory.value)
})
const cart = useCartStore()
</script>
<template>
  <Header :cartCount="cart.cartCount" />
  <main>
    <HeroSection />
    <Filter
      :filteredSneakers="filteredSneakers"
      :categories="categories"
      v-model:activeCategory="activeCategory"
    />
    <section class="grow bg-black p-6 md:p-10 lg:px-20 lg:py-16">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 lg:gap-8 justify-items-center"
      >
        <Card v-for="sneaker in filteredSneakers" :key="sneaker.id" :sneaker="sneaker" />
      </div>
    </section>
    <AboutSection />
  </main>
  <Footer />
</template>
