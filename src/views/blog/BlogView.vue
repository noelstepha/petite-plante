<script setup lang="ts">
import BlogPost from '@/components/blog/BlogPost.vue'
import BlogProfile from '@/components/blog/BlogProfile.vue'
import BlogBanner from "@/components/blog/BlogBanner.vue";
import {useBlogStore} from "@/stores/blog";

const blogStore = useBlogStore()
await blogStore.initArticles()
const articles = blogStore.articles.filter(article => article.id !== "1")
</script>

<template>
  <BlogBanner />
  <div class="px-10 md:px-28 pt-5 mb-20">
    <div class="flex flex-col-reverse md:flex-row mt-10">
      <div class="w-full md:w-1/5 mt-10 md:mt-0">
        <BlogProfile />
      </div>

      <div class="hidden md:block w-0.5 bg-neutral-100 ml-10"></div>
      <div class="w-full md:px-10 md:w-4/5">
        <h2 class="uppercase mb-3 md:mb-10 text-neutral-400 text-center md:text-left">Articles récents</h2>
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 p-5" v-for="article in articles" :key="article.id">
            <BlogPost :article="article"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


