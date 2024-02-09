<template>
  <div class="ml-16 fixed top-0 left-0 right-0 bg-white z-50 flex justify-center space-x-4">
    <!-- <button
      @click="showAll"
      class="text-black font-bold py-2 px-4 border-b-2 border-transparent hover:border-gray-500 transition duration-300"
    >
      aaall
    </button> -->
    <!-- <button
      @click="showOnli"
      class="text-black font-bold py-2 px-4 border-b-2 border-transparent hover:border-gray-500 transition duration-300"
    >
      Onli
    </button> -->

  

    <div>
      <MenuSection :menulist="menulist"  />
    </div>
    
  </div>

</template>
<script setup>
import { ref } from 'vue'
import MenuSection from '@/components/MenuSection.vue'
const menulist = ref([
  { label: 'alo 1', content: ' for alo   1' },
  { label: 'blo 1', content: ' for blo   1' },
 
])


</script>

