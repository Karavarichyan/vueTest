<!-- <template>
    <div>
      <h1>Your Otp Component</h1>
      <div>
        <pre>{{ formattedUser }}</pre>
      </div>
    </div>
  </template> -->
  <template>
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold text-center"> OTP </h1>
      <div class="bg-gray-200 p-4 rounded-md mt-4">
        <pre class="text-sm overflow-x-auto">{{ formattedUser }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null
      };
    },
    created() {
      // Получение строки из параметра запроса
      const userString = this.$route.query.user;
      
      // Преобразование строки в объект
      this.user = JSON.parse(userString);
    },
    computed: {
      formattedUser() {
        // Форматирование объекта в виде строки с отступами
        return JSON.stringify(this.user, null, 2);
      }
    }
  };
  </script>
  