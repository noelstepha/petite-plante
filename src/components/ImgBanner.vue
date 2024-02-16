<script setup lang="ts">
import IconLeaves from "@/components/icons/IconLeaves.vue";
import WaveDecorator from "@/components/icons/WaveDecorator.vue";
</script>

<template>
  <div class="banner flex flex-col pt-5 relative">
    <div
      class="flex-grow flex flex-col items-center justify-center text-3xl text-black text-center p-5 mb-20"
    >
      <div class="text-7xl md:text-8xl flex flex-col justify-items-center">
        <div class="m-auto"><icon-leaves class="h-20 w-20 mt-10 md:mt-20"/></div>
        <div class="font-dancing banner-title text-green-900 mx-auto mb-5 md:mb-10 text-center">
          La petite plante
        </div>
        <div class="font-dancing text-4xl md:text-6xl text-green-700 mb-5 md:mb-10"
          >Conseils en produits de <span class="hightlight-title">soins naturels</span></div
        >

        <div class="uppercase text-xl md:text-2xl font-light text-green-700 leading-2 mt-5 md:mt-10"
          >La nature au service de votre bien-être</div
        >

        <div class="flex flex-wrap justify-center py-5 md:py-10">
<!--          <nav-button class="text-base m-2 p-2 uppercase shadow-md" to="/contact" dark>-->
<!--            <router-link to="/contact">Prendre rendez-vous</router-link>-->
<!--          </nav-button>-->
        </div>
      </div>
    </div>
    <wave-decorator class="text-white w-full rotate-180" />
  </div>
</template>

<style scoped>
.banner {
  background-image: url('/img/banner.jpg');
  background-position: center;
  background-size: cover;
  min-height: 70vh;
}
.banner-title {
  max-width: 60vw;
}

.hightlight-title {
  color: #91ca7b;
  text-shadow: 1px 0 #2da521;
}
</style>
