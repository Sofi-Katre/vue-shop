<template>
  <div class="border">
    <div class="wrap">
      <div class="product-wrap">
        <img :src="infoitem.image" alt="Photo" />
      </div>
      <div class="loop-action">
        <a href="" class="add-to-cart">To bookmarks</a>
        <a href="" class="loop-add-to-cart">To bascet</a>
        <h3 class="ratesytle">The rate an item: {{ infoitem.rating.rate }}</h3>
        <h6 class="ratesytle">{{ infoitem.description }}</h6>
      </div>
      <div class="product-info">
        <h3 class="product-title">{{ infoitem.title }}</h3>
        <div class="price">$ {{ infoitem.price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    infoitem: Object,
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.ratesytle {
  color: #f1e7e8;
  font-size: 0.7rem;
  padding-top: 1vh;
}
.border {
  width: 300px;
  height: fit-content;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border: 1px solid #f1e7e8;
  border-radius: 10px;
}
.wrap {
  height: 100%;
  position: relative;
}
.product-wrap {
  position: relative;
}
.product-wrap:after {
  content: '';
  background: rgba(51, 51, 51, 0.5);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  opacity: 0;
  transform: scale(0.3);
  transition: 0.3s ease-in-out;
  border-radius: 10px;
}
.border:hover .product-wrap:after {
  opacity: 1;
  transform: scale(1);
}
.product-wrap a {
  display: block;
  text-decoration: none;
}
.product-wrap img {
  display: block;
  width: 100%;
}
.loop-action {
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: 0.3s ease-in-out;
}
.border:hover .loop-action {
  opacity: 1;
}
.loop-action a {
  text-decoration: none;
  display: block;
  border: 1px solid white;
  white-space: nowrap;
  text-transform: uppercase;
  padding: 0.5em 1em;
  font-size: 14px;
  line-height: 1.6;
  outline: none;
  position: relative;
  overflow: hidden;
  text-align: center;
  color: white;
  min-width: 160px;
  margin: 5px auto;
  transition: 0.3s ease-in-out;
}
.loop-action a:after {
  content: '';
  position: absolute;
  left: -220%;
  top: -500%;
  width: 140%;
  height: 1000%;
  transform: rotate(45deg);
  background: white;
  z-index: -1;
  transition: 0.3s ease-in-out;
}
.loop-action a:hover {
  color: black;
}
.loop-action a:hover:after {
  left: 0%;
}
.border:hover {
  border-color: #576177;
}
.product-info {
  padding-top: 15px;
}
.product-title {
  font-weight: normal;
  font-family: 'Open Sans';
  color: #373a41;
  font-size: 18px;
}
.price {
  font-family: 'Open Sans';
  color: #162546;
  font-style: italic;
  font-weight: bold;
}
</style>
