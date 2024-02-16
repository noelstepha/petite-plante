<script setup lang="ts">
import CategoryItem from '@/components/CategoryItem.vue'
import ArticleTitle from '@/components/ArticleTitle.vue'
import colors from 'tailwindcss/colors'
</script>

<template>
  <section class="px-20 mb-10">
<!--    <article-title text="Les principales approches"></article-title>-->
<!--    <p class="mb-10">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page-->
<!--      avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les-->
<!--      années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour-->
<!--      réaliser un livre spécimen de polices de texte.</p>-->
    <div>
    <div class="flex flex-wrap justify-center">
      <category-item
        title="Phytothérapie"
        img="/img/categories/phytotherapy.png"
        class="text-amber-100"
      >
        <span class="font-dancing text-xl md:text-2xl text-amber-800">La phytothérapie</span><br/>est le traitement ou prévention des maladies par l'usage des plantes. La phytothérapie fait partie des médecines parallèles, ou médecines douces.
      </category-item>
      <category-item
        title="Aromathérapie"
        img="/img/categories/aromatherapy.png"
        :color="colors.teal['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-teal-800">L’aromathérapie</span><br/>est une branche de la phytothérapie, elle utilise les composés aromatiques extraits de plantes dîtes aromatiques pour entretenir la santé.
      </category-item>
      <category-item
        title="Apithérapie"
        img="/img/categories/apitherapy.png"
        :color="colors.orange['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-orange-800">L’apithérapie</span><br/>améliore et maintient la santé avec des produits issus de la ruche, souvent en synergie avec d'autres produits naturels.
      </category-item>
      <category-item
        title="Micronutrition"
        img="/img/categories/micronutrition.png"
        :color="colors.red['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-red-800">La micronutrition</span><br/>permet de fournir certains micronutriments qui seraient fabriqués en quantité insuffisante par notre organisme, alors qu'ils sont essentiels à notre santé.
      </category-item>
      <category-item
        title="Les huiles et beurres végétaux"
        img="/img/categories/huiles-vegetales.png"
        :color="colors.green['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-green-800">Les huiles et beurres végétaux</span><br/>permet de fournir certains micronutriments qui seraient fabriqués en quantité insuffisante par notre organisme, alors qu'ils sont essentiels à notre santé.
      </category-item>
      <category-item
        title="Les fleurs de Bach"
        img="/img/categories/bach.png"
        :color="colors.lime['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-lime-800">Les fleurs de Bach</span><br/>permet de fournir certains micronutriments qui seraient fabriqués en quantité insuffisante par notre organisme, alors qu'ils sont essentiels à notre santé.
      </category-item>
      <category-item
        title="L'argile"
        img="/img/categories/argiles.png"
        :color="colors.pink['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-pink-800">L'argile</span><br/>permet de fournir certains micronutriments qui seraient fabriqués en quantité insuffisante par notre organisme, alors qu'ils sont essentiels à notre santé.
      </category-item>
      <category-item
        title="La gemmothérapie"
        img="/img/categories/gemmotherapie.png"
        :color="colors.violet['100']"
      >
        <span class="font-dancing text-xl md:text-2xl text-violet-800">La gemmothérapie</span><br/>utilise, avec une efficacité d'action, l'énergie vitale et les principes actifs de jeunes pousses et de bourgeons d'arbres/arbustes en devenir.
      </category-item>
    </div>
    </div>
<!--    <div class="flex justify-between">-->
<!--      <category-item-->
<!--        title="L'hygiène de vie"-->
<!--        img="/img/meditation.png"-->
<!--        css-classes="pb-10 scale-75"-->
<!--        color="#fee2e2"-->
<!--      >-->
<!--        <span class="font-dancing text-2xl text-red-800">L'hygiène de vie</span><br/>permet de fournir certains micronutriments qui seraient fabriqués en quantité insuffisante par notre organisme, alors qu'ils sont essentiels à notre santé.-->
<!--      </category-item>-->

<!--    </div>-->
  </section>
</template>
