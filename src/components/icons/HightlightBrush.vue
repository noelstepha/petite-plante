<script setup lang="ts">
defineProps<{
  color?: string
}>()
</script>

<template>
  <div class="inline relative bg">
    <slot></slot>
  </div>
</template>

<style scoped>
.bg {
  background-image: url("/img/hightlight-brush.svg");
  font-weight: 500;
  margin: 6px 0;
  padding: 4px 10px 9px 4px;
}
</style>