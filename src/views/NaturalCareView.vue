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
        <article-title text="Les conseils au naturel"/>
        <h1 class="font-dancing text-4xl my-3 mt-5 text-green-800">
          Améliorer sa santé et son bien-être
        </h1>
        <p class="m-auto text-justify">
          Plongez dans un monde de bien-être naturel avec <span class="text-green-900 font-bold">La petite plante</span> pour découvrir le pouvoir des produits naturels
          et prenez rendez-vous dès aujourd'hui pour une séance individuelle.&nbsp;<span class="text-2xl">🌿</span><br /><br />
          Être conseillère en produits de soins naturels consiste à aider à entretenir la bonne santé et le bien-être en proposant
          des produits naturels. Une fois la problématique du client comprise, une fois la cause de son déséquilibre identifié lors d'un questionnaire de vitalité,
          la conseillère en produits de soins naturels va essayer de ramener la personne vers une état de confort et de bien-être toujours dans le respect du travail du médecin.
          <span class="text-2xl">🧘‍</span>
        </p><br/>
        <p class="m-auto text-justify">
          Que vous cherchiez à améliorer  votre sommeil, à renforcer votre immunité, à diminuer des douleurs de dos et d'articulations/de migraines/de digestion/de troubles féminins,
          à équilibrer votre système nerveux, ou à retrouver votre énergie vitale, je suis là pour vous écouter et
          vous orienter vers les solutions naturelles qui correspondent le mieux à vos besoins uniques. &nbsp;<span class="text-2xl">🧚🏻‍</span>
        </p>
      </div>
    </section>
  </article>
</template>
