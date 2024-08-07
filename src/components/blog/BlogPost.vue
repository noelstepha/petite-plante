<script setup lang="ts">
import type {Article} from "@/models/article";
import {useBlogStore} from "@/stores/blog";

const props = defineProps<{
  article: Article
  featured?: boolean
}>()
const blogStore = useBlogStore()
const category = blogStore.category(props.article.category)
</script>

<template>
  <div class="cursor-pointer">
    <div class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
      <a class="relative block overflow-hidden aspect-video" :href="`/blog/${article.id}`">
        <img alt="article-thumbnail" :src="article.cover" class="transition-all" />
      </a>
    </div>
    <div class="flex flex-col justify-center lg:mt-5">
      <div class="flex gap-3">
        <a>
          <span class="inline-block text-xs font-medium tracking-wider uppercase" :style="`color:${category?.color}`">{{ category?.label }}</span>
        </a>
      </div>
      <h2 class="text-lg leading-snug tracking-tight my-2">
        <a :href="`/blog/${article.id}`">
          <span
            class="font-medium bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_10px] group-hover:bg-[length:100%_10px]"
          >
            {{ article.title }}
          </span>
        </a>
      </h2>
      <div class="mt-3 flex items-center space-x-3 text-gray-500">
          <div class="flex items-center gap-3">
            <span class="truncate text-sm">{{ Math.floor((article.nbWords ?? 0) / 265) }} min de lecture</span>
          </div>
        <span class="text-xs text-gray-300">•</span>
        <time class="truncate text-sm" datetime="2024-05-05T15:48:00.000Z">05 Mai 2024</time>
      </div>

    </div>
  </div>
</template>

<style scoped></style>
