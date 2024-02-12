<!-- <template>
    <div>
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        @click="activeTab(index)"
        :class="{
          'text-black font-bold py-2 px-4 border-b-2': index === activeIndex,
          'border-transparent hover:border-gray-500 transition duration-300': index !== activeIndex,
          'px-4 py-2 cursor-pointer inline-block': true
        }"
      >
        {{ item }}
      </div>
      <div class="tab-content mt-4">
        {{ selectedTabContent }}
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue'
  const props = defineProps(['menuItems'])
  const emits = defineEmits()
  const activeIndex = ref(0)
  const activeTab = (index) => {
    activeIndex.value = index
    emits('activeTab', index)
  }
  </script> -->
  <!-- <template>
    <div class="menu-bar">
      <button
        v-for="item in items"
        :key="item"
       
        @click="activeTab(index)"
        :class="{
          'text-black font-bold py-2 px-4 border-b-2': index === activeIndex,
          'border-transparent hover:border-gray-500 transition duration-300': index !== activeIndex,
          'px-4 py-2 cursor-pointer inline-block': true
        }"
      >
        {{ item }}
      </button>
    </div>
  </template>
  <script setup>
  defineProps({
    items: {
      type: Array,
      required: true,
    },
    activeItem: {
      type: String,
      required: true,
    },
  });
  const activeTab = (index) => {
    activeIndex.value = index
    emits('activeTab', index)
  }
  </script> -->
  
<template>
    <div class="flex">
      <div class="flex">
        <span
          v-for="tab in names"
          :key="tab.name"
          :class="['px-4 py-2 cursor-pointer', {'bg-blue-500 text-white': tab.name === selectedTab}]"
          @click="clickOnTab(tab.name)"
        >{{tab.label}}</span>
      </div>
      <div class="ml-4">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    names: {
      type: Array,
      required: true
    },
    selectedTab: {
      type: String,
      required: false
    }
  })

  const emit = defineEmits(['changeTab'])

  const clickOnTab = (tabName) => {
    emit('changeTab', tabName)
  }
</script>



<!-- <template>
  <div class="tab-nav">
    <span
      v-for="tab in names"
      :key="tab.name"
      :class="['tab-nav__item', {'selected': tab.name === selectedTab}]"
      @click="clickOnTab(tab.name)">{{tab.label}}
    </span>
  </div>
  <div class="tab-content">
    <slot/>
  </div>
</template> -->

<!-- <template>
    <div class="flex space-x-4 mb-4">
      <span
        v-for="tab in names"
        :key="tab.name"
        :class="[
          'px-4 py-2 rounded-full border cursor-pointer',
          tab.name === selectedTab
            ? 'bg-primary text-white border-primary'
            : 'bg-white text-primary border',
          'hover:bg-primary-hover hover:text-white'
        ]"
        @click="clickOnTab(tab.name)"
      >
        {{ tab.label }}
      </span>
    </div> -->

