<script>
/*import { RouterLink, RouterView } from 'vue-router'*/
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import { mapMutations } from 'vuex'
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  methods: {
    ...mapMutations(['allitemsdata']),
  },
  mounted() {
    this.allitemsdata()
    console.log(this.getCategory)
  },
}
</script>

<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>
