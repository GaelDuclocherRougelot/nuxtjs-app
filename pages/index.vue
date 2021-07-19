<template>
  <main class="w-full h-screen">
    <Header />
    <Discover />
    <Search />
  </main>
</template>

<script>
export default {
  name: "index",
  transition: "menu",
  data() {
    return {
      movies: [],
    };
  },
};
</script>

<style>
main {
  background-color: rgb(255, 255, 255);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
