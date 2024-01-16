<template>Profile
    <div class="text-xl font-bold text-sky-950 w-350 h-370; py-8">My Profile </div>
    <div>
        <div class="text-xl font-bold text-sky-950 w-350 h-370; py-8">General info </div>
        <div>
            <input
          type="text"
          placeholder="First name "
          class="max-w-sm my-6 border-b-2 border-color: rgb(203 213 225); w-full"
        />
        <input
          type="text"
          placeholder="last name "
          class="max-w-sm my-6 border-b-2 border-color: rgb(203 213 225); w-full"
        />
        <!-- <input
          type="number"
          placeholder="Date of birth name "
          class="max-w-sm my-6 border-b-2 border-color: rgb(203 213 225); w-full"
        /> -->
        <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="15.01.2024" />
        <input
          type="email"
          placeholder="Enter your email"
          class="max-w-sm my-6 border-b-2 border-color: rgb(203 213 225); w-full"
        />
        <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="15.01.2024" />
        </div>

    </div>
    
</template>