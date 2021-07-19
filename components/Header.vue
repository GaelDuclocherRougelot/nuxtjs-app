<template>
  <header class="w-full h-20 flex justify-between items-center">
    <router-link to="/">
    <h1 class="left-5 bottom-6 absolute text-xl font-serif cursor-pointer">MOVIESDb</h1>
    </router-link>
    <Search />
  </header>
</template>


<style>
header {
  background-color: whitesmoke;
  position: fixed;
  z-index: 10;
}
</style>