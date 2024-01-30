<template>
  <div>
    <input type="email" v-model="email" placeholder="Введите адрес электронной почты" />
    <button @click="onCreatePost">Создать пост</button>
    <div v-if="isSuccess">
      Пользователь найден!
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
        errorMessage.value = ''; // Очистить все предыдущие ошибки
      } else {
        errorMessage.value = 'Пользователь не найден';
      }
    } catch (error) {
      errorMessage.value = 'Ошибка при получении данных с сервера';
      console.error('Ошибка:', error);
    }
  } else {
    errorMessage.value = 'Неверный адрес электронной почты. Введите правильный адрес электронной почты.';
  }
}
</script>





