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
  <template>
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
  </script>