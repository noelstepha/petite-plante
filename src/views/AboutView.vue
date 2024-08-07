<script setup lang="ts">
import IconFlowerEmblem from '@/components/icons/IconFlowerEmblem.vue'
import ArticleTitle from '@/components/ArticleTitle.vue'
import WaveDecorator from "@/components/icons/WaveDecorator.vue";
import {useDeviceStore} from "@/stores/device";
const { isMobile } = useDeviceStore()
</script>

<template>
  <article id="about" class="relative">
    <wave-decorator class="text-amber-100 w-full rotate-180" />
    <div class="bg-amber-100 flex flex-col lg:flex-row items-center pb-20 p-page">
      <section class="pt-10 lg:pt-0 w-full">
        <article-title text="Qui suis-je ?"></article-title>
        <h3 class="font-dancing text-5xl my-3 mt-10 text-brown-900">Bienvenue !</h3>
        <div class="flex text-justify lg:text-lg">
          <div>
            <p>
              Je m'appelle Corinne Cloué et je suis la fondatrice de La Petite Plante. Pendant la Covid, je travaillais et je voyais la nature prendre toute sa place pendant
              que nous étions confinés. J'étais émerveillée de la capacité d'adaptation des
              plantes et des animaux : ils se réappropriaient l'espace au moment où l'humain
              s'effaçait. C'était le règne de la Nature après des siècles de destruction ! Et
              je me suis posée la question de ma place dans le monde. J'étais en quête de sens...&nbsp;<span class="text-xl">🌿</span>
              <br />
            </p>
            <br />
            <p>
              C'est ainsi que je suis devenue, à 60 ans, Conseillère en Produits de Soins Naturels,
              diplômée en 2023 de la formation en ligne HIPPOCRATUS, créée en 1999 par le Dr Michel Tourasse.&nbsp;<span class="text-xl">🧑‍🎓</span>
            </p>
            <br />
            <p>
              Je crois fermement que la Nature détient les clés d'une vie saine et équilibrée et
              je suis là pour vous accompagner à chaque étape de votre voyage vers le bien-être.
              Prenez racine avec <span class="font-bold text-green-900">La petite plante</span> et laissez-moi vous aider à fleurir.&nbsp;<span class="text-xl">🌼</span>
            </p>
          </div>
        </div>
      </section>
      <div class="relative w-full bg-points mt-20">
        <img :src="`/img/${isMobile ? 'mobile/' : ''}serums.png`" class="w-5/6 w-max-original m-auto" alt="serums"/>
      </div>
    </div>
    <section class="bg-amber-100 pt-10 pb-20 flex flex-col lg:flex-row items-center p-page">
      <div class="w-full bg-points py-10 hidden lg:block">
        <img :src="`/img/${isMobile ? 'mobile/' : ''}spices.png`" class="w-5/6 m-auto" alt="spices"/>
      </div>
      <div class="w-full ml-0 lg:ml-10">
        <article-title text="Ma déontologie"></article-title>
        <h3 class="font-dancing text-5xl my-3 mt-10 text-brown-900">Le respect</h3>
        <div class="text-justify lg:text-lg">
          <p>
            Chaque client est une personne à respecter, quelle que soit sa situation, son état de
            santé physique ou psychique, son niveau d'intégration sociale :
          </p>
          <br />
          <ul>
            <li class="flex items-start">
              <icon-flower-emblem class="w-3 h-3 inline-block text-secondary mt-2 mr-2" />
              Respect de la personne, de ses droits fondamentaux,
            </li>
            <li class="flex items-start">
              <icon-flower-emblem class="w-3 h-3 inline-block text-secondary mt-2 mr-2" />
              Respect de son espace de vie privée, de son intimité, de son intégrité, de sa dignité,
            </li>
            <li class="flex items-start">
              <icon-flower-emblem class="w-3 h-3 inline-block text-secondary mt-2 mr-2" />
              Respect de sa culture, de son choix de vie et de son projet de vie quand il est
              formulé,
            </li>
            <li class="flex items-start">
              <icon-flower-emblem class="w-3 h-3 inline-block text-secondary mt-2 mr-2" />
              Respect de la confidentialité des informations reçues.
            </li>
          </ul>
          <br />
          <p>
            Ma déontologie implique donc réserve et discrétion pour tout et à tout moment du
            conseil.
          </p>
        </div>
      </div>
      <div class="w-full bg-points mt-10 lg:hidden">
        <img :src="`/img/${isMobile ? 'mobile/' : ''}spices.png`" class="w-5/6 m-auto" alt="spices" />
      </div>
    </section>
  </article>
</template>

<style scoped>
.w-max-original {
  max-width: 670px;
}

.bg-points {
  background-image: url("/img/points.png");
  background-size: 80%;
  background-position: center;
}
</style>