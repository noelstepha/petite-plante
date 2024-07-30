<script setup lang="ts">
import ImgBanner from '@/components/ImgBanner.vue'
import AboutView from '@/views/AboutView.vue'
import ConsultingView from '@/views/ConsultingView.vue'
import NaturalCareView from '@/views/NaturalCareView.vue'
import WarningView from '@/views/WarningView.vue'
import CategoriesView from '@/views/CategoriesView.vue'
import ContactView from '@/views/ContactView.vue'
import { useHead } from '@vueuse/head'

const jsonld = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Les conseils de La petite plante',
  alternateName: ['Conseils par La Petite Plante', 'La petite plante 🪴'],
  url: 'https://lapetiteplante.fr/'
}

useHead({
  meta: [
    {
      name: `og:title`,
      content: "La petite plante - Conseils santé et bien-être par les plantes\""
    },
    {
      name: `og:image`,
      content: "https://lapetiteplante.fr/img/logo/ss-banner.png"
    },
    {
      name: `og:type`,
      content: `website`
    },
    {
      name: `og:url`,
      content: `https://lapetiteplante.fr`
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify(jsonld)
    }
  ]
})
</script>

<template>
  <img-banner />
  <natural-care-view />
  <categories-view />
  <about-view />
  <consulting-view />
  <warning-view />
  <contact-view />
</template>

<style scoped></style>
