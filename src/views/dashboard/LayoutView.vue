<template>
    <div class="flex">
      <div class="w-full max-w-16 min-h-screen bg-sky-950 p-4 fixed">
        <div class="flex flex-col items-center">
          <router-link to="/dashboard/Intiresting">
            <img class="py-3" src="@/assets/menu1.png" alt="Главная страница" />
          </router-link>
          <router-link to="/dashboard/Info">
            <img class="py-3" src="@/assets/menu3.png" alt="Главная страница" />
          </router-link>
          <router-link to="/dashboard/InfoPost">
            <img class="py-3" src="@/assets/menu2.png" alt="Что-то еще" />
          </router-link>
        </div>
      </div>
  
      <div class="flex-1 flex items-center justify-center min-w-96">
        <RouterView />
      </div>
    </div>
  </template>

  