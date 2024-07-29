<script setup lang="ts">
import IconLeaves from "@/components/icons/IconLeaves.vue";
import {useDeviceStore} from "@/stores/device";
const { isMobile } = useDeviceStore()
</script>

<template>
  <div
    class="banner flex flex-col pt-5 relative"
    :style="{ 'background-image': `url('/img/${isMobile ? 'mobile/' : ''}banner.jpg')` }"
  >
    <div
      class="flex-grow flex flex-col items-center justify-center text-3xl text-black text-center p-5 mb-10"
    >
      <div class="text-6xl md:text-7xl flex flex-col justify-items-center mt-5 md:mt-10">
        <div class="m-auto"><icon-leaves class="h-20 w-20" /></div>
        <div class="font-dancing banner-title text-green-900 mx-auto mb-2 md:mb-5 text-center">
          La petite plante
        </div>
        <div
          class="uppercase text-xl md:text-2xl font-light text-green-700 leading-2 mt-2 md:mt-5"
        >
          Le blog
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-position: center;
  background-size: cover;
  min-height: 30vh;
}
.banner-title {
  max-width: 60vw;
}
</style>