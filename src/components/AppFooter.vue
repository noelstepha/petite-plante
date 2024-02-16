<script setup lang="ts">
import IconLeaves from '@/components/icons/IconLeaves.vue'
const pages = [
  {
    to: '/',
    title: 'Accueil'
  },
  {
    to: '#natural-care',
    title: 'Les soins naturels'
  },
  {
    to: '#about',
    title: 'A propos'
  },
  {
    to: '#pricing',
    title: 'Tarif'
  },
  {
    to: '/contact',
    title: 'Contact'
  }
]
</script>
<template>
  <footer
    class="bg-herb-100 bg-opacity-80 flex flex-wrap text-sm text-herb-800 text-center md:text-left"
  >
    <div class="w-full md:w-1/3 p-5 flex flex-col items-center justify-start">
      <icon-leaves css-class="h-20 w-20 text-green-900 block -mt-3" />
      <div class="font-dancing text-3xl">La petite plante</div>
    </div>
    <div class="w-full md:w-1/3 p-5 flex flex-col items-center">
      <div>
        <div class="text-xl font-bold mb-3">Explorer</div>
        <router-link v-for="page in pages" :key="page.to" :to="page.to" class="block my-1">{{
          page.title
        }}</router-link>
      </div>
    </div>
    <div class="w-full md:w-1/3 p-5 flex flex-col items-center">
      <div>
        <div class="text-xl font-bold mb-3">Contact</div>
        06 71 88 82 57<br />
        <a href="mailto:corinne.avotreservice@gmail.com">corinne.avotreservice@gmail.com</a>
      </div>
    </div>
    <div class="w-full flex justify-center p-3">
      <span class="mx-5">© La petite plante</span> | <span class="mx-5">Tous Droits Réservés</span>
    </div>
  </footer>
</template>
