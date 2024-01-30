<template>
  <div class="w-1/2 ml-28">
    <input type="email" v-model="email" placeholder="enter email"  class="outline-0 max-w-sm my-6 border-b-2 border-color: rgb(203 213 225); w-full"/>
    <button @click="onCreatePost"
    class="h-[40px] my-4 rounded-lg min-w-44 bg-blue-900 items-center text-white ml-[160px] font-roboto"
    >create post</button>
    <div v-if="isSuccess">
      email vailid !
    </div>
    <div v-else-if="errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import axios from 'axios';
const email = ref('');
const isSuccess = ref(false);
const errorMessage = ref('');
const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email.value && emailRegex.test(email.value);
});
async function onCreatePost() {
  if (isValidEmail.value) {
    try {
      const enteredEmail = email.value;
      const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
        params: {
          email: enteredEmail,
        },
      });
      if (response.data.length) {
        const user = response.data[0];
        isSuccess.value = true;
        errorMessage.value = ''; 
      } else {
        errorMessage.value = 'this email does not exist';
      }
    } catch (error) {
      errorMessage.value = 'this email does not exist in server';
      console.error('error:', error);
    }
  } else {
    errorMessage.value = 'Incorrect E-Mail Address. Please enter a valid email address';
  }
}
</script>





