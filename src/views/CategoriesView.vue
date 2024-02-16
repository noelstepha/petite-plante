<script setup lang="ts">
import CategoryItem from '@/components/CategoryItem.vue'
import colors from 'tailwindcss/colors'
</script>

<template>
  <section class="px-20 mb-10">
    <div>
    <div class="flex flex-wrap justify-center">
      <category-item
        title="Phytothérapie"
        img="categories/phytotherapy.png"
        class="text-amber-100"
      >
        <span class="font-dancing text-xl md:text-2xl text-amber-800">La phytothérapie</span><br/>est le traitement ou prévention des maladies par l'usage des plantes. La phytothérapie fait partie des médecines parallèles, ou médecines douces.
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
        <span class="font-dancing text-xl md:text-2xl text-green-800">Les huiles et beurres végétaux</span><br/>permet de fournir certains micronutriments qui seraient fabriqués en quantité insuffisante par notre organisme, alors qu'ils sont essentiels à notre santé.
      </category-item>
      <category-item
        title="Les fleurs de Bach"
        img="categories/bach.png"
        :color="colors.lime['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-lime-800">Les fleurs de Bach</span><br/>permet de fournir certains micronutriments qui seraient fabriqués en quantité insuffisante par notre organisme, alors qu'ils sont essentiels à notre santé.
      </category-item>
      <category-item
        title="L'argile"
        img="categories/argiles.png"
        :color="colors.pink['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-pink-800">L'argile</span><br/>permet de fournir certains micronutriments qui seraient fabriqués en quantité insuffisante par notre organisme, alors qu'ils sont essentiels à notre santé.
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
