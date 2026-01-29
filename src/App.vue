<script setup lang="ts">
import { computed, onBeforeUnmount, ref, type ComputedRef } from 'vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import AboutSection from './components/AboutSection.vue'
import HeroSection from './components/HeroSection.vue'
import Card from './components/Card.vue'
import Filter from './components/Filter.vue'
import { sneakersMock } from './mocks/sneakers'
import { categoriesMock } from './mocks/categories'
import type { Category } from './types/Category'
import type { Sneaker } from './types/Sneaker'
import { onMounted } from 'vue'
const categories: Category[] = categoriesMock
const activeCategory = ref(0)
const filteredSneakers: ComputedRef<Sneaker[]> = computed(() => {
  if (activeCategory.value === 0) return sneakersMock
  return sneakersMock.filter((sneaker) => sneaker.category.id === activeCategory.value)
})
const useSmoothScroll = (offset = 80) => {
  const handleClick = (e: Event) => {
    const anchor = e.currentTarget as HTMLAnchorElement
    const href = anchor.getAttribute('href')
    if (href?.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const elementPosition = (target as HTMLElement).offsetTop
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        })
      }
    }
  }
  onMounted(() => {
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach((anchor) => anchor.addEventListener('click', handleClick))
  })
  onBeforeUnmount(() => {
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach((anchor) => anchor.removeEventListener('click', handleClick))
  })
}
const cartCount = ref(0)
useSmoothScroll()
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <Header :cartCount="cartCount" />
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
          <Card
            v-for="sneaker in filteredSneakers"
            :key="sneaker.id"
            :sneaker="sneaker"
            v-model:cartCount="cartCount"
          />
        </div>
      </section>
      <AboutSection />
    </main>
    <Footer :categories="categories" />
  </div>
</template>
<style scoped></style>
