<script setup lang="ts">
defineProps<{
  text: string
  center?: boolean
  secondary?: boolean
}>()
</script>

<template>
  <h3 class="text-xs pt-2 uppercase text-herb-400 font-semibold" :class="{ 'text-center': center, 'text-amber-900': secondary }">{{ text }}</h3>
  <div class="border-b border-b-lime-400 w-12 mt-1.5 mb-3" :class="{ 'm-auto': center, 'border-b-amber-600': secondary }"></div>
</template>

<style scoped></style>