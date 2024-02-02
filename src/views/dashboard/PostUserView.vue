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
    <div class="flex space-x-4">
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
      </div>
      
      
  </template>