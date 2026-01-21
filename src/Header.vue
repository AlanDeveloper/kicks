<template>
  <header
    class="flex flex-row items-center justify-between p-5 md:p-8 lg:px-20 lg:py-12 bg-black text-white sticky top-0 left-0 w-full z-50"
  >
    <h1>Marca</h1>
    <div class="flex flex-row gap-10">
      <ul class="flex flex-row gap-10 list-none">
        <li>
          <a href="#" class="hover:text-[#ff6b35] transition-colors duration-300 cursor-pointer"
            >Produtos</a
          >
        </li>
        <li>
          <a href="#" class="hover:text-[#ff6b35] transition-colors duration-300 cursor-pointer"
            >Sobre</a
          >
        </li>
        <li>
          <a href="#" class="hover:text-[#ff6b35] transition-colors duration-300 cursor-pointer"
            >Contatos</a
          >
        </li>
      </ul>
      <div class="relative cursor-pointer hover:scale-130 transition-transform duration-300">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>

        <span
          class="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-[#ff6b35] rounded-full"
        >
          0
        </span>
      </div>
    </div>
  </header>
</template>
