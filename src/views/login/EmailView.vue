<template>
    <RouterView />
    <h1>email ej</h1>
    <div class="w-1/2 m-4">
    <form @submit.prevent>
        <label for="fname" class="text-xl font-bold text-sky-950 w-350 h-370; py-8">Login</label><br />
        <input
          type="email"
          placeholder="Enter your email"
          class="max-w-sm my-6 border-b-2 border-color: rgb(203 213 225); w-full"
        />
        <button
          id="Login"
          type="submit"
          class="h-[40px] my-4 rounded-lg min-w-44 bg-cyan-950 py-3 text-center text-white ml-[200px] font-serif"
        >
          SEND CODE
        </button>
      </form>
    </div>
</template>
