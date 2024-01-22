<template>
  <div class="w-1/2 ml-28 min-w-96">
    <div class="text-xl leading-8 font-medium text-indigo-800 w-350 h-370; py-8">Login</div>
    <div class="text-black mt-3 pb-4 text-sm font-roboto">
      To finalize your verification, please enter the code that has been sent to your email address / SMS
    </div>
    <div ref="container" class="flex gap-4 items-center">
      <input
        v-for="n in length"
        :key="n"
        @keyup="(e) => handleEnter(e, n - 1)"
        v-model="otpArray[n - 1]"
        type="text"
        maxlength="1"
        class="border-b-4 w-10 p-2 ml-3 text-center outline-0"
      />
      <button @click="clearFields" class="pb-6 py-1 text-slate-400 rounded-md">
        <img class="max-w-5 pt-4" src="@/assets/icinx.png" alt="">
      </button>
    </div>

    <BaseButton
      :processing="false"
      @click="sendCode"
      :disabled="!otpProps"
      class="h-[40px] my-4 rounded-lg min-w-20 bg-blue-900 items-center text-white ml-[250px] font-serif:roboto"
    >SUBMIT</BaseButton>

    <div class="text-slate-400 mt-3 pb-4 text-xs">
      If you do not receive the confirmation message within a few minutes, please check your Spam or Bulk Email folder
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
import { ref, defineProps, defineEmits } from 'vue'

const otpProps = defineProps({
  length: {
    type: Number,
    default: 6
  }
})

const otpArray = ref([])

const container = ref()

const otpEmit = defineEmits(['entered'])

function onMounted() {
  for (let i = 0; i < otpProps.length; i++) {
    otpArray.value[i] = null
  }
}

function handleEnter(e, i) {
  const children = container.value.children
  const keypressed = e.key

  if (i > 0 && (keypressed === 'Backspace' || keypressed === 'Delete')) {
    otpArray.value[i] = null
    setTimeout(() => {
      children[i - 1].focus()
    }, 100)
  } else {
    const matched = keypressed.match(/^[0-9]$/)
    if (!matched) {
      otpArray.value[i] = null
      return
    } else if (i < otpProps.length - 1) {
      setTimeout(() => {
        children[i + 1].focus()
      }, 100)
    }
    checkOTP()
  }
}

function clearFields() {
  for (let i = 0; i < otpProps.length; i++) {
    otpArray.value[i] = null
  }
}

function checkOTP() {
  const children = container.value.children
  let flag = true
// lenght-1 er 
  for (let i = 0; i < otpProps.length ; i++) {
    if (otpArray.value[i] == null) {
      children[i].classList.add('border-blue-800')
      flag = false
    } else {
      children[i].classList.remove('border-red-500')
    }
  }

  if (flag) {
    const enteredOTP = otpArray.value.join('')
    otpEmit('entered', enteredOTP)
    console.log('Entered OTP:', enteredOTP)
  }
}

function sendCode() {
  console.log('Sending code...');
}

onMounted()
</script>
