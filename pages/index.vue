<template>
  <main class="w-full h-screen">
    <Header />
    <Discover />
  </main>
</template>

<script>
import Header from "@/components/Header.vue"
import Discover from "@/components/Discover.vue"
export default {
  name: "index",
  transition: "menu",
  components: {
    Header,
    Discover,
  },
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
