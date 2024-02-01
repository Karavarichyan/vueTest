<!-- <template>
    <div>
      <h1>Your Otp Component</h1>
      <div>
        <pre>{{ formattedUser }}</pre>
      </div>
    </div>
  </template> -->
  <!-- <template>
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold text-center"> OTP </h1>
      <div class="bg-gray-200 p-4 rounded-md mt-4">
        <pre class="text-sm overflow-x-auto">{{ formattedUser }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null
      };
    },
    created() {
      
      const userString = this.$route.query.user;
      
      
      this.user = JSON.parse(userString);
    },
    computed: {
      formattedUser() {
      
        return JSON.stringify(this.user, null, 2);
      }
    }
  };
  </script>
   -->


   <!-- <template>
    <div>
      <h1>User Information</h1>
      <div v-if="userData">
        <p>Email: {{ userData.email }}</p>
        
      </div>
      <div v-else>
        No user data available.
      </div>
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from "vue";
  const userData = ref(null);
  onMounted(() => {
    // 
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      userData.value = JSON.parse(storedData);
    }
  });
  </script> -->

<template>
  <div>
    <h1>User Information</h1>
    <div v-if="userData">
      <p>Email: {{ userData.email }}</p>
      <p>Name: {{ userData.name }}</p>
      <p>Username: {{ userData.username }}</p>
      <p>Address: {{ userData.address.suite }}, {{ userData.address.street }}, {{ userData.address.city }}, {{ userData.address.zipcode }}</p>
      <p>Phone: {{ userData.phone }}</p>
      <p>Website: {{ userData.website }}</p>
      <p>Company: {{ userData.company.name }} - {{ userData.company.catchPhrase }}</p>
    </div>
    <div v-else>
      No user data available.
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const userData = ref(null);
onMounted(() => {
  // Получение данных из локального хранилища при загрузке страницы
  const storedData = localStorage.getItem('userData');
  if (storedData) {
    userData.value = JSON.parse(storedData);
  }
});
</script>
