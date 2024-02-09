<template>
    <div @click="$emit('click')">
      This is my button
      <div>
        <button
          class="rounded p-2"
          :class="active ? 'bg-blue-700 text-white' : 'border border-blue-700 text-blue-600'"
        >
          <slot />
        </button>
      </div>
    </div>
  </template>
  <script setup>
  defineProps({
    active: {
      type: Boolean
    }
  })
  defineEmits(['click'])
  </script>