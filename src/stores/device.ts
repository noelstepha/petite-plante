import { defineStore } from 'pinia'

export const useDeviceStore = defineStore('device', {
  getters: {
    isMobile: () =>  window.matchMedia('(max-width: 767px)').matches
  }
})
