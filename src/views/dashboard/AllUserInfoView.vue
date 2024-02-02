<!-- InfoPost.vue -->
<template>
    <div class="container mx-auto mt-8">
        <h1 class="text-3xl font-bold mb-4">Posts Information</h1>
        <ul>
          <li v-for="post in posts" :key="post.id" class="mb-4 p-4 bg-gray-100 rounded-lg">
            <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
            <p class="text-gray-700">{{ post.body }}</p>
          </li>
        </ul>
      </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const posts = ref([]);
  
  onMounted(async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts.value = response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  });
  </script>
  