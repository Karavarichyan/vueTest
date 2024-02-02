<template>
  <div class="flex">
    <!-- Sidebar -->
    <div class="w-full flex max-w-16 min-h-screen bg-sky-950 p-4">
      <div>
        <img class="py-3" src="@/assets/menu1.png" alt="oop" />
        <!-- <img class="py-3" src="@/assets/menu3.png" alt="oop" /> -->
        <router-link to="/dashboard/Info">
            <img class="py-3" src="@/assets/menu3.png" alt="Home Page" />
          </router-link>
          <router-link to="/dashboard/InfoPost">
            <img class="py-3" src="@/assets/menu2.png" alt="oop" />
          </router-link>
        <!-- <img class="py-3" src="@/assets/menu2.png" alt="oop" /> -->
        
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex items-center justify-center min-w-96">
      <RouterView />
    </div>
  </div>
</template>
<script setup> 
</script> 
