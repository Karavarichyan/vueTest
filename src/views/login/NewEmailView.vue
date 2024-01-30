<template>
    <div class="text-xl w-1/2 ml-28 leading-8 font-medium text-indigo-800 w-350 h-370 py-8">
      <div>
        <p>Email input</p>
        {{ email }}
      </div>
      <div>
        <p>ssss</p>
        {{ value }}
      </div>
      <form @submit.prevent="onCreatePost">
        <div>
          <input type="email" v-model="email" placeholder="Enter email" class="outline-0 max-w-sm my-6 border-b-2 border-color: rgb(203 213 225); w-full" />
        </div>
        <div class="mt-3">
          <button type="submit" class="btn btn-primary" :disabled="!isValidEmail">
            Create Post
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        isSuccess: false,
      };
    },
  
    computed: {
      isValidEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return this.email && emailRegex.test(this.email);
      },
    },
  
    methods: {
      onCreatePost() {
        if (this.isValidEmail) {
          const enteredEmail = this.email;
  
          axios
            .get('https://jsonplaceholder.typicode.com/users', {
              params: {
                email: enteredEmail,
              },
            })
            .then((response) => {
              
              const userWithEmail = response.data.find(user => user.email === enteredEmail);
  
              if (userWithEmail) {
                this.isSuccess = true;
                console.log('Email found in server data:', userWithEmail);
              } else {
                console.log('Email not found in server data.');
              }
            })
            .catch(error => {
              console.error('Error fetching data from server:', error);
            });
        } else {
          console.log('Invalid email. Please enter a valid email address.');
        }
      },
    },
  };
  </script>
  