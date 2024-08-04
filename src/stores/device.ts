import { defineStore } from 'pinia'

export const useDeviceStore = defineStore('device', {
  getters: {
    isMobile: () =>  typeof window !== "undefined" ? window.matchMedia('(max-width: 767px)').matches : false
  }
})
