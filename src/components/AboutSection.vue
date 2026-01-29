<template>
  <section class="bg-secondary text-white" id="about">
    <div class="p-5 py-15 md:p-8 lg:px-20 lg:py-40 flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div class="flex flex-col gap-6 flex-1">
        <h1 class="mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 220 60"
            fill="none"
            class="w-56 md:w-64 lg:w-72"
          >
            <text
              x="0"
              y="30"
              font-family="'Arial Black', 'Arial Bold', sans-serif"
              font-size="42"
              font-weight="900"
              fill="#fff"
              letter-spacing="-1.5"
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
              letter-spacing="5"
            >
              PREMIUM SNEAKERS
            </text>
          </svg>
        </h1>
        <p class="text-secondary-text text-sm md:text-base leading-relaxed">
          Somos apaixonados por sneakers e por proporcionar experiências únicas aos nossos clientes.
          Desde 2018, trabalhamos com as melhores marcas do mundo para trazer até você os modelos
          mais exclusivos e desejados.
        </p>
        <p class="text-secondary-text text-sm md:text-base leading-relaxed">
          Nossa missão é democratizar o acesso aos melhores sneakers do mercado, oferecendo
          autenticidade garantida, preços justos e um atendimento excepcional.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 sm:gap-8 text-center sm:mx-auto mt-6">
          <div class="flex-1">
            <h2 class="text-4xl md:text-5xl font-bold text-primary">50k+</h2>
            <p class="text-secondary-text text-xs md:text-sm mt-2 tracking-wider">
              CLIENTES FELIZES
            </p>
          </div>
          <div class="flex-1">
            <h2 class="text-4xl md:text-5xl font-bold text-primary">500+</h2>
            <p class="text-secondary-text text-xs md:text-sm mt-2 tracking-wider">MODELOS</p>
          </div>
          <div class="flex-1">
            <h2 class="text-4xl md:text-5xl font-bold text-primary">100%</h2>
            <p class="text-secondary-text text-xs md:text-sm mt-2 tracking-wider">AUTÊNTICOS</p>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=1000&fit=crop"
        alt="Nossa loja"
        class="w-full lg:w-[400px] xl:w-[500px] h-64 sm:h-80 lg:h-[500px] object-cover rounded-2xl shrink-0"
      />
    </div>
  </section>
</template>
