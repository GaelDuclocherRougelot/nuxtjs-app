<template>
  <nav class="m-5">
    <transition name="menu">
      <div
        class="menuContainer w-full h-screen absolute shadow-2xl"
        :class="{ menuActive: isActive }"
      >
        <div class="">
          <ul>
            <li>TEST</li>
          </ul>
        </div>
      </div>
    </transition>

    <div
      class="hamburger w-10 h-5 cursor-pointer z-10"
      @click="isActive = !isActive"
    >
      <span :class="{ line1: isActive }"></span>
      <span :class="{ line2: isActive }"></span>
      <span :class="{ line3: isActive }"></span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style>

nav{
  position: relative;
  z-index: 10;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.5s;
}
.menu-enter,
.menu-leave-active {
  opacity: 0;
}
.menuContainer {
  position: absolute;
  background-color: rgb(66, 66, 66);
  top: -2000px;
  transition: all 2s ease;
  z-index: 9;
}

.menuActive {
  top: 0;
  transition: all 1s ease-out;
}

.active {
  display: none;
}


span {
  position: relative;
  display: block;
  height: 3px;
  margin-bottom: 5px;
  background-color: rgb(20, 20, 20);
  width: 33px;
  transition: all 1s ease;
}
.line1 {
  background-color: #fff;
  transform: rotate(45deg);
  transform-origin:left;
  width: 22px; 
}
.line2 {
  background-color: #fff;
  width: 0;
  opacity: 0;
}
.line3 {
  transform: rotate(-45deg);
  transform-origin: left;
  background-color: #fff;
  width: 22px;
}
</style>