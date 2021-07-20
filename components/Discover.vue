<template>
  <div class="discover_cards">
    <h1>Discover</h1>
    <div class="card grid grid-cols-1">
      <div class="img" v-for="(movie, id) in movies" :key="id">
        <img :src="base_img + movie.poster_path" />
        <div class="info flex flex-col width-full h-full">
          <div class="flex flex-row">
            <h1>{{ movie.title }}</h1>
            <p class="mt-9">
              IMDb: {{ movie.vote_average }} &nbsp; Votes:
              {{ movie.vote_count }}
            </p>
            <p class="mt-9 ml-5">Release date: {{ movie.release_date }}</p>
          </div>

          <p class="ml-5">{{ movie.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Discover",
  data() {
    return {
      movies: [],
      imgs: [],
      base_img: "https://image.tmdb.org/t/p/w300",
      img_id: "",
    };
  },
  props: ["value"],
  methods: {
    getImgUrl() {
      $.base_img + $.img_id;
    },
    discoverAnimation() {
      const gsap = this.$gsap

      gsap.fromTo('.discover_cards', {opacity: 0, x: -200}, {opacity: 1, duration: 1, delay: 1, x: 0, ease: "power2"});
      gsap.fromTo('.card', {opacity: 0, y: -30}, {opacity: 1, duration: 1, y: 0, delay: 2, ease: "power2" });
    }
  },

  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=34acadda81ff298a5d269795b4379ded"
      )
      .then((response) => {
        this.movies = response.data.results;
        $.movies.forEach((movie) => {
          $.img_id = movie.poster_path;
          $.imgs.push($.img_id);
        });
      });

  this.discoverAnimation()
  }
};
</script>


<style scoped>
.discover_cards {
  position: absolute;
  width: 100%;
  height: calc(100% - 90px);
  z-index: 0;
  transform: translateY(80px);
}

.img {
  padding: 10px;
  border-bottom: solid 1px black;
  display: flex;
  align-items: center;
}

h1 {
  font-size: 30px;
  padding: 20px;
}
.card {
  position: relative;
  width: 100%;
  height: 400px;
}

@media (max-width: 650px) {
  .img {
    width: 50%;
  }
}
</style>