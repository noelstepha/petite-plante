<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div>
    <header>
      <nav-bar />
    </header>
    <main>
      <router-view />
    </main>
    <app-footer />
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  backdrop-filter: blur(5px);
  position: fixed;
}
</style>
