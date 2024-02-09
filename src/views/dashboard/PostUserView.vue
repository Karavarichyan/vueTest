<!-- <template>
  <div class="ml-16 fixed top-0 left-0 right-0 bg-white z-50 flex justify-center space-x-4"> -->
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
       
    <!-- <div>
      <MenuSection :menulist="menulist" />
    </div> -->
    <!-- <div>
        <MenuSection
        :items="menuItem"
        :active-item="activTab"
        @click="selectCurrenTab"
        />
        <div v-if="activTab ==='All'">
            1
        </div>
        <div v-else-if="activTab ==='Onli'">2
        </div>

    </div>
  </div> -->
<!-- </template> -->
<!-- <script setup>
import { ref } from 'vue'
import MenuSection from '@/components/MenuSection.vue'
// const menulist = ref([
//   { label: 'alo 1', content: ' for alo   1' },
//   { label: 'blo 1', content: ' for blo   1' }
// ])
// activTab: ['All']
// menuItem: ['All','Onli']
</script> -->
<template>
    <div>
        
      <MenuSection :items="menuItems" :active-item="activeTab" @click="selectCurrentTab" />
      <div ursor-pointe v-if="activeTab === 'ALL'">
        <span cursor-pointe @click="test">ALL </span>
        <span cursor-pointer @click="testt"> ONLY</span>
      </div>
      
      <div class="my-1.5" v-else-if="activeTab === 'ONLI'">
        <AllUserInfoViewC/>
      </div>
      <div class="my-1.5" v-else-if="activeTab === 'ONLI USER'">
        <OnliUserInfoViewC/>
      </div>
      
      
    </div>
  </template>
  <script setup>
  import MenuSection from '@/components/MenuSection.vue'
  import AllUserInfoViewC from '@/components/AllUserInfoViewC.vue';
  import OnliUserInfoViewC from '@/components/OnliUserInfoViewC.vue';
  import { ref } from 'vue';
  const activeTab = ref('ALL');
  const menuItems = ['ALL', 'ONLI', 'ONLI USER'];
  function test() {
    activeTab.value = 'ONLI';
  }
  function testt() {
    activeTab.value = 'ONLI USER';
  }
  
  function selectCurrentTab(data) {
    activeTab.value = data;
  }
  </script>