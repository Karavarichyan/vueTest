
<template>

    <div class="w-full min-h-screen flex flex-wrap items-center">
        <div class="flex-1 bg-gray-100 min-h-screen flex items-center ">
            <div class="w-full px-20">
                <h1 class=" font-bold  text-sky-950  min-h-20 text-5xl font-monseerat" >PLAYGROUND</h1>
                <img class="flex-none w-800 h-900 " src="@/assets/welcome.png" alt="">
                
            </div>
            
        </div>
        <div class="flex-1 ml-[80px] ">
            <form @submit.prevent>
                <label for="fname" class="text-xl font-bold  text-sky-950  w-350 h-370; py-8 ">Login</label><br>
                <input type="email" placeholder="Enter your email" class="max-w-sm my-6  border-b-2 border-color: rgb(203 213 225); w-full ">
                <button id="Login" type="submit" class="h-[40px] my-4 rounded-lg min-w-44 bg-cyan-950 py-3 text-center text-white ml-[200px] font-serif ">SEND CODE</button>
              </form> 
              <!-- <OtpView v-if="showOtpInput" :length="6" @entered="handleEnteredOtp" /> -->
            
        </div>
       <div class="ml-[450px] justify-center text-slate-400 font-serif h-[30px] mt-[-30px]">© 2022 Playground. All rights reserved.</div>
    </div>
    
  
 </template>
 <script>
// import OtpView from "@/OtpView.vue";
// import OtpView from "@/components/OtpView.vue";
// import OtpView from "./OtpView.vue";



// export default {
//   data() {
//     return {
//       email: "",
//       showOtpInput: false,
//     };
//   },
//   methods: {
//     submitForm() {
//      
//       console.log("Form submitted with email:", this.email);
//       
//       this.showOtpInput = true;
//     },
//     handleEnteredOtp(otp) {
//       
//       console.log("Entered OTP:", otp);
//     },
//   },
//   components: {
//    
//     OtpView,
//   },
// };
</script>