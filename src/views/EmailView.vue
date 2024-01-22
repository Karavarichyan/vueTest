<template>
  <form @submit.prevent>
    <label for="fname" class="text-xl font-bold text-sky-950 w-350 h-370; py-8">Login</label><br />
    <input
      type="email"
      placeholder="Enter your email"
      class="max-w-sm my-6 border-b-2 border-color: rgb(203 213 225); w-full"
    />
    <button
      id="Login"
      type="submit"
      class="h-[40px] my-4 rounded-lg min-w-44 bg-cyan-950 py-3 text-center text-white ml-[200px] font-serif"
    >
      SEND CODE
    </button>
  </form>
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
