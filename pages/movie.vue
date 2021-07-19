<template>
  <div class="container w-full h-screen">
    <Header />
    <Search />
    <div class="movie w-full p-10 top-20 absolute flex items-center">
      <img :src="baseImg + $route.params.img" alt="Movie poster">

    <div class="desc flex flex-col ml-20">
      <h1 class="text-5xl">{{$route.params.name }}</h1> 
      <div class="notes flex mb-10">
        <p class="mt-6">Release date: &nbsp;{{$route.params.date}}</p>
        <p class="mt-6 ml-5 ">IMDb: &nbsp;{{$route.params.avg}}</p>
        <p class="mt-6 ml-5">Votes: &nbsp;{{$route.params.voteCount}}</p>
      </div>
      <p class="text-xl">{{$route.params.desc}}</p>
    </div>

    </div>
  </div>

</template>


<script>
export default {
  name: 'movie',
  data() {
    return {
      baseImg: "https://image.tmdb.org/t/p/w500"
    }
  },
}

</script>

<style>


</style>