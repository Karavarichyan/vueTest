<!-- <template>
  <p>new   prpsss: {{ menu }}</p>
  
</template>
<script setup>
const props = defineProps({
  menu: String
})

console.log(props.menu)
</script> -->

<!-- <template>
    <div>
      <button @click="toggleMenu">{{ buttonLabel }}</button>
      <ul v-if="isMenuVisible" @click="handleItemClick">
        <li v-for="item in menuItems" :key="item.id">{{ item.label }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const props = defineProps(['buttonLabel', 'menuItems']);
  const isMenuVisible = ref(false);
  
  const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
  };
  
  const handleItemClick = () => {
    isMenuVisible.value = false;
  };
  </script> -->

<!-- Menu.vue -->
<!-- Menu.vue -->
<!-- <template>
    <div>
      <button @click="toggleMenu">{{ buttonLabel }}</button>
      <ul v-if="isMenuVisible" @click="handleItemClick">
        <li v-for="item in menuItems" :key="item.id">
          <button @click="handleButtonClick(item)">{{ item.label }}</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const props = defineProps(['buttonLabel', 'menuItems']);
  const isMenuVisible = ref(false);
  
  const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
  };
  
  const handleItemClick = () => {
    isMenuVisible.value = false;
  };
  
  const handleButtonClick = (item) => {
    console.log(`Button "${item.label}" clicked`);
    isMenuVisible.value = false;
  };
  </script> -->
<!-- <template>
    <div>
      <button v-for="button in allButtons" :key="button.id" @click="handleButtonClick(button)">
        {{ button.label }}
      </button>
      <ul v-if="isMenuVisible" @click="handleItemClick">
        <li v-for="item in menuItems" :key="item.id">
          <button @click="handleButtonClick(item)">{{ item.label }}</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const props = defineProps(['menuItems']);
  const isMenuVisible = ref(false);
  
  const allButtons = [
    { id: 0, label: "Show Menu" },
    { id: 1, label: "Button 1" },
    { id: 2, label: "Button 2" },
    ...props.menuItems
  ];
  
  const handleButtonClick = (item) => {
    
    console.log(`Button "${item.label}" clicked`);
    if (item.id === 0) {
      isMenuVisible.value = !isMenuVisible.value;
    } else {
      // Дополнительная логика для других кнопок
    }
  };
  
  const handleItemClick = () => {
    isMenuVisible.value = false;
  };
  </script> -->

<!-- <template>
  <div
    :class="{
      flex: variant === 'horizontal'
    }"
  >
    <ul
      :class="{
        flex: variant === 'vertical'
      }"
    >
      <li v-for="(tab, index) in tabList" :key="index">
        <label :for="`${_uid}${index}`" v-text="tab" />
        <input
          :id="`${_uid}${index}`"
          type="radio"
          :name="`${_uid}-tab`"
          :value="index + 1"
          v-model="activeTab"
        />
      </li>
      <button
        :id="`${_uid}${index}`"
        type="submit"
        :name="`${_uid}-tab`"
        :value="index + 1"
        
      >seve</button>
    </ul>

    <template v-for="(tab, index) in tabList">
      <div :key="index" v-if="index + 1 === activeTab">
        <slot :name="`tabPanel-${index + 1}`" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      required: true
    },
    variant: {
      type: String,
      required: false,
      default: () => 'vertical',
      validator: (value) => ['horizontal', 'vertical'].includes(value)
    }
  },
  data() {
    return {
      activeTab: 1
    }
  }
}
</script> -->

<!-- <template>
    <div>
        <div v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)" :class="{ 'bg-blue-500': index === selectedTabIndex, 'text-white': index === selectedTabIndex }" class="px-4 py-2 cursor-pointer inline-block border border-gray-300 rounded-tl rounded-tr">
          {{ tab.label }}
        </div>
        <div class="tab-content mt-4">
          {{ selectedTabContent }}
        </div>
      </div>
  </template>
  
  <script setup>
import { ref, computed } from 'vue';

const selectedTabIndex = ref(0);

const tabs = ref([
  { label: 'tab 1', content: 'this is frst' },

]);

const selectedTabContent = computed(() => {
  return tabs.value.length > 0 ? tabs.value[selectedTabIndex.value].content : '';
});

const selectTab = (index) => {
  selectedTabIndex.value = index;
};

for (let i = 2; i <= 8; i++) {
  tabs.value.push({ label: `tab ${i}`, content: `menu ${i}` });
}
  </script>
   -->
<template>
    <!-- <div>
        <div v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)" :class="{ 'bg-blue-500': index === selectedTabIndex, 'text-white': index === selectedTabIndex }" class="px-4 py-2 cursor-pointer inline-block border border-gray-300 rounded-tl rounded-tr">
          {{ tab.label }}
        </div>
        <div class="tab-content mt-4">
          {{ selectedTabContent }}
        </div>
      </div>      -->
      <div>
        <div v-for="(tab, index) in menulist" :key="index" @click="selectTab(index)" :class="{ 'bg-blue-500': index === selectedTabIndex, 'text-white': index === selectedTabIndex }" class="px-4 py-2 cursor-pointer inline-block border border-gray-300 rounded-tl rounded-tr">
          {{ tab.label }}
        </div>
        <div class="tab-content mt-4">
          {{ selectedTabContent }}
        </div>
      </div>
      
  
</template>
<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  menulist: Array,

});

const emits = defineEmits();

const selectedTabContent = computed(() => {
  if (props.menulist && props.menulist[props.selectedTabIndex]) {
    return props.menulist[props.selectedTabIndex].content;
  }
  return '';  
});

const selectTab = (index) => {
  emits('update:selectedTabIndex', index);
};
</script>