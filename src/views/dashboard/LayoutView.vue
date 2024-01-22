<template>
  <div class="flex">
    <!-- Sidebar -->
    <div class="w-full flex max-w-16 min-h-screen bg-sky-950 p-4">
      <div>
        <img class="py-3" src="@/assets/menu1.png" alt="oop" />
        <img class="py-3" src="@/assets/menu2.png" alt="oop" />
        <img class="py-3" src="@/assets/menu3.png" alt="oop" />
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