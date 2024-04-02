<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import NavButton from '@/components/NavButton.vue'

const isOpen = ref(false)
const script = ref(null as HTMLScriptElement | null)

function setIsOpen(value: boolean) {
  isOpen.value = value

  if (value) {
    script.value = document.createElement('script')
    script.value.async = true
    script.value.src = '//widget.simplybook.it/v2/widget/widget.js'
    script.value.onload = () => {
      new SimplybookWidget({
        widget_type: 'iframe',
        url: 'https://lapetiteplante.simplybook.it',
        theme: 'default',
        theme_settings: {
          timeline_hide_unavailable: '1',
          hide_past_days: '0',
          timeline_show_end_time: '0',
          timeline_modern_display: 'as_slots',
          sb_base_color: '#345c3c',
          display_item_mode: 'list',
          booking_nav_bg_color: '#c5edb0',
          body_bg_color: '#f7f7f7',
          sb_review_image: '25',
          sb_review_image_preview:
            '\/uploads\/petiteplante\/image_files\/preview\/11a523f3dba4ff9ffd71354174448755.jpg',
          dark_font_color: '#474747',
          light_font_color: '#ffffff',
          btn_color_1: '#26632b',
          sb_company_label_color: '#1c703b',
          hide_img_mode: '0',
          show_sidebar: '1',
          sb_busy: '#cbd1c5',
          sb_available: '#d6ebff'
        },
        timeline: 'modern',
        datepicker: 'top_calendar',
        is_rtl: false,
        app_config: {
          clear_session: 0,
          allow_switch_to_ada: 0,
          predefined: { provider: '3' }
        },
        container_id: 'sbw_mbg5el'
      })
    }
    document.head.appendChild(script.value)
  } else {
    document.head.removeChild(script.value as HTMLScriptElement)
    script.value = null
  }
}
</script>

<template>
  <nav-button class="text-base m-2 p-2 uppercase shadow-md" @click="setIsOpen(true)" dark>
    Prendre rendez-vous
  </nav-button>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog @close="setIsOpen">
      <!-- The backdrop, rendered as a fixed sibling to the panel container -->
      <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/30" />
      </TransitionChild>

      <!-- Full-screen scrollable container -->
      <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95"
      >
        <div
          class="fixed inset-0 mt-20 md:w-4/5 md:h-4/5 m-auto overflow-y-auto bg-[#f7f7f7] rounded"
        >
          <!-- Close button -->
          <div class="flex justify-end z-20">
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-[#c5edb0] hover:text-gray-800 rounded-full text-sm w-12 h-12 ms-auto inline-flex justify-center items-center"
              data-modal-hide="default-modal"
              @click="setIsOpen(false)"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Container to center the panel -->
          <div class="flex min-h-full items-center justify-center p-4 z-10 overflow-hidden">
            <DialogPanel class="w-full rounded bg-white">
              <div id="sbw_mbg5el" class="w-full go-up" ref="widgetContainerRef"></div>
            </DialogPanel>
          </div>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>
.go-up {
  margin-top: -100px;
}
</style>
