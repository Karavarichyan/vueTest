<template>
    <div>
      <button @click="showAll">
        <AllUserInfoViewCVue v-if="showAllInfo"/>
        aaa
      </button>
      <button @click="showOnli">
        <OnliUserInfoViewC v-if="showOnliInfo"/>
        oooo
      </button>
    </div>
  </template>
  <script setup>
  const { ref } = Vue;
  const showAllInfo = ref(false);
  const showOnliInfo = ref(false);
  const showAll = () => {
    showAllInfo.value = true;
    showOnliInfo.value = false;
  };
  const showOnli = () => {
    showAllInfo.value = false;
    showOnliInfo.value = true;
  };
  </script>