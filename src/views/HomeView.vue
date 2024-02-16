<script setup lang="ts">
import ImgBanner from '@/components/ImgBanner.vue'
import AboutView from '@/views/AboutView.vue'
import ConsultingView from "@/views/ConsultingView.vue";
import NaturalCareView from "@/views/NaturalCareView.vue";
import WarningView from "@/views/WarningView.vue";
import CategoriesView from "@/views/CategoriesView.vue";
</script>

<template>
  <img-banner />
  <natural-care-view />
  <categories-view />
  <about-view />
  <consulting-view />
  <warning-view />
</template>

<style scoped></style>
