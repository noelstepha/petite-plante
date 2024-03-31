<script setup lang="ts">
import ArticleTitle from '@/components/ArticleTitle.vue'
</script>

<template>
  <div class="w-full h-20 brush"></div>
  <section id="contact" class="section pb-5 lg:py-16 p-page bg2">
    <article-title text="Contact" secondary center></article-title>
    <h1 class="font-dancing text-5xl my-5 text-brown-900 text-center">Des questions ?</h1>
    <div class="text-center lg:text-lg text-justify md:w-2/3 md:m-auto">
      Les séances se déroulent à distance, vous offrant confort et praticité. Cependant, pour
      ceux qui préfèrent une séance à domicile, je me déplace dans les environs de la ville de
      Pau.<br /><br />
      Je suis là pour répondre à toutes vos questions et vous guider dans le processus de
      réservation si besoin.
      N'hésitez pas à me contacter par téléphone ou par e-mail.
    </div>

    <div class="flex flex-col md:flex-row pt-20 pb-10">
      <div class="flex flex-col items-center justify-center w-full mb-10 md:mb-0">
        <img src="/img/phone-drawing.png" alt="phone" class="h-20 w-16 mb-5" />
        <a href="tel:+33671888257" class="font-bold text-xl text-red-950 hover:underline">06 71 88 82 57</a>
      </div>
      <div class="flex flex-col items-center justify-center w-full">
        <img src="/img/mail-drawing.png" alt="email" class="h-20 w-28 mb-5" />
        <div>
          <a href="mailto:corinne.avotreservice@gmail.com" class="font-bold text-xl text-red-950 hover:underline"
            >corinne.avotreservice@gmail.com</a
          >
        </div>
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
