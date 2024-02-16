<script setup lang="ts">
defineProps<{
  text?: string
  dark?: boolean
}>()
</script>

<template>
  <button
    class="bg-herb-400 text-white p-2 px-4 uppercase hover:bg-herb-600"
    :class="{ 'hover:text-herb-400': !dark, 'hover:text-white': dark }"
  >
    <span v-if="text">{{ text }}</span>
    <slot></slot>
  </button>
</template>

<style scoped></style>
