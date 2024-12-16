<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['itemsdata']),
    getCat(namecategory) {
      this.itemsdata(namecategory)
      console.log(namecategory)
    },
  },
  mounted() {
    fetch('https://fakestoreapi.com/products/categories')
      .then((resp) => resp.json())
      .then((json) => {
        this.categories = json
      })
  },
  data() {
    return {
      categories: null,
    }
  },
  computed: {
    ...mapGetters(['getCategory']),
  },
}
</script>
<template>
  <header class="m-auto">
    <div class="topinfo flex w-5/6 m-auto justify-center">
      <p>it's a fake marketplace where you don't to buy a smth</p>
    </div>
    <div class="nav">
      <div class="mainnav flex w-5/6 m-auto">
        <div class="titlesite"><RouterLink to="/">VEOLLA</RouterLink></div>
        <ul class="mainbloktop flex justify-end gap-8">
          <li class="flex items-center gap-3">
            <div class="iconheart">
              <img src="../images/headerimg/Heart.png" alt="marksbooks" />
            </div>
            <RouterLink to="/Bokmarks">Bookmarks</RouterLink>
          </li>
          <li class="flex items-center gap-3">
            <div class="iconheart">
              <img src="../images/headerimg/basket.png" alt="marksbooks" />
            </div>
            <RouterLink to="/Bascet">Basket</RouterLink>
          </li>
        </ul>
      </div>
      <div class="afternav m-auto flex justify-center">
        <ul class="flex gap-8">
          <li v-for="(category, key) in categories" :key="key">
            <button @click="getCat(category)">{{ category }}</button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<style>
.nav {
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-rows: auto auto;
  padding-top: 2vh;
  padding-bottom: 2vh;
}
.mainnav {
  padding-bottom: 1vh;
  justify-content: space-between;
}
.titlesite {
  font-size: 1.5rem;
  color: aliceblue;
  letter-spacing: 0.2rem;
}
.mainbloktop {
  grid-column: 2;
  color: aliceblue;
}
.afternav {
  color: aliceblue;
  letter-spacing: 0.1rem;
}
</style>
