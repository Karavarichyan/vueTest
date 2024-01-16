<!-- <template>
    <h1>otp</h1>
     <RouterView />
    
    <div ref="container" class="w-1/2 m-4 ">
        <label for="fname" class="text-xl font-bold text-sky-950 w-350 h-370; py-8"> Login <br>
        <p class="text-black mt-3">To finalize your verification, please enter the code that has been sent to your email address / SMS <br></p>    
        <div ref="container" class="flex gap-4 items-center mt-6">
            <input v-for="n in length" :key="n" 
            @keyup="(e) => handleEnter(e, n-1)"
            v-model="otpArray[n-1]" type="text" maxlength="1" class="border rounded-md w-10 p-2 text-center" />
        </div> </label>
        <button
        id="Login"
        type="submit"
        class="h-[40px] my-4 rounded-lg min-w-40 bg-cyan-950 py-3 text-center text-white ml-[170px] font-serif"
      >
        SUBMIT
      </button>
      <p class="text-slate-400  h-10  mt-6">If you do not recive the confirmation message within a few minutes, please chek your Spam or buli E-Mail folder</p>
    </div>
  </template>
  
  <script setup>
  import {ref, onMounted} from "vue"
  const otpProps = defineProps({
    length: {
        type: Number,
        default: 6
    }
  })
  
  const otpArray = ref([])
  
  const container = ref()
  
  const otpEmit = defineEmits(['entered'])
  
  onMounted(() => {
    for(let i =0; i < otpProps.length; i++){
        otpArray.value[i] = null
    }
  })
  
  function handleEnter(e, i){
    const children = container.value.children
    const keypressed = e.key
  
   
    
  
    if(i > 0 && (keypressed==='Backspace' || keypressed==='Delete')){
        otpArray.value[i] = null
        setTimeout(() => {
            children[i-1].focus()
        }, 100)
    }
  
    else {
        const matched = keypressed.match(/^[0-9]$/)
        if(!matched){
            otpArray.value[i] = null
            return
        }
  
        else if(i < otpProps.length - 1){
            setTimeout(() => {
                children[i+1].focus()
            }, 100)
        }
        checkOTP()
    }
  }
  
  
  function checkOTP(){
     const children = container.value.children
  
     let flag = true
  
     for(let i=0; i < otpProps.length -1; i++){
        if(otpArray.value[i] == null)
        {
            children[i].classList.add('border-red-500')
            flag = false
        }
        else {
             children[i].classList.remove('border-red-500')
        }
     }
  
    if(flag)
    otpEmit('entered', otpArray.value.join(''))
  
  }
  
  
  
  </script>
   -->

   <template>
    
    <div class="ml-8">
      <div class="text-xl font-bold text-sky-950 w-350 h-370; py-8">Login</div>
      <div class="text-black mt-3 pb-4">
        To finalize your verification, please enter the code that <br> has been sent to your email address / SMS   
        
      </div>
    <div ref="container" class="flex gap-4 items-center">
        <input v-for="n in length" :key="n" 
        @keyup="(e) => handleEnter(e, n-1)"
        v-model="otpArray[n-1]" type="text" maxlength="1" class="border rounded-md w-10 p-2 text-center" />
    </div>
    <button
        id="Login"
        type="submit"
        class="h-[40px] my-4 rounded-lg min-w-40 bg-cyan-950 py-3 text-center text-white ml-[170px] font-serif"
      >
        SUBMIT
      </button>
      <div class="text-slate-400  h-10  mt-6">If you do not recive the confirmation message within a few <br> minutes, please chek your Spam or buli E-Mail folder</div>
  </div>
  </template>
  
  <script setup>
  import {ref, onMounted} from "vue"
  const otpProps = defineProps({
    length: {
        type: Number,
        default: 6
    }
  })
  
  const otpArray = ref([])
  
  const container = ref()
  
  const otpEmit = defineEmits(['entered'])
  
  onMounted(() => {
    for(let i =0; i < otpProps.length; i++){
        otpArray.value[i] = null
    }
  })
  
  function handleEnter(e, i){
    const children = container.value.children
    const keypressed = e.key
  
   
    
  
    if(i > 0 && (keypressed==='Backspace' || keypressed==='Delete')){
        otpArray.value[i] = null
        setTimeout(() => {
            children[i-1].focus()
        }, 100)
    }
  
    else {
        const matched = keypressed.match(/^[0-9]$/)
        if(!matched){
            otpArray.value[i] = null
            return
        }
  
        else if(i < otpProps.length - 1){
            setTimeout(() => {
                children[i+1].focus()
            }, 100)
        }
        checkOTP()
    }
  }
  
  
  function checkOTP(){
     const children = container.value.children
  
     let flag = true
  
     for(let i=0; i < otpProps.length -1; i++){
        if(otpArray.value[i] == null)
        {
            children[i].classList.add('border-red-500')
            flag = false
        }
        else {
             children[i].classList.remove('border-red-500')
        }
     }
  
    if(flag)
    otpEmit('entered', otpArray.value.join(''))
  
  }
  
  
  
  </script>
  