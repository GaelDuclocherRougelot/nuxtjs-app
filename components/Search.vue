<template>
  <div class="search_bar">
    <input
      type="text"
      placeholder="Search"
      v-model="text"
      class="shadow-md rounded-md"
    />
    <div class="" v-for="(movie, id) in movies" :key="id">
      <div class="movie_result">
        {{ movie.title }}
      </div>
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
      base_url:"https://api.themoviedb.org/3/search/movie?api_key=34acadda81ff298a5d269795b4379ded&query=",
      movies: [],
    };
  },

  updated() {
    if (this.text.length > 0) {
      axios
        .get(this.base_url + this.text)
        .then((datas) => {
          this.movies = datas.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (this.text.length == 0) {

    }
  },
};
</script>

<style scoped>
.search_bar {
  position: absolute;
  z-index: 10;
  height: 500px;
}
.results {
  position: absolute;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.movie_result {
  cursor: pointer;
  padding: 10px;
  background-color: #fff;
}

input {
  width: 250px;
  padding: 10px;
  font-size: 20px;
  outline: none;
}

:focus {
  border: 2px solid rgba(0, 0, 0, 0.548);
}
</style>