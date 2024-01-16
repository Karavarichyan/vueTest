<template>
    <!-- Coming Soon -->
    <RouterView />
    <div class="min-h-screen flex flex-col items-center justify-center">
      
      <img class="max-sm w-800 h-900" src="@/assets/welcome.png" alt="" />
      
      <div class="max-w-md max-h-8 pb-14 text-4xl text-blue-950">Coming soon</div>
      
      <button
        id="Login"
        type="submit"
        class="max-2-72 max-h-8 bg-cyan-950  px-5 text-center text-white"
      >
        Edit my profile and my worklog
      </button>
      
      <button
        id="Login"
        type="submit"
        class="max-2-72 max-h-8 py-2.5 text-center text-blue-950"
      >
        LOGOUT
      </button>
      
    </div>
  </template>
  