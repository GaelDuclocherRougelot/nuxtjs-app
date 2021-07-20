<template>
  <div class="container w-full h-screen">
    <Header />
    <!-- <Search /> -->
    <div class="movie w-full p-10 top-20 absolute flex items-center">
      <img :src="baseImg + $route.params.img" alt="Movie poster" v-gsap.fromTo="[{opacity: 0, x: -1000},{opacity: 1, duration: 1, x: 0}]">
    <div v-gsap.fromTo="[{opacity: 0, y: -100},{opacity: 1, duration: 1, y: 0, ease: ease, delay: 1}]" class="desc flex flex-col ml-20" >
      <h1 class="text-5xl">{{$route.params.name }}</h1> 
      <div class="notes flex mb-10">
        <p class="mt-6">Release date: &nbsp;{{$route.params.date}}</p>
        <p class="mt-6 ml-5 ">IMDb: &nbsp;{{$route.params.avg}}</p>
        <p class="mt-6 ml-5">Votes: &nbsp;{{$route.params.voteCount}}</p>
      </div>
      <p class="text-xl" v-gsap.fromTo="[{opacity: 0, y: -50},{opacity: 1, duration: 1, y: 0, ease: ease, delay: 1.5}]">{{$route.params.desc}}</p>
    </div>

    </div>
  </div>

</template>


<script>
export default {
  name: 'movie',
  data() {
    return {
      
    }
  },
}

</script>

<style scoped>

img{
  box-shadow: 1px 1px 20px 1px;
}
</style>