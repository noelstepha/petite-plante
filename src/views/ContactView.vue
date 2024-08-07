<script setup lang="ts">
import ArticleTitle from '@/components/ArticleTitle.vue'
import {useDeviceStore} from "@/stores/device";
const { isMobile } = useDeviceStore()
</script>

<template>
  <div class="w-full h-20 brush"></div>
  <section id="contact" class="section pb-5 lg:py-16 p-page bg2">
    <article-title text="Contact" secondary center></article-title>
    <h3 class="font-dancing text-5xl my-5 text-brown-900 text-center">Des questions ?</h3>
    <div class="lg:text-lg text-justify md:w-2/3 md:m-auto">
      Les séances se déroulent à distance, vous offrant confort et praticité. Pour plus de renseignement sur le processus de réservation,
      vous pouvez consulter <router-link to="/faq" class="text-blue-600 hover:underline">la page d'aide</router-link>.<br /><br />
      Vous pouvez aussi me contacter par téléphone ou par e-mail, je suis là pour répondre à toutes vos questions et vous guider dans le processus de
      réservation si besoin.<br/><br/>
      Besoin de conseils et astuces personnalisés ? Suivez-moi sur les réseaux sociaux pour des conseils et astuces adaptés à vos besoins.
    </div>

    <div class="flex flex-col md:flex-row pt-20 pb-10">
      <div class="flex flex-col items-center justify-center w-full">
        <img :src="`/img/${isMobile ? 'mobile/' : ''}phone-drawing.png`" alt="phone" class="h-20 w-16 mb-5" />
        <a href="tel:+33683196971" class="font-bold text-xl text-red-950 hover:underline">06 83 19 69 71</a>
      </div>
      <div class="flex flex-col items-center justify-center w-full mt-10 md:mt-0">
        <img :src="`/img/${isMobile ? 'mobile/' : ''}mail-drawing.png`" alt="email" class="h-20 w-28 mb-5" />
        <div>
          <a href="mailto:contact@lapetiteplante.fr" class="font-bold text-xl text-red-950 hover:underline"
            >contact@lapetiteplante.fr</a
          >
        </div>
      </div>
      <div class="flex flex-col items-center justify-center w-full mt-10 md:mt-0">
        <img :src="`/img/facebook.png`" alt="facebook" class="h-20 w-20 mb-5" />
        <a href="https://www.facebook.com/profile.php?id=61558502530004" class="font-bold text-xl text-red-950 hover:underline"
        >La Petite Plante</a
        >
      </div>
      <div class="flex flex-col items-center justify-center w-full mt-10 md:mt-0">
        <img :src="`/img/instagram.png`" alt="instagram" class="h-20 w-20 mb-5" />
        <a href="https://www.instagram.com/petiteplante64" class="font-bold text-xl text-red-950 hover:underline"
        >petiteplante64</a
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  margin-top: -60px;
  background-color: #ffedd5;
}
.brush {
  background-image: url('/img/hightlight-brush2.svg');
  font-weight: 500;
  margin: 6px 0;
  padding: 4px 10px 9px 4px;
}
</style>
