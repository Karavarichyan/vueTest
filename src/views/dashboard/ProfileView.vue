<template>
  <div class="ml-6">
    
  <div class="text-xl font-bold text-sky-950 w-350 h-370; py-8">My Profile</div>
  <div class="w-full	 min-h-72 border-2 border-slate-300">
    <div class="text-xl flex  font-bold text-sky-950 w-350 h-370; py-8">General info <div class=" justify-end	 ml-96	">My account</div>
      
    </div>
    
    <div class="flex flex-wrap">
      <input
        type="text"
        placeholder="First name "
        class="w-56 outline-0	mx-1	 my-6 border-b-2 border-color: rgb(203 213 225); "
      />
      <input
        type="text"
        placeholder="last name "
        class="w-56	outline-0	mx-1 my-6 border-b-2 border-color: rgb(203 213 225); "
      />
      <!-- <input
          type="number"
          placeholder="Date of birth name "
          class="max-w-sm my-6 border-b-2 border-color: rgb(203 213 225); w-full"
        /> -->
      <!-- <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="15.01.2024" /> -->
      <!-- <input
          type="email"
          placeholder="Enter your email"
          class="max-w-sm my-6 border-b-2 border-color: rgb(203 213 225); w-full"
        /> -->

        <form >
          <label for="name"> Data of birdh</label> <br>
        <input
        language="en"
        class="w-56	outline-0 mx-1	 my-6 border-b-2 border-color: rgb(203 213 225);"
        type="date"
        id="start"
        name="trip-start"
        value=""
        min="2018-01-01"
        max="15.01.2024"
      /> 
        </form>
      
        <input
      
        class="w-56	outline-0 mx-1	 my-6 border-b-2 border-color: rgb(203 213 225);"
        type="date"
  
      /> 
        <!-- <div>Slack</div> -->
      <!-- <label class="w-12 h-12" for="html"></label> -->
      <!-- <input
        type="text"
        placeholder="Enter you slack user name "
        class=" w-56 outline-0		mx-1	 my-6 border-b-2 border-color: rgb(203 213 225); "
      /> -->
      <form action="" >
        <label class="ml-8" for="fname">Enter you slack user name</label><br>
        <input type="text" id="fname" name="fname" value="" class="w-56 ml-8	outline-0		 my-6 border-b-2 border-color: rgb(203 213 225); "><br>
      </form> 
      
    </div>
    <div class="flex">
      <input
        type="email"
        placeholder="Enter your email"
        class="w-56	mx-1	outline-0	 my-6 border-b-2 border-color: rgb(203 213 225); "
      />
      <input
        type="email"
        placeholder="Enter your email"
        class="w-56	outline-0	 my-6 border-b-2 border-color: rgb(203 213 225); "
      />
      <input 
      type="tel"
      placeholder="Mobaile Phone"
      class="w-56 mx-1	outline-0		 my-6 border-b-2 border-color: rgb(203 213 225); "
    />
    <form action="" >
      <label class="ml-8" for="fname">Enter you github user name</label><br>
      <input type="text" id="fname" name="fname" value="" class="w-56 ml-8	outline-0		 my-6 border-b-2 border-color: rgb(203 213 225); " ><br>
    </form> 
    </div>
    <div class="flex">
      <form class="mx-1 outline-0		" >
        <label for="name">Start Data</label> <br>
      <input
      class="w-56	outline-0	 my-6 border-b-2 border-color: rgb(203 213 225);"
      type="date"
      id="start"
      name="trip-start"
      value=""
      min="2018-01-01"
      max="15.01.2024"
    /> 
      </form>
      <form class="mx-1 outline-0		">
        <label for="quantity">Absences:</label> <br> <br>
        <input type="number" id="quantity" name="quantity" min="1" max="30">
        
      </form>
      <div class="mx-1	outline-0	"> <br> <br>
        <input type="checkbox" id="scales" name="scales" checked />
        <label for="scales"> Core team member</label>
      </div>
      
    </div>
    
  </div>
  <div class="flex "><h1>dgfssdg</h1></div>
  </div>
</template>
