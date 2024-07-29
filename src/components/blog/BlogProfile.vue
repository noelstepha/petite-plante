<script setup lang="ts">
import {useBlogStore} from "@/stores/blog";

const blogStore = useBlogStore()
const categories = blogStore.categories
</script>

<template>
  <div>
    <div class="flex flex-col items-center">
      <img
        src="/img/blog/corinne-thumbnail.jpg"
        alt="profile-photo"
        loading="lazy"
        decoding="async"
        class="h-36 w-36 rounded-full object-cover"
      />
      <h2 class="text-center font-medium text-2xl py-5">Corinne</h2>
      <p class="text-neutral-500 text-justify">Je m'appelle Corinne et je vous aide à démystifier les secrets des soins naturels. Des questions ?
        Des sujets sur les remèdes naturels pour soulager les maux du quotidien ? Parlons-en !</p>
      <hr class="my-8 h-0.5 bg-neutral-200 mx-5 w-full" />
      <div class="flex w-full">
        <h3 class="font-medium text-lg pt-2 w-1/2">Suivez-moi</h3>
        <div class="flex w-1/2 justify-end items-center">
        <img src="/img/facebook.png" class="h-10 w-10 mx-1 cursor-pointer" alt="facebook" />
        <img src="/img/instagram.png" class="h-10 w-10 mx-1 cursor-pointer" alt="instagram"/>
        </div>
      </div>
      <hr class="my-8 h-0.5 bg-neutral-200 mx-5 w-full" />
      <h3 class="font-bold text-lg w-full mb-5 text-center md:text-left">Catégories</h3>
      <div v-for="category in categories" :key="category.value" class="w-full text-center md:text-left">
        <a>
<!--        <a :href="'/category/' + category.value">-->
          <span class="inline-block text-xs font-medium tracking-wider uppercase my-3" :style="`color:${category.color}`">{{ category.label }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
