<script setup></script>
<template>
  <header class="m-auto">
    <div class="nav">
      <div class="mainnav flex w-5/6 m-auto">
        <div class="titlesite"><a href="">VEOLLA</a></div>
        <ul class="mainbloktop flex justify-end gap-8">
          <li class="flex items-center gap-3">
            <div class="iconheart">
              <img src="../images/headerimg/Heart.png" alt="marksbooks" />
            </div>
            <p><a href="">Bookmarks</a></p>
          </li>
          <li class="flex items-center gap-3">
            <div class="iconheart">
              <img src="../images/headerimg/basket.png" alt="marksbooks" />
            </div>
            <p><a href="">Bascet</a></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="topinfo flex w-5/6 m-auto justify-center">
      <p>it's a fake marketplace where you don't to buy a smth</p>
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
</style>
