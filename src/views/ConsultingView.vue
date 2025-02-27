<script setup lang="ts">
import ArticleTitle from '@/components/ArticleTitle.vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconTalk from '@/components/icons/IconTalk.vue'
import IconEuro from '@/components/icons/IconEuro.vue'
import IconInbox from '@/components/icons/IconInbox.vue'
import ConsultationItem from '@/components/ConsultationItem.vue'
import IconComputer from '@/components/icons/IconComputer.vue'
import WaveDecorator from '@/components/icons/WaveDecorator.vue'
import BrushEffect from '@/components/icons/BrushEffect.vue'
import BrushSeparator from '@/components/icons/BrushSeparator.vue'
import BookingWidget from "@/components/BookingWidget.vue";
import {useDeviceStore} from "@/stores/device";
import IconFlowerEmblem from "@/components/icons/IconFlowerEmblem.vue";
import IconShoppingBag from "@/components/icons/IconShoppingBag.vue";
const { isMobile } = useDeviceStore()
</script>

<template>
  <article class="pb-5 overflow-hidden relative">
    <wave-decorator class="text-amber-100 w-full absolute" />
    <section class="text-center relative bg">
      <div class="w-3/4 m-auto pt-52 pb-20 relative">
        <brush-effect>
          <article-title text="MON OBJECTIF" center secondary></article-title>
          <p class="font-dancing text-3xl lg:text-7xl text-green-800">
            Vous donner des clés pour votre santé, votre bien-être et votre beauté !
          </p>
        </brush-effect>
      </div>
    </section>

    <brush-separator class="text-green-100 w-full h-24" />
    <section id="pricing" class="bg-green-100 w-full pb-5 lg:py-16 p-page bg2">
      <div class="flex flex-col lg:flex-row items-center">
        <div class="w-full pt-16">
          <article-title text="Tarif" secondary></article-title>
          <h3 class="font-dancing text-5xl my-8 text-green-900">50 € pour la téléséance et les conseils</h3>
          <p class="text-justify lg:text-lg">
            Puis 35 € pour la séance de suivi.
            Une séance à domicile est possible au tarif de 60 € (séance de suivi à domicile 45 €) et les règlements pourront se faire alors par carte bancaire, chèque, espèce ou virement instantané.<br /><br />

            Si vous souhaitez une autre modalité de rendez-vous, <router-link to="/#contact" class="py-3 hover:underline">contactez-moi</router-link>.
          </p>
        </div>
        <div class="w-full">
          <img :src="`/img/${isMobile ? 'mobile/' : ''}teleconsultation.png`" class="m-auto" alt="teleconsultation"/>
        </div>
      </div>
      <div class="py-5 mt-5">
        <article-title text="La prise de rendez-vous" secondary center-sm-only></article-title>
        <p class="flex flex-col lg:flex-row justify-start items-center">
          <consultation-item
            class="mt-10 px-10 lg:pr-10"
            :number="1"
            text="Vous prenez rendez-vous sur le site"
          >
            <icon-calendar />
          </consultation-item>
          <consultation-item
            class="mt-10 px-10"
            :number="2"
            text="Vous réglez la consultation par carte bancaire sur le site"
          >
            <icon-euro />
          </consultation-item>
          <consultation-item
            class="mt-10 px-10"
            :number="3"
            text="Vous recevez un lien directement par mail avant la séance"
          >
            <icon-envelope />
          </consultation-item>
        </p>
      </div>
      <div class="py-5 my-5">
        <article-title text="La séance" secondary center-sm-only></article-title>
        <p class="flex flex-col lg:flex-row justify-start items-center">
          <consultation-item
            class="mt-10 px-10 lg:pr-10"
            :number="4"
            text="Vous accédez à la téléconsultation depuis votre ordinateur, tablette ou téléphone"
          >
            <icon-computer />
          </consultation-item>
          <consultation-item
            class="mt-10 px-10"
            :number="5"
            text="Ensemble, nous recueillons vos habitudes de vie et de votre parcours de santé et nous discutons des solutions existantes"
          >
            <icon-talk />
          </consultation-item>
          <consultation-item
            class="mt-10 px-10"
            :number="6"
            text="Vous recevrez par email, sous 2 à 5 jours, un bilan et vos conseils personnalisés"
          >
            <icon-inbox />
          </consultation-item>
        </p>
      </div>
      <div class="py-5 my-5">
        <article-title text="Les produits" secondary center-sm-only></article-title>
        <consultation-item
          class="mt-10 px-10"
          :number="7"
          text="Fourniture et livraison des produits naturels (optionnel)"
        >
          <icon-shopping-bag />
        </consultation-item>
        <p class="mt-10 md:mt-0 md:ml-10 text-justify">
          Pour tous ceux qui souhaitent se faciliter la vie, le bien-être est à portée de clic !<br />
          <span class="text-green-900 font-bold">La petite plante</span> met en place une assistance : après validation et paiement d'un devis pour l'achat des produits préconisés dans le bilan personnalisé,
          nous nous occupons de vous les livrer. Ainsi, vous n'avez plus qu'à suivre pas à pas le protocole de soin spécialement conçu pour vous.<br />
        </p>
      </div>
      <br />
      <div class="flex flex-col items-center lg:text-lg text-center mt-5">
        <div><span class="text-green-900 font-bold">La petite plante</span> vous accompagne dans votre quête du bien-être naturel :<br /><br /></div>
        <ul>
          <li class="flex flex-col items-center justify-center mb-5">
            <span class="font-bold">Avec un bilan personnalisé</span>
            <span>Découvrez les produits naturels parfaitement adaptés à vos besoins spécifiques.</span>
          </li>
          <li class="flex flex-col items-center justify-center mb-5">
            <span class="font-bold">La livraison à domicile</span>
            <span>Recevez vos produits directement chez vous, en toute simplicité.</span>
          </li>
          <li class="flex flex-col items-center justify-center mb-5">
            <span class="font-bold">Des soins sur mesure</span>
            <span>Huiles essentielles, plantes, cosmétiques bio, etc. Tout pour une routine santé et beauté naturelle.</span>
          </li>
        </ul>
      </div>
      <p class="lg:text-lg text-center mt-5">Prenez rendez-vous dès maintenant pour un bilan personnalisé et profitez du service de livraison !</p>
      <div class="flex flex-wrap justify-center py-5">
        <booking-widget />
      </div>
    </section>
    <brush-separator class="text-green-100 w-full h-24 origin-center rotate-180" />
  </article>
</template>

<style scoped>
.bg {
  position: relative;
}
.bg:after {
  content: ' ';
  display: block;
  position: absolute;
  transform: rotate(-8deg);
  left: 0;
  top: 20%;
  width: 100%;
  height: 80%;
  opacity: 0.5;
  background-image: url('/img/bubble.png');
  background-size: contain;
  z-index: -100;
  filter: brightness(1.75);
}
.bg2 {
  position: relative;
}
.bg2:before {
  content: ' ';
  display: block;
  position: absolute;
  transform: rotate(4deg);
  left: 0;
  top: -5%;
  width: 100%;
  height: 14%;
  opacity: 0.5;
  background-image: url('/img/bubble.png');
  background-size: 100%;
  z-index: 0;
  filter: brightness(1.75);
  background-repeat: no-repeat;
}

@media (min-width: 1024px) {
  .bg2:before {
    top: -10%;
    width: 100%;
    height: 22%;
    background-size: 50%;
    background-repeat: repeat;
  }
}
</style>
