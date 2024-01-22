import Input from 'postcss/lib/input';
<template>
  <div class="outline-0 max-w-sm my-6 border-b-2 border-color: rgb(203 213 225); w-full">
    <label v-if="label">{{ label }}</label>
    <input
      class="outline-0"
      :type="type"
      @input="inputChange($event)"
      :placeholder="placeholder"
    />
  </div>
</template>
<script setup>
const emit = defineEmits(["setValue"]);
defineProps({
  label: {
    type: [String, Boolean],
    default: false
  },
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: 'Enter your mail'
  }
})

const inputChange = (event) => {
  emit('setValue', event.target.value)
}
</script>
