<script>
import { mapGetters } from 'vuex'
import TheCards from './TheCards.vue'
export default {
  components: {
    TheCards,
  },
  computed: {
    ...mapGetters(['getCategory']),
  },
  data() {
    return {
      startslice: 0,
    }
  },
}
</script>

<template>
  <div class="allcard">
    <h2 class="text-3xl font-bold">Все товары</h2>
    <div class="cardpart1 grid grid-cols-4 gap-10">
      <TheCards
        :infoitem="item"
        v-for="(item, key) in getCategory.slice(startslice, startslice + 10)"
        :key="key"
      />
    </div>
    <div class="page grid grid-cols-2 gap-3 w-60">
      <button
        class="btnstyle"
        @click="
          () => {
            startslice -= 10
          }
        "
      >
        1
      </button>
      <button
        class="btnstyle"
        @click="
          () => {
            startslice += 10
          }
        "
      >
        2
      </button>
    </div>
  </div>
</template>

<style scoped>
.allcard {
  margin: 2% 8% 2% 8%;
}
.cardpart1 {
  margin-top: 2%;
}
.page {
  margin: 0 auto;
  padding-top: 4vh;
}
.btnstyle {
  width: 10vh;
  height: 3vh;
  border: 1px solid #3b3b3b;
}
</style>
