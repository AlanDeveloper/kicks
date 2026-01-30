<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useCartStore } from '@/stores/CartStore'

const cartStore = useCartStore()
const orderNumber = ref('')

onMounted(() => {
  orderNumber.value = `#${Math.random().toString(36).substr(2, 9).toUpperCase()}`
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header :cartCount="cartStore.cartCount" />
    <main>
      <section class="bg-black text-white p-6 md:p-10 lg:px-20 lg:py-16 min-h-screen">
        <div class="max-w-4xl mx-auto">
          <div class="text-center py-15">
            <div class="mb-8 animate-bounce">
              <span class="text-8xl md:text-9xl">✓</span>
            </div>
            <h1 class="text-3xl md:text-5xl font-bold mb-4 text-green-500">
              Compra Realizada com Sucesso!
            </h1>
            <p class="text-secondary-text mb-2 text-xl">Pedido {{ orderNumber }}</p>
            <p class="text-secondary-text mb-8 text-base md:text-lg max-w-2xl mx-auto">
              Obrigado por sua compra! Você receberá um e-mail de confirmação em breve com os
              detalhes do seu pedido e informações de rastreamento.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <router-link
                to="/"
                class="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full text-lg transition-all duration-300 hover:bg-orange-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/50 active:scale-95"
              >
                Continuar Comprando
              </router-link>
            </div>

            <div class="mt-12 pt-8 border-t border-white/10">
              <h2 class="text-2xl font-bold mb-6">Próximos Passos</h2>
              <div class="grid md:grid-cols-3 gap-6 text-left">
                <div
                  class="bg-secondary rounded-xl p-6 transition-all duration-300 hover:scale-105"
                >
                  <div class="text-4xl mb-3">📧</div>
                  <h3 class="font-bold mb-2 text-lg">Confirmação</h3>
                  <p class="text-sm text-secondary-text">
                    E-mail enviado com os detalhes do pedido
                  </p>
                </div>
                <div
                  class="bg-secondary rounded-xl p-6 transition-all duration-300 hover:scale-105"
                >
                  <div class="text-4xl mb-3">📦</div>
                  <h3 class="font-bold mb-2 text-lg">Preparação</h3>
                  <p class="text-sm text-secondary-text">
                    Seu pedido será preparado em até 2 dias úteis
                  </p>
                </div>
                <div
                  class="bg-secondary rounded-xl p-6 transition-all duration-300 hover:scale-105"
                >
                  <div class="text-4xl mb-3">🚚</div>
                  <h3 class="font-bold mb-2 text-lg">Entrega</h3>
                  <p class="text-sm text-secondary-text">Rastreamento disponível após o envio</p>
                </div>
              </div>
            </div>

            <div class="mt-12 pt-8 border-t border-white/10">
              <h2 class="text-2xl font-bold mb-6">Garantias</h2>
              <div class="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div class="flex items-center gap-3 text-left bg-secondary rounded-lg p-4">
                  <span class="text-3xl">🔒</span>
                  <span class="text-sm">Compra 100% segura</span>
                </div>
                <div class="flex items-center gap-3 text-left bg-secondary rounded-lg p-4">
                  <span class="text-3xl">✓</span>
                  <span class="text-sm">Autenticidade garantida</span>
                </div>
                <div class="flex items-center gap-3 text-left bg-secondary rounded-lg p-4">
                  <span class="text-3xl">🔄</span>
                  <span class="text-sm">Troca grátis em 30 dias</span>
                </div>
                <div class="flex items-center gap-3 text-left bg-secondary rounded-lg p-4">
                  <span class="text-3xl">💳</span>
                  <span class="text-sm">Parcelamento sem juros</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
