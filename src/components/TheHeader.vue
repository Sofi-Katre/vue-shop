<script setup></script>
<template>
  <header class="m-auto">
    <div class="topinfo flex w-5/6 m-auto justify-center">
      <p>магазин женской, мужской одежды и аксессуаров</p>
    </div>
    <div class="nav">
      <div class="mainnav flex w-5/6 m-auto">
        <div class="titlesite">VEOLLA</div>
        <ul class="mainbloktop flex justify-end gap-8">
          <li class="flex items-center gap-3">
            <div class="iconheart">
              <img src="../images/headerimg/Heart.png" alt="marksbooks" />
            </div>
            <p>Отложенное</p>
          </li>
          <li class="flex items-center gap-3">
            <div class="iconheart">
              <img src="../images/headerimg/basket.png" alt="marksbooks" />
            </div>
            <p>Корзина</p>
          </li>
        </ul>
      </div>
      <div class="afternav m-auto flex justify-center">
        <ul class="flex gap-8">
          <li><a href="">женщинам</a></li>
          <li><a href="">мужчинам</a></li>
          <li><a href="">акссесуары</a></li>
          <li><a href="">электроника</a></li>
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
