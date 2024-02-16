<script setup lang="ts">
import PaintBrush from "@/components/icons/PaintBrush.vue";

defineProps<{
  img: string
  title: string
  color?: string
}>()
const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="rounded-full relative px-5 scope">
    <div class="absolute behind">
      <paint-brush :style="`color: ${color}`" class="w-full" />
    </div>
    <div class="absolute absolute-center bottom-3/5">
      <figure class="m-auto w-32 md:w-40 pl-2 md:pl-5">
        <img :src="`${base}/img/${img}`" class="w-full" alt="title" />
      </figure>
    </div>
    <div class="w-full flex items-center pt-24 md:pt-32 relative z-20">
      <div class="text-center text-sm pl-5 scale-90 md:scale-100 md:pl-10 md:pr-5 text-neutral-800">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scope {
  max-width: 300px;
  height: 333px;
}
.behind {
  z-index: -1;
  top: 22%;
}

.absolute-center {
  width:100%;
  display:block;
  position:absolute;
  left:0;
  right:0;
  margin:auto;
}
</style>