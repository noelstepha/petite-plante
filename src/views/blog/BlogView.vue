<script setup lang="ts">
import BlogPost from '@/components/blog/BlogPost.vue'
import { useDeviceStore } from '@/stores/device'
import IconLeaves from '@/components/icons/IconLeaves.vue'
import WaveDecorator from '@/components/icons/WaveDecorator.vue'
import BlogProfile from '@/components/blog/BlogProfile.vue'
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
      </div>
    </div>
  </div>
  <div class="px-28 pt-5 mb-20">
    <!--    <div class="text-7xl my-5 text-green-800 font-bold font-dancing" >Le Blog de La Petite Plante :</div>-->
    <!--    <div class="text-7xl w-1/2 my-5 text-green-700 font-bold font-dancing" >Votre Guide Bien-être</div>-->
    <!--    <div class="text-5xl w-2/3 text-brown-800">Des conseils pour votre santé et votre bien-être inspirés par la Nature</div>-->

    <div class="flex mt-10">
      <div class="w-1/5">
        <BlogProfile />
      </div>

      <div class="w-0.5 bg-neutral-100 ml-10"></div>
      <div class="px-10">
        <h2 class="uppercase mb-10 text-neutral-400">Articles récents</h2>
        <div class="flex">
          <div class="w-4/5">
            <BlogPost featured />
          </div>
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
.hightlight-title {
  color: #91ca7b;
  text-shadow: 1px 0 #2da521;
}
</style>
