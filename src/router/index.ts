import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FAQView from "@/views/FAQView.vue";
import LegalNotice from "@/views/LegalNotice.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";

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
      name: "legal-notice",
      component: LegalNotice
    },
    {
      path: '/privacy-policy',
      name: "privacy-policy",
      component: PrivacyPolicy
    },
    {
      path: '/faq',
      name: "faq",
      component: FAQView
    }

  ],
  scrollBehavior(to) {
    if (to.fullPath === "/") return { top: 0 }
    return {
      el: to.hash,
      top: 10,
      behavior: "smooth"
    }
  }
})

export default router
