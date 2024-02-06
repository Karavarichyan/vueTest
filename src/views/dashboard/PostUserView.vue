<template>
  <div class="ml-16 fixed top-0 left-0 right-0 bg-white z-50 flex justify-center space-x-4">
    <button
      @click="showAll"
      class="text-black font-bold py-2 px-4 border-b-2 border-transparent hover:border-gray-500 transition duration-300"
    >
      aaall
    </button>
    <button
      @click="showOnli"
      class="text-black font-bold py-2 px-4 border-b-2 border-transparent hover:border-gray-500 transition duration-300"
    >
      Onli
    </button>
  </div>
  <div class="ml-16 mt-16">
    <AllUserInfoViewCVue v-if="showAllInfo" />
    <OnliUserInfoViewC v-if="showOnliInfo" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
//   import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import AllUserInfoViewCVue from '@/components/AllUserInfoViewC.vue'
import OnliUserInfoViewC from '@/components/OnliUserInfoViewC.vue'
//   const { ref } = Vue;
const showAllInfo = ref(false)
const showOnliInfo = ref(false)
const showAll = () => {
  showAllInfo.value = true
  showOnliInfo.value = false
}
const showOnli = () => {
  showAllInfo.value = false
  showOnliInfo.value = true
}
</script>
