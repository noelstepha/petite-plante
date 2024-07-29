import { defineStore } from 'pinia'
import articles from '../articles.json'
import categories from '../categories.json'
import type { Article } from '@/models/article'
import type { Category } from '@/models/category'

export const useBlogStore = defineStore('blog', {
  state: () => ({ articles: articles as Article[], categories: categories as Category[] }),
  getters: {
    article: (state) => {
      return (id: string) => state.articles.find((article) => article.id === id)
    },
    category: (state) => {
      return (value: string) => state.categories.find((category) => category.value === value)
    }
  },
  actions: {
    async getArticleBody(article: Article): Promise<string> {
      const response = await fetch(article.path)
      return await response.text()
    },
    async initArticles() {
      this.articles = await Promise.all(
        articles.map(async (article) => ({
          ...article,
          body: await this.getArticleBody(article as Article)
        }))
      )
    }
  }
})
