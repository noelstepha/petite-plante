import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FAQView from '@/views/FAQView.vue'
import LegalNotice from '@/views/LegalNotice.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import BlogView from '@/views/blog/BlogView.vue'
import TermConditionsView from '@/views/TermConditionsView.vue'
import BlogArticleView from '@/views/blog/BlogArticleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/legal-notice',
      name: 'legal-notice',
      component: LegalNotice
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
    {
      path: '/term-and-conditions',
      name: 'term-and-conditions',
      component: TermConditionsView
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/blog/:articleId',
      name: 'article',
      component: BlogArticleView
    }
  ],
  scrollBehavior(to) {
    if (to.fullPath === '/' || !to.hash) return { top: 0 }
    return {
      el: to.hash,
      top: 10,
      behavior: 'smooth'
    }
  }
})

export default router
