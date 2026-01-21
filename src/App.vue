<script setup lang="ts">
import { computed, ref, type ComputedRef } from 'vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import Card from './components/Card.vue'
import Filter from './components/Filter.vue'
import { sneakersMock } from './mocks/sneakers'
import { categoriesMock } from './mocks/categories'
import type { Category } from './types/Category'
import type { Sneaker } from './types/Sneaker'

const categories: Category[] = [{ id: 0, name: 'Todos' }, ...categoriesMock]
const activeCategory = ref(0)

const filteredSneakers: ComputedRef<Sneaker[]> = computed(() => {
  if (activeCategory.value === 0) return sneakersMock
  return sneakersMock.filter((sneaker) => sneaker.category.id === activeCategory.value)
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main>
      <Filter
        :filteredSneakers="filteredSneakers"
        :categories="categories"
        :activeCategory="activeCategory"
        @update:activeCategory="activeCategory = $event"
      />
      <div class="grow bg-black p-5 md:p-8 lg:px-20 lg:py-12">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 justify-items-center"
        >
          <Card v-for="sneaker in filteredSneakers" :key="sneaker.id" :sneaker="sneaker" />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
