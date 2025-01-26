import HomeView from '../views/HomeView.vue'
import FAQView from '@/views/FAQView.vue'
import LegalNotice from '@/views/LegalNotice.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import BlogView from '@/views/blog/BlogView.vue'
import TermConditionsView from '@/views/TermConditionsView.vue'
import BlogArticleView from '@/views/blog/BlogArticleView.vue'
import type {RouteRecordRaw} from "vue-router";

export const routes: Array<RouteRecordRaw> = [
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
    path: '/blog/2',
    name: 'article-2',
    component: BlogArticleView
  },
  {
    path: '/blog/3',
    name: 'article-3',
    component: BlogArticleView
  },
  {
    path: '/blog/4',
    name: 'article-4',
    component: BlogArticleView
  },
  {
    path: '/blog/5',
    name: 'article-5',
    component: BlogArticleView
  }
]