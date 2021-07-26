<template>
  <header
    class="w-full h-20 flex justify-between items-center"
    v-gsap.fromTo="[
      { opacity: 0, y: -90 },
      { opacity: 1, duration: 1, y: 0 },
    ]"
  >
    <router-link to="/">
      <h1 class="left-5 bottom-6 absolute text-xl font-serif cursor-pointer">
        MOVIESDb
      </h1>
    </router-link>
    <Search />
  </header>
</template>

<script>
import Search from "@/components/Search.vue";
export default {
  name: "Header",
  components: {
    Search,
  },
};
</script>

<style>
header {
  background-color: whitesmoke;
  position: fixed;
  z-index: 10;
}
</style>