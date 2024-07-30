<script setup lang="ts">
import IconLeaves from '@/components/icons/IconLeaves.vue'
const pages = [
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
    to: '/faq',
    title: 'Aide'
  },
  {
    to: '/blog',
    title: 'Blog'
  }
]
</script>
<template>
  <footer
    class="bg-orange-200 bg-opacity-80 pt-10 flex flex-wrap text-sm text-herb-800 text-center md:text-left"
  >
    <div class="w-full md:w-1/3 p-5 flex flex-col items-center justify-center">
      <icon-leaves css-class="h-20 w-20 text-green-900 block -mt-3" />
      <div class="font-dancing text-3xl">La petite plante</div>
    </div>
    <div class="w-full md:w-1/3 p-5 flex flex-col items-center justify-start">
      <div>
        <div class="text-xl font-bold mb-3">Navigation</div>
        <router-link v-for="page in pages" :key="page.to" :to="page.to" class="block py-3 hover:underline">{{
          page.title
        }}</router-link>
        <a
          href="https://petiteplante.simplybook.it"
          target="_blank"
          class="block py-3 hover:underline"
        >Espace réservation</a>
        <router-link to="/legal-notice" class="block py-3 hover:underline">Mentions légales</router-link>
        <router-link to="/privacy-policy" class="block py-3 hover:underline">Politique de confidentialité</router-link>
        <router-link to="/term-and-conditions" class="block py-3 hover:underline">Conditions générales de vente</router-link>
      </div>
    </div>
    <div class="w-full md:w-1/3 p-5 flex flex-col items-center justify-center">
      <div>
        <div class="text-xl font-bold mb-3">Liens utiles</div>
        <a class="block text-blue-500 underline py-3" href="https://lafourche.fr/">La fourche</a>
        <a class="block text-blue-500 underline py-3" href="https://www.dieti-natura.com/"
          >Dieti Natura</a
        >
        <a class="block text-blue-500 underline py-3" href="https://www.mycosmetik.fr/">Mycosmetik</a>
        <a class="block text-blue-500 underline py-3" href="https://www.lesfleursdebach.com/"
          >Les fleurs de Bach</a
        >
        <a class="block text-blue-500 underline py-3" href="https://www.lesfleursdelatlas.com/"
          >Les fleurs de l'atlas</a
        >
        <a class="block text-blue-500 underline py-3" href="https://www.nutriting.com/">Nutriting</a>
        <a class="block text-blue-500 underline py-3" href="https://www.sunday.fr/">Sunday</a>
        <a class="block text-blue-500 underline py-3" href="https://www.aroma-zone.com/">Aroma zone</a>
        Je soutiens <a class="inline-block text-blue-500 underline py-3" href="https://www.arboretoom.com">LIKEN</a>
      </div>
    </div>
    <div class="w-full flex justify-center p-3">
      <span class="mx-5">Copyright © 2024</span> |
      <span class="mx-5">Tous Droits Réservés - La petite plante - SASU capital social 100 € - 924 944 366 RCS PAU</span> |
      <span class="mx-5"
        >Images conçues par
        <a class="text-blue-500 underline" href="https://fr.freepik.com/">Freepik</a></span
      >
    </div>
  </footer>
</template>
