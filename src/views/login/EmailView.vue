<template>
  
    <div class="w-1/2 ml-28	">
      
        <label for="fname" class=" text-xl leading-8	font-medium text-indigo-800	 w-350 h-370; py-8">Login</label><br />
        <BaseInput @set-value="setValue" type="email" class="number-class"/>
        <!-- <p>{{ email }}</p> -->
       
        <p v-if="!startValidation && email.length"> invalid </p>
        <BaseButton  :processing="false" @click="sendCode" :disabled="!email" class="h-[40px] my-4 rounded-lg min-w-44 bg-blue-900  items-center text-white ml-[200px] font-roboto ">SEND CODE</BaseButton>
        <!-- <p>{{x}}</p> -->
        <!-- <RouterLink to="/otp">About</RouterLink> -->
    </div>
</template>
<script setup>

const sendCode = () => {
  if (!email.value.length) return;
  // sendCode:{ path: '/:otp' },
  console.log("fdasfas");
  startValidation.value = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
}
// methods: {
//     goToAboutPage() {
//       this.$router.push("/about");
//     },
//   },
const startValidation = ref(false);
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';
import {  ref } from 'vue';
const email = ref("");
const setValue = (value) => {
  email.value = value
};
// const x = 'invalid emailll'

// const IsValidEmail = computed(() => {
  
// return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
  
// });

</script>