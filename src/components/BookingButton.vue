<script setup lang="ts">
import NavButton from "@/components/NavButton.vue";
function book() {
  window.location.href = "https://petiteplante.simplybook.it/v2/#book"
}
</script>

<template>
  <nav-button class="text-base m-2 p-2 uppercase shadow-md" @click="book()" dark>
    Prendre rendez-vous
  </nav-button>
</template>

<style scoped>

</style>