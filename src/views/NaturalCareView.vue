<script setup lang="ts">
import ArticleTitle from '@/components/ArticleTitle.vue'
</script>

<template>
  <article id="natural-care" class="py-10">
    <section class="flex flex-col lg:flex-row p-page">
      <img class="w-1/2 pt-10 pr-5 max-w-4xl m-auto" src="/img/natural-care.png" />
      <div class="w-full m-auto px-5">
        <article-title text="Les conseils au naturel"/>
        <h1 class="font-dancing text-4xl my-3 mt-5 text-green-800">
          Améliorer sa santé et son bien-être
        </h1>
        <p class="m-auto text-justify">
          Conseillère en produits de soins naturels consiste à aider à entretenir la bonne santé et le bien-être en proposant
          des produits naturels comme les plantes médicinales, les huiles essentielles, les produits de la ruche et les compléments alimentaires par exemple.
          Cela s'adresse à tout le monde mais de manière encadrée et adaptée à chaque personne...<br /><br />

          Une fois la problématique du client comprise, une fois la cause de son déséquilibre identifié lors d'un questionnaire de vitalité,
          la conseillère en produits de soins naturels va essayer de ramener la personne vers une état de confort et de bien-être toujours dans le respect du travail du médecin.
        </p>
      </div>
    </section>
  </article>
</template>

<style scoped>
.bg-ribbon {
  background-image: url('/img/spring-ribbon.png');
  background-repeat: no-repeat;
  background-size: contain;
  height: 192px;
  width: 196px;
}
</style>
