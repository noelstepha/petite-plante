<script setup lang="ts">
import ImgBanner from '@/components/ImgBanner.vue'
import AboutView from '@/views/AboutView.vue'
import ConsultingView from "@/views/ConsultingView.vue";
import NaturalCareView from "@/views/NaturalCareView.vue";
import WarningView from "@/views/WarningView.vue";
import CategoriesView from "@/views/CategoriesView.vue";
import ContactView from "@/views/ContactView.vue";
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
