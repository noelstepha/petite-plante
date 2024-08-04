<script setup lang="ts">
import CategoryItem from '@/components/CategoryItem.vue'
import colors from 'tailwindcss/colors'
import ArticleTitle from "@/components/ArticleTitle.vue";
</script>

<template>
  <section class="px-20 pb-10 my-10">
    <div>
      <article-title text="Les solutions naturelles" center/>
    <div class="flex flex-wrap justify-center mt-10">
      <category-item
        title="Phytothérapie"
        img="categories/phytotherapy.png"
        :color="colors.amber['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-amber-800">La phytothérapie</span><br/>est le traitement des déséquilibres corporels et psychiques par l'usage des plantes médicinales du monde entier, grâce à leurs principes actifs qui agissent directement sur l'organisme.
      </category-item>
      <category-item
        title="Aromathérapie"
        img="categories/aromatherapy.png"
        :color="colors.teal['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-teal-800">L’aromathérapie</span><br/>est une branche de la phytothérapie, elle utilise les composés aromatiques extraits de plantes dîtes aromatiques pour entretenir la santé.
      </category-item>
      <category-item
        title="Apithérapie"
        img="categories/apitherapy.png"
        :color="colors.orange['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-orange-800">L’apithérapie</span><br/>améliore et maintient la santé avec des produits issus de la ruche, souvent en synergie avec d'autres produits naturels.
      </category-item>
      <category-item
        title="Micronutrition"
        img="categories/micronutrition.png"
        :color="colors.red['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-red-800">La micronutrition</span><br/>permet de fournir certains micronutriments qui seraient fabriqués en quantité insuffisante par notre organisme, alors qu'ils sont essentiels à notre santé.
      </category-item>
      <category-item
        title="Les huiles et beurres végétaux"
        img="categories/huiles-vegetales.png"
        :color="colors.green['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-green-800">Les huiles végétales</span><br/>sont extraites d'une plante oléagineuse, d'une graine, de noix ou de fruits. Leurs acides gras sont ingérés via l'alimentation ou utilisés en synergie avec d'autres produits naturels lors d'un soin de la peau.
      </category-item>
      <category-item
        title="Les fleurs de Bach"
        img="categories/bach.png"
        :color="colors.lime['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-lime-800">Les fleurs de Bach</span><br/>sont 38 élixirs floraux qui correspondent à un état émotionnel spécifique. Elles rééquilibrent les troubles émotionnels et les blocages profonds.
      </category-item>
      <category-item
        title="L'argile"
        img="categories/argiles.png"
        :color="colors.pink['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-pink-800">L'argile</span><br/>est un soin naturel polyvalent, un agent de régénération reminéralisant et équilibrant puissant, anti-toxique, anti-infectieux, souvent utilisé en synergie avec d'autres produits naturels.
      </category-item>
      <category-item
        title="La gemmothérapie"
        img="categories/gemmotherapie.png"
        :color="colors.violet['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-violet-800">La gemmothérapie</span><br/>utilise, avec une efficacité d'action, l'énergie vitale et les principes actifs de jeunes pousses et de bourgeons d'arbres/arbustes en devenir.
      </category-item>
    </div>
    </div>
  </section>
</template>
