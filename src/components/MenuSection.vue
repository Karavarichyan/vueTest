<template>
  <div>
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
      {{ selectedTabContent }}
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue'
const props = defineProps(['menulist'])
const emits = defineEmits()
const activeIndex = ref(0)
const activateItem = (index) => {
  activeIndex.value = index
  emits('activate', index)
}
const selectedTabContent = computed(() => {
  return menulist[activeIndex.value]?.content || ''
})
</script>