<script setup lang="ts">
import HightlightBrush from '@/components/icons/HightlightBrush.vue'
import {useDeviceStore} from "@/stores/device";
const { isMobile } = useDeviceStore()
</script>

<template>
  <section class="bg-opacity-40 flex flex-col lg:flex-row items-center p-page pb-20">
    <div class="w-full lg:w-1/4">
      <img :src="`/img/${isMobile ? 'mobile/' : ''}warning.jpg`" class="w-2/3 m-auto" alt="allo-medecin" />
    </div>
    <div class="w-full lg:w-3/4 text-justify text-xl">
      <h3 class="font-dancing text-5xl my-8 text-orange-400">Attention</h3>
      <hightlight-brush color="#fee2e2">Je ne suis pas médecin</hightlight-brush> et je
      ne suis pas habilitée à faire un diagnostic ou à donner un traitement. Et je n'irai jamais à
      l'encontre d'une prescription médicale mais en complément.<br /><br />

      C'est pourquoi, vous devez consulter votre médecin
      <hightlight-brush color="#fee2e2">avant de réserver une séance</hightlight-brush>. (En cas de symptômes anormaux et/ou de fièvre, voyez
      votre médecin).<br /><br />

      <hightlight-brush color="#fee2e2"
      >Informez toujours votre médecin</hightlight-brush
      >
      de votre démarche et des conseils en produits de soins naturels qui vous ont été prodigués
      afin d'éviter les doublons et les contre-indications possibles. C'est par l'amélioration du
      terrain que le médecin pourra en toutes connaissances de cause, décider de diminuer la
      prescription médicamenteuse.
    </div>
  </section>
</template>
