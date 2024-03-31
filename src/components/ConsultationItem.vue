<script setup lang="ts">
defineProps<{
  text: string
  number: number
}>()
</script>

<template>
  <div class="flex flex-col lg:flex-row items-center">
    <div class="flex items-center mb-5">
    <div class="text-red-950 font-bold text-4xl pr-3 -mt-3">{{number}}.</div>
    <div class="inline-block text-red-950 mr-5"><slot></slot></div>
    </div>
    <div class="w-52 -mt-3 text-center lg:text-left">{{ text }}</div>
  </div>
</template>
<style>
</style>