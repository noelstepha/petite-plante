<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
<div class="banner flex items-center justify-center pt-20">
  <h1 class="text-6xl md:text-7xl font-dancing text-green-900 mx-auto mb-5 md:mb-10 text-center">
    {{ title }}
  </h1>
</div>
</template>

<style scoped>
.banner {
  background-image: url('/img/banner.jpg');
  background-position: center;
  background-size: cover;
  min-height: 30vh;
}
</style>