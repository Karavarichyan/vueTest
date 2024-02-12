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
<!-- <template>
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
  <script setup> -->
<!-- import MenuSection from '@/components/MenuSection.vue'
//   import AllUserInfoViewC from '@/components/AllUserInfoViewC.vue';
//   import OnliUserInfoViewC from '@/components/OnliUserInfoViewC.vue';
//   import { ref } from 'vue';
//   const activeTab = ref('ALL');
//   const menuItems = ['ALL', 'ONLI', 'ONLI USER'];
//   function test() {
//     activeTab.value = 'ONLI';
//   }
//   function testt() {
//     activeTab.value = 'ONLI USER';
//   }
  
//   function selectCurrentTab(data) {
//     activeTab.value = data;
//   }
//   </script>-->
<!-- <template> 
    <div>
      <MenuSectionVue :items="menuItems" :active-item="activeTab" @click="updateActiveTab" />
      <div class="content">
        <template v-if="activeTab === 'Alo'">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </template>
        <template v-else-if="activeTab === 'Blo'">
          <h1 class="text-blue-500">materal</h1>
          <p>ura!</p>
        </template>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue';
  import MenuSectionVue from '@/components/MenuSection.vue'
  const activeTab = ref('Alo');
  const menuItems = ['Alo', 'Blo', 'mek'];
  const updateActiveTab = (item) => {
    activeTab.value = item;
  };
  </script> -->


<template>
    <div class="flex flex-col">
      <div class="w-full border-b border-gray-200 p-4 flex justify-between">
        <MenuSectionVue
          :names="tabs"
          :selectedTab="selectedTab"
          @changeTab="changeTab"
        />
      </div>
      <div class="p-6">
        <div class="my-6" v-if="selectedTab === 'All'"><br>This is information for All users. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, a?</div>
        <div class="my-6" v-if="selectedTab === 'Only'"><br>This is information for Only users Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptatem..</div>
        <div class="my-6" v-if="selectedTab === 'React'"><br>This is information for React users Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aspernatur provident consectetur recusandae iure quas!.</div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue'
  import MenuSectionVue from '@/components/MenuSection.vue'
  const tabs = [
    { name: 'All', label: 'All Users' },
    { name: 'Only', label: ' Only' },
    { name: 'React', label: ' React' }
  ]
  const selectedTab = ref('All')
  
  const changeTab = (tabName) => {
    selectedTab.value = tabName
  }
  </script>