<template>
  <div class="ml-16 fixed top-0 left-0 right-0 bg-white z-50 flex justify-center space-x-4">
    <!-- <button
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
    </button> -->

    <!-- <h1>Component Prop Demo</h1> -->
	<!-- <MenuSection menu="++++I am  component " /> -->
    <!-- <div>
        <MenuSection buttonLabel="Show Menu" :menuItems="menuItems" />
      </div> -->

      <div>
        <MenuSection :tabList="tabList">
          <template v-slot:tabPanel-1> Content 1 </template>
          <template v-slot:tabPanel-2> Content 2 </template>
          <template v-slot:tabPanel-3> Content 3 </template>
          <template v-slot:tabPanel-4> Content 4 </template>
        </MenuSection>
      </div>
  </div>
</template>
<script>
import MenuSection from '@/components/MenuSection.vue';

export default {
  components: {
    MenuSection,
  },
  
  data() {
    return {
      tabList: ["Tab 1", "Tab 2", "Tab 3", "Tab 4"],
    };
  },
};
</script>
<!-- 
<script setup>
import { ref } from 'vue'
import MenuSection from '@/components/MenuSection.vue';
const menuItems = [
  { id: 1, label: "Item 1" },
//   { id: 2, label: "Item 2" },
//   { id: 3, label: "Item 3" }
];

for (let i = 1; i <= 10; i++) {
  menuItems.push({ id: i, label: `Item ${i}` });
}
// import { ref } from 'vue';
</script> -->

