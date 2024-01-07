<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <!-- <h1 className="text-3xl font-bold underline">
    Hello 
  </h1> -->
</template>

<style scoped>

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
