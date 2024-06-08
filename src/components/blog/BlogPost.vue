<script setup lang="ts">
defineProps<{
  featured?: boolean
}>()
</script>

<template>
  <div class="cursor-pointer">
    <div class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
      <a class="relative block overflow-hidden aspect-video">
        <img alt="article-thumbnail object-cover" src="/img/blog/img.png" class="transition-all" />
      </a>
    </div>
    <div class="flex flex-col justify-center lg:mt-5">
      <div class="flex gap-3">
        <a href="/category/technology">
          <span class="inline-block text-xs font-medium tracking-wider uppercase text-green-700">Phytothérapie</span>
        </a>
      </div>
      <h2 class="text-lg leading-snug tracking-tight my-2">
        <a>
          <span
            class="font-medium bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_10px]"
          >
            Comment et pourquoi utiliser les plantes pour se soigner ?
          </span>
        </a>
      </h2>
      <div class="mt-3 flex items-center space-x-3 text-gray-500">
        <a>
          <div class="flex items-center gap-3">
            <div class="relative h-8 w-8 flex-shrink-0">
              <img
                alt="Corinne"
                src="/img/blog/corinne-thumbnail.jpg"
                loading="lazy"
                decoding="async"
                class="rounded-full object-cover h-8"
              />
            </div>
            <span class="truncate text-sm">Corinne</span>
          </div>
        </a>
        <span class="text-xs text-gray-300">•</span>
        <time class="truncate text-sm" datetime="2024-05-05T15:48:00.000Z">05 Mai 2024</time>
      </div>

    </div>
  </div>
</template>

<style scoped></style>
