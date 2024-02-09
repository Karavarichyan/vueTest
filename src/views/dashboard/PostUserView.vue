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
    </div>
  </div>
</template> -->
<!-- <script setup>
import { ref } from 'vue'
import MenuSection from '@/components/MenuSection.vue'
const menulist = ref([
  { label: 'alo 1', content: ' for alo   1' },
  { label: 'blo 1', content: ' for blo   1' }
])
</script> -->
<!-- <script setup>
import TabsWrapper from '@/components/TabsWrapper.vue'
import TabItem from '@/components/TabItem.vue'
</script>

<template>
    <TabsWrapper>
        <TabItem title="Tab 1">Content from Tab 1</TabItem>
        <TabItem title="Tab 2">Content from Tab 2 Lorem ipsum dolor sit amet.</TabItem>
        <TabItem title="Tab 3">Content from Tab 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, ipsa.</TabItem>
        <TabItem title="Tab 4">Content from Tab 4 Lorem ipsum dolor sit amet.</TabItem>
        <TabItem title="Tab 5">Content from Tab 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores ab minima. Facere mollitia tempora soluta, commodi beatae sit. Distinctio.</TabItem>
        <TabItem title="Tab 6">Content from Tab 6</TabItem>
    </TabsWrapper>
</template> -->

<template>
    <div>
        <MenuSection>

        </MenuSection>
      <div
        v-for="(item, index) in menulist"
        :key="index"
        @click="activateItem(index)"
        :class="{
          'text-black font-bold py-2 px-4 border-b-2': index === activeIndex,
          'border-transparent hover:border-gray-500 transition duration-300': index !== activeIndex,
          'px-4 py-2 cursor-pointer inline-block': true
        }"
      >
        {{ item.label }}
      </div>
      <div class="tab-content mt-4">
        <p v-if="activeIndex === 0">hiii</p>
        <p v-else-if="activeIndex === 1">Hello</p>
        
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue'
  import MenuSection from '@/components/MenuSection.vue'
  const menulist = ref([
    { label: 'alo 1', content: 'content for alo 1' },
    { label: 'blo 1', content: 'content for blo 1' }
  ])
  const activeIndex = ref(0)
  const activateItem = (index) => {
    activeIndex.value = index
  }
  </script>