<script setup lang="ts">
import ArticleTitle from '@/components/ArticleTitle.vue'
import {useDeviceStore} from "@/stores/device";
const { isMobile } = useDeviceStore()
</script>

<template>
  <article id="natural-care" class="py-10">
    <section class="flex flex-col lg:flex-row p-page">
      <img class="w-full md:w-2/3 lg:w-1/2 pt-10 lg:pr-5 m-auto" :src="`/img/${isMobile ? 'mobile/' : ''}natural-care.png`" alt="natural-care" />
      <div class="w-full m-auto px-5 lg:text-lg">
        <article-title text="Conseils au naturel personnalisés et assistance"/>
        <h3 class="font-dancing text-4xl my-3 mt-5 text-green-800">
          Améliorez votre santé et votre bien-être
        </h3>
        <p class="m-auto text-justify">
          Vous recherchez des soins naturels et efficaces pour votre santé, votre bien-être et votre beauté ? La petite plante vous accompagne dans votre quête du bien-être naturel. <span class="text-2xl">🌿</span><br /><br />
          En tant que conseillère en produits de soins naturels, <span class="font-bold">je vous aide à entretenir votre santé et votre bien-être en vous proposant des produits naturels</span>.
          Une fois votre problématique comprise, une fois la cause de votre déséquilibre identifié lors d'un questionnaire de vitalité,
          <span class="font-bold">l'objectif est de vous ramener vers un état de confort et de bien-être toujours dans le respect du travail du médecin.</span>&nbsp;<span class="text-2xl">🧘‍</span>
        </p><br/>
        <p class="m-auto text-justify">
          Que vous cherchiez à améliorer  votre sommeil, à renforcer votre immunité, à diminuer des douleurs de dos et d'articulations/de migraines/de digestion/de troubles féminins,
          à équilibrer votre système nerveux, ou à retrouver votre énergie vitale, <span class="font-bold"> je suis là pour vous écouter et
          vous orienter vers les solutions naturelles qui correspondent le mieux à vos besoins uniques.</span><br /><br />

          Prenez rendez-vous dès maintenant et bénéficiez d’un bilan personnalisé pour choisir les produits les mieux adaptés à vos besoins !&nbsp;<span class="text-2xl">🧚🏻‍</span>
        </p>
      </div>
    </section>
  </article>
</template>
