<script setup>
/*import { RouterLink, RouterView } from 'vue-router'*/
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import TheCards from './components/TheCards.vue'
fetch('https://fakestoreapi.com/products')
  .then((res) => res.json())
  .then((json) => console.log(json))
</script>

<template>
  <TheHeader />
  <div class="allcard">
    <h2 class="text-3xl font-bold">Все товары</h2>
    <div class="cardpart1 grid grid-cols-5 gap-10">
      <TheCards />
      <TheCards />
      <TheCards />
      <TheCards />
      <TheCards />
      <TheCards />
      <TheCards />
      <TheCards />
      <TheCards />
      <TheCards />
    </div>
  </div>
  <TheFooter />
  <RouterView />
</template>

<style scoped>
.allcard {
  margin: 2% 8% 2% 8%;
}
.cardpart1 {
  margin-top: 2%;
}
</style>
