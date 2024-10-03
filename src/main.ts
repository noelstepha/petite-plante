import './assets/main.css'

import { createPinia } from 'pinia'
import { ViteSSG } from 'vite-ssg'

import App from './App.vue'
import { routes } from './router'
import articles from './articles.json'

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  {
    routes,
    base: import.meta.env.BASE_URL,
    scrollBehavior(to) {
      if (to.fullPath === '/' || !to.hash) return { top: 0 }
      return {
        el: to.hash,
        top: 10,
        behavior: 'smooth'
      }
    }
  },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    const pinia = createPinia()
    app.use(pinia)
    if (import.meta.env.SSR) {
      initialState.pinia = pinia.state.value
    } else {
      pinia.state.value = initialState.pinia || {}
    }
  },
  { useHead: true }
)

export async function includedRoutes(paths: string[], routes: { name: string; path: string }[]) {
  const articleSlugs = articles.filter((a) => a.id !== '1').map((a) => a.id)
  return routes.flatMap((route) => {
    return route.name.startsWith('article') ? articleSlugs.map((slug) => `/blog/${slug}`) : route.path
  })
}
