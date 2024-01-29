<template>
  <div class="w-1/2 ml-28">
    <label
      for="fname"
      class="text-xl leading-8 font-medium text-indigo-800 w-350 h-370; py-8"
      >Login</label
    ><br />
    <p>sfssdfsdf</p>
          <!-- <div>{{ posts.id }} {{ posts.title }}.</div> -->

    <BaseInput @set-value="setValue" type="email" class="number-class" />
    <!-- <p>{{ email }}</p> -->

    <p v-if="!startValidation && email.length">invalid</p>
    <BaseButton
      :processing="false"
      @click="sendCode"
      :disabled="IstValidation"
      class="h-[40px] my-4 rounded-lg min-w-44 bg-blue-900 items-center text-white ml-[160px] font-roboto"
      >SEND CODE</BaseButton
    >
    <!-- <p>{{x}}</p> -->
    <!-- <RouterLink to="/otp">About</RouterLink> -->
      <!-- <h2>{{ posts.id }} {{ posts.title }}.</h2>
      <p>{{ posts.body }}</p> -->
      <!-- //axios testtt -->
      <!-- <div v-for="post in posts" :key="post.id">
        <h2>{{ post.id }} {{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div> -->
  </div>

</template>
<script setup>
import axios from "axios";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const startValidation = ref(false);
const email = ref("");
const info = ref([]);

const setValue = (value) => {
  email.value = value;
};

const sendCode = () => {
  if (!email.value.length) return;
  router.push({ path: "/Otp", replace: true });
};

const IstValidation = computed(() => {
  return startValidation.value
    ? /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    : null;
});

onMounted(async () => {
  await axios
    .post('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      email.value = response.data;
    })
    .catch(error => {
      console.error("erore no user", error);
    });
    console.log(email.value);
});



// axios({
//   method: 'get',
//   url: 'https://jsonplaceholder.typicode.com/users',
//   data: {
//     title: 'Article title',
//     body:  'Article body content',
//     userId: 1,
//   }
// })
// ;(async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//   if (response.ok) {
//     const data = await response.json()
//     console.log(data)
//   } else {
//     console.log('error')
//   }
// })()
// ;(() => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
// })()
</script>
<!-- <script setup> 
import { onMounted } from "vue";
import usePosts from "../../composables/posts";
 
const { posts, getPosts } = usePosts()
onMounted(() => {
    getPosts()
})
</script> // [tl! add:end] -->