<template>
  <div class="search_bar">
    <input
      type="text"
      placeholder="Search"
      v-model="text"
      class="shadow-md rounded-md"
    />
    <div class="results" v-for="(movie, id) in movies" :key="id">
      <router-link :to="{name: 'movie', 
      params:{ name: movie.title, 
      avg: movie.vote_average ,
      img: movie.poster_path,
      voteCount: movie.vote_count,
      date: movie.release_date,
      desc: movie.overview,
      }}">
      <div class="movie_result" v-show="isActive">
        {{ movie.title }}
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      text: "",
      base_url:
        "https://api.themoviedb.org/3/search/movie?api_key=34acadda81ff298a5d269795b4379ded&query=",
      movies: [],
      isActive: false,
    };
  },

  updated() {
    if (this.text.length > 0) {
      this.isActive = true;
      axios
        .get(this.base_url + this.text)
        .then((datas) => {
          this.movies = datas.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (this.text.length == 0) {
      this.isActive = false;
    }
  },
};
</script>

<style scoped>
.search_bar {
  position: fixed;
  left: 50%;
  top: 14px;
  transform: translate(-50%);
  z-index: 10;
  height: 400px;
  max-width: 400px;
}

.results {
  display: flex;
  flex-direction: column;
}

.movie_result {
  cursor: pointer;
  padding: 10px;
  background-color: #fff;
}

.movie_result:hover{
  background-color: whitesmoke;
}

input {
  width: 400px;
  padding: 10px;
  font-size: 20px;
  outline: none;
}

:focus {
  border: 2px solid rgba(0, 0, 0, 0.548);
}
</style>