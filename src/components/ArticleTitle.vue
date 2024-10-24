<script setup lang="ts">
defineProps<{
  text: string
  center?: boolean
  secondary?: boolean
  centerSmOnly?: boolean
}>()
</script>

<template>
  <h2
    class="text-xs pt-2 uppercase text-herb-400 font-semibold"
    :class="{ 'text-center': center || centerSmOnly, 'md:text-left': centerSmOnly, 'text-amber-900': secondary }"
  >
    {{ text }}
  </h2>
  <div
    class="border-b border-b-lime-400 w-12 mt-1.5 mb-3"
    :class="{ 'm-auto': center || centerSmOnly, 'md:mx-0': centerSmOnly, 'border-b-amber-600': secondary }"
  ></div>
</template>

<style scoped></style>
