<template>
    <div v-if="userData" class="bg-white overflow-hidden shadow rounded-lg border">
      <div class="px-4 py-1 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          User Profile
          <template v-if="editMode">
            <p>Name: <input v-model="userData.name" class="border rounded p-1 w-full" @blur="saveChanges"></p>
            <p>Username: <input v-model="userData.username" class="border rounded p-1 w-full" @blur="saveChanges"></p>
            <p>Email: <input v-model="userData.email" class="border rounded p-1 w-full" @blur="saveChanges"></p>
           
          </template>
          <template v-else>
            <p>{{ userData.name }}</p>
          </template>
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          This is some information about the user.
        </p>
        <img class="max-w-16" src="@/assets/usertou.png" alt="">
        <button @click="toggleEditMode" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          {{ editMode ? 'Cancel' : 'Edit' }}
        </button>
        <button @click="deleteUser" class="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Delete User
        </button>
      </div>
      
    </div>
    <div v-else>
      No user data available.
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
  const userData = ref(JSON.parse(localStorage.getItem('userData')) ?? null);
  const editMode = ref(false);
  const saveChanges = () => {
    localStorage.setItem('userData', JSON.stringify(userData.value));
  };
  const deleteUser = () => {
    localStorage.removeItem('userData');
    userData.value = null;
  };
  const toggleEditMode = () => {
    editMode.value = !editMode.value;
  };
  </script>