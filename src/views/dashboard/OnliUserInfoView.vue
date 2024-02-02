<template>
    <div class="container mx-auto mt-8">
      <h1 class="text-3xl font-bold mb-4">Users Posts Information</h1>
      <ul>
        <li v-for="post in userPosts" :key="post.id" class="mb-4 p-4 bg-gray-100 rounded-lg">
          <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
          <p class="text-gray-700">{{ post.body }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const userPosts = ref([]);
  
  onMounted(async () => {
    try {
      //  enter
      const user = JSON.parse(localStorage.getItem('userData'));
  
      //  ID
      if (user && user.id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        userPosts.value = response.data;
      } else {
        console.error('User information not found in id .');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  </script>
  