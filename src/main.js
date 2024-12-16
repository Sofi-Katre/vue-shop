import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      items: null,
    }
  },
  mutations: {
    itemsdata(state, namecategory) {
      fetch(`https://fakestoreapi.com/products/category/${namecategory}`)
        .then((resp) => resp.json())
        .then((json) => {
          state.items = json
        })
    },
    allitemsdata(state) {
      fetch('https://fakestoreapi.com/products')
        .then((resp) => resp.json())
        .then((json) => {
          state.items = json
        })
    },
  },
  getters: {
    getCategory(state) {
      return state.items
    },
  },
})

// Install the store instance as a plugin
const app = createApp(App)
app.use(store)

app.use(router)

app.mount('#app')
