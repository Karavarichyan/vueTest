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
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          All
        </button>
      </router-link>
      <router-link to="/dashboard/InfoPostOnliU">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Onli User Info
        </button>
      </router-link>
    </div>
  </template>