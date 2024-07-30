<script lang="ts">
import IconLeaves from '@/components/icons/IconLeaves.vue'
export default {
  components: { IconLeaves },
  data() {
    return {
      menuOpen: true,
      pages: [
        {
          to: '/',
          title: 'Accueil'
        },
        {
          to: '/#natural-care',
          title: 'Les soins naturels'
        },
        {
          to: '/#about',
          title: 'À propos'
        },
        {
          to: '/#pricing',
          title: 'La séance'
        },
        {
          to: '/#contact',
          title: 'Contact'
        },
        {
          to: '/blog',
          title: 'Blog'
        },
      ]
    }
  },
  methods: {
    toggle() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-herb-200 bg-opacity-40 shadow-md z-10">
    <div class="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-white bg-green-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="toggle"
          >
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg
              :class="{ hidden: !menuOpen, block: menuOpen }"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              :class="{ hidden: menuOpen, block: !menuOpen }"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <icon-leaves css-class="h-10 w-10 text-green-900" />
          </div>
          <div class="hidden md:block md:ml-6">
            <div class="flex space-x-4">
              <router-link
                v-for="page in pages"
                :key="page.to"
                :to="page.to"
                class="px-3 py-2 hover:bg-green-900 hover:text-white rounded-md text-sm font-medium"
                :class="{
                  'text-green-800': $router.currentRoute.value.path !== page.to,
                  'bg-herb-400': $router.currentRoute.value.path === page.to,
                  'text-white': $router.currentRoute.value.path === page.to
                }"
                >{{ page.title }}</router-link
              >
              <a
                href="https://petiteplante.simplybook.it"
                target="_blank"
                class="px-3 py-2 hover:bg-green-900 hover:text-white rounded-md text-sm font-medium text-green-800"
              >Espace réservation</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div :class="{ hidden: menuOpen, block: !menuOpen }" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-for="page in pages"
          :key="page.to"
          :to="page.to"
          class="block px-3 py-2 rounded-md text-base font-medium"
          :class="{
            'text-green-800 hover:bg-green-900 hover:text-white':
              $router.currentRoute.value.path !== page.to,
            'bg-herb-400 text-white': $router.currentRoute.value.path === page.to
          }"
          @click="toggle"
          >{{ page.title }}</router-link
        >
        <a
          href="https://petiteplante.simplybook.it"
          target="_blank"
          class="block px-3 py-2 rounded-md text-base font-medium text-green-800"
        >Espace réservation</a>
      </div>
    </div>
  </nav>
</template>
