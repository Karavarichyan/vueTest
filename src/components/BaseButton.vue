<template>
  <button class="">
    <span v-if="processing" >Loading...</span>
    <slot />
  </button>
</template>
<script setup>
// import { __VLS_template } from './__VLS_template'

defineProps({
  processing: {
    type: Boolean,
    required: false,
    default: false,
   
    
    }
})
</script>
