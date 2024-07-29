<script setup lang="ts">
import BlogBanner from '@/components/blog/BlogBanner.vue'
import { useRoute } from 'vue-router'
import { useBlogStore } from '@/stores/blog'
import markdownit from 'markdown-it'
import MarkdownItAbbr from 'markdown-it-abbr'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItFootnote from 'markdown-it-footnote'
import MarkdownItHighlightjs from 'markdown-it-highlightjs'
import MarkdownItSub from 'markdown-it-sub'
import MarkdownItSup from 'markdown-it-sup'
import markdownItTasklists from 'markdown-it-task-lists'
import markdownIns from 'markdown-it-ins'
import markdownMark from 'markdown-it-mark'
import { markdownItTable } from 'markdown-it-table'
import { full as emoji } from 'markdown-it-emoji'

const markdown = markdownit({
  html: true,
  linkify: true,
  typographer: true
}).use(MarkdownItAbbr)
  .use(MarkdownItAnchor)
  .use(MarkdownItFootnote)
  .use(MarkdownItHighlightjs)
  .use(MarkdownItSub)
  .use(MarkdownItSup)
  .use(markdownItTasklists)
  .use(markdownItTable)
  .use(emoji)
  .use(markdownIns)
  .use(markdownMark)

const route = useRoute()
const articleId = route.params.articleId as string
const blogStore = useBlogStore()
await blogStore.initArticles()
const article = blogStore.article(articleId)
</script>

<template>
  <BlogBanner />
  <div class="article px-10 md:px-20 lg:px-40 xl:px-60 my-10 mb-20">
    <h1 class="text-3xl text-center w-full mb-10 mt-10">
      {{ article?.title }}
    </h1>
    <div class="flex justify-center text-2xl my-10 ">🌿🌿🌿</div>
    <div class="text-lg text-justify" v-html="markdown.render(article?.body as string)" />
  </div>
</template>

<style>
.article h3 {
  @apply text-xl my-5;
}
.article h2 {
  @apply text-2xl my-5;
}
.article h1 {
  @apply text-3xl my-5;
}

.article ul {
  list-style: disc;
  margin: 1em 2em;
}
.article a {
  color: #428bca;
  text-decoration: none;
}
.article a:hover {
  @apply underline
}

.article hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}
.article code {
  padding: 2px 4px;
  font-size: 90%;
  color: #c7254e;
  background-color: #f9f2f4;
  border-radius: 4px;
}

.article pre {
  display: block;
  padding: 10px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.article pre code {
  font-size: 13px;
  background-color: #f5f5f5;
  color: #333;
}

.article img {
  display: inline-block;
}

.article p {
  margin: 0 0 10px;
}
</style>
