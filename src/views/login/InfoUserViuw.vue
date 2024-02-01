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
  <!-- <div>
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
  </div> -->
  <!-- test tailwind -->
  <div v-if="userData" class="bg-white overflow-hidden shadow rounded-lg border">
    <div class="px-4 py-1 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
            User Profile
            <p>{{ userData.name }}</p>
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
        </p>
        <img class="max-w-16" src="@/assets/usertou.png" alt="">
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <p>{{ userData.name }}</p>
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                  Username
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p> {{ userData.username }}</p>
              </dd>
          </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <p>{{ userData.email }}</p>
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Phone number
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <p>{{ userData.phone }}</p>
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <p>{{ userData.address.suite }}, {{ userData.address.street }}, <br> {{ userData.address.city }}, {{ userData.address.zipcode }}</p>

                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                  Website
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p> {{ userData.website }}</p>
              </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Company
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p>{{ userData.company.name }} - <br>{{ userData.company.catchPhrase }}</p>

            </dd>
        </div>
        
        </dl>
    </div>
</div>
<div v-else>
  No user data available.
</div>
</template>
<script setup>
import { ref } from "vue";
const userData = ref(JSON.parse(localStorage.getItem('userData')) ?? null);
console.log(userData);
</script>
