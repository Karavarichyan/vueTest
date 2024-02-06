<!-- <template>
  <div>
    <router-link to="/dashboard/InfoPostAll">
      <button>all</button>
    </router-link>
    <router-link to="/dashboard/InfoPostOnliU">
      <button>Onli User Info</button>
    </router-link>
  </div>
</template> -->
<template>
    <!-- <div class="flex space-x-4">
        <router-link to="/dashboard/InfoPostAll">
          <button class="bg-transparent text-black font-bold py-2 px-4 border-b-2 border-transparent hover:border-gray-500 transition duration-300">
            All
          </button>
        </router-link>
        
        <router-link to="/dashboard/InfoPostOnliU">
          <button class="bg-transparent text-black font-bold py-2 px-4 border-b-2 border-transparent hover:border-gray-500 transition duration-300">
            Onli User Info
          </button>
        </router-link>
      </div> -->
      <!-- <div>
        <button >
             <AllUserInfoViewCVue/>
             aaa
        </button>
       <button>
        <OnliUserInfoViewC/>
        oooo
       </button>
        
      </div> -->
      <!-- <div>
        <button @click="showAll">
          <AllUserInfoViewCVue v-if="showAllInfo"/>
          aaa1
        </button>
        <button @click="showOnli">
          <OnliUserInfoViewC v-if="showOnliInfo"/>
          oooo1
        </button>
      </div> -->
      <!-- <div class="flex">
        <div class="flex space-x-4 fixed">
          <button @click="showAll" class="bg-transparent text-black font-bold py-2 px-4 border-b-2 border-transparent hover:border-gray-500 transition duration-300">
            aaall
          </button>
          <button @click="showOnli" class="bg-transparent text-black font-bold py-2 px-4 border-b-2 border-transparent hover:border-gray-500 transition duration-300">
            Onli
          </button>
          
        </div>
    
        <div class="flex">
          <AllUserInfoViewCVue v-if="showAllInfo" />
          <OnliUserInfoViewC v-if="showOnliInfo" />
        </div>
      </div> -->
      
      <div class="ml-16 fixed top-0 left-0 right-0 bg-white z-50 flex justify-center space-x-4">
        <button @click="showAll" class="text-black font-bold py-2 px-4 border-b-2 border-transparent hover:border-gray-500 transition duration-300">
          aaall
        </button>
        <button @click="showOnli" class="text-black font-bold py-2 px-4 border-b-2 border-transparent hover:border-gray-500 transition duration-300">
          Onli
        </button>
      </div>
      <div class=" ml-16 mt-16">
        <AllUserInfoViewCVue v-if="showAllInfo" />
        <OnliUserInfoViewC v-if="showOnliInfo" />
      </div>
      
      
  
  
    <!-- <div class="w-full max-w-md px-2 py-16 sm:px-0">
      <TabGroup>
        <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab
            v-for="category in Object.keys(categories)"
            as="template"
            :key="category"
            v-slot="{ selected }"
          >
          
            <button
              :=class"[
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white text-blue-700 shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
              ]"
            >
              {{ category }}
            </button>
          </Tab>
        </TabList>
  
        <TabPanels class="mt-2">
          <TabPanel
            v-for="(posts, idx) in Object.values(categories)"
            :key="idx"
            :class="[
              'rounded-xl bg-white p-3',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            ]"
          >
            <ul>
              <li
                v-for="post in posts"
                :key="post.id"
                class="relative rounded-md p-3 hover:bg-gray-100"
              >
                <h3 class="text-sm font-medium leading-5">
                  {{ post.title }}
                </h3>
  
                <ul
                  class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"
                >
                  <li>{{ post.date }}</li>
                  <li>&middot;</li>
                  <li>{{ post.commentCount }} comments</li>
                  <li>&middot;</li>
                  <li>{{ post.shareCount }} shares</li>
                </ul>
  
                <a
                  href="#"
                  :class="[
                    'absolute inset-0 rounded-md',
                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                  ]"
                />
              </li>
            </ul>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div> -->
  </template>
  
  <script setup>
  import { ref } from 'vue'
//   import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  import AllUserInfoViewCVue from '@/components/AllUserInfoViewC.vue';
  import OnliUserInfoViewC from '@/components/OnliUserInfoViewC.vue';
//   const { ref } = Vue;
  const showAllInfo = ref(false);
  const showOnliInfo = ref(false);
  const showAll = () => {
    showAllInfo.value = true;
    showOnliInfo.value = false;
  };
  const showOnli = () => {
    showAllInfo.value = false;
    showOnliInfo.value = true;
  };
//   const categories = ref({
//     Recent: [
//       {
//         id: 1,
//         title: 'Does drinking coffee make you smarter?',
//         date: '5h ago',
//         commentCount: 5,
//         shareCount: 2,
//       },
//       {
//         id: 2,
//         title: "So you've bought coffee... now what?",
//         date: '2h ago',
//         commentCount: 3,
//         shareCount: 2,
//       },
//     ],
//     Popular: [
//       {
//         id: 1,
//         title: 'Is tech making coffee better or worse?',
//         date: 'Jan 7',
//         commentCount: 29,
//         shareCount: 16,
//       },
//       {
//         id: 2,
//         title: 'The most innovative things happening in coffee',
//         date: 'Mar 19',
//         commentCount: 24,
//         shareCount: 12,
//       },
//     ],
//     Trending: [
//       {
//         id: 1,
//         title: 'Ask Me Anything: 10 answers to your questions about coffee',
//         date: '2d ago',
//         commentCount: 9,
//         shareCount: 5,
//       },
//       {
//         id: 2,
//         title: "The worst advice we've ever heard about coffee",
//         date: '4d ago',
//         commentCount: 1,
//         shareCount: 2,
//       },
//     ],
//   })
  </script>
  