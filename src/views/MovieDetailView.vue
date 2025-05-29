<template>
    <div class="movie-detail">
        <h2>{{ movie.Title }}</h2>
        <img :src="movie.Poster" :alt="movie.Title">
        <p>Year : {{ movie.Year }}</p>
        <p>Plot : {{ movie.Plot }}</p>
        <p>Genre : {{ movie.Genre }}</p>
        <p>Rated : {{ movie.Rated }}</p>
        <p>Released : {{ movie.Released }}</p>
        <p>Runtime : {{ movie.Runtime }}</p>
        <p>Direcor : {{ movie.Direcor }}</p>
        <p>Writer : {{ movie.Writer }}</p>
        <p>Actors : {{ movie.Actors }}</p>
        <p>Language : {{ movie.Language }}</p>
        <p>Country : {{ movie.Country }}</p>
        <p>Awards : {{ movie.Awards }}</p>
        <p>Ratings : {{ movie.Ratings }}</p>
        <p>Metascore : {{ movie.Metascore }}</p>
        <p>imdbRating : {{ movie.imdbRating }}</p>
        <p>imdbVotes : {{ movie.imdbVotes }}</p>
        <p>imdbID : {{ movie.imdbID }}</p>
        <p>DVD : {{ movie.DVD }}</p>
        <p>BoxOffice : {{ movie.BoxOffice }}</p>
        <p>Production : {{ movie.Production }}</p>
        <p>Website : {{ movie.Website }}</p>
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import env from '@/env';

export default {
    name: "MovieDetailView",

    setup() {
        const movie = ref({});
        const route = useRoute();

        onBeforeMount(() => {
            fetch(`https://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
                .then(Response => Response.json())
                .then(data => {
                    movie.value = data;
                });

        });

        return {
            movie,
            route,
        }
    }
}
</script>

<style lang="scss">
$primary-color: #130112;
$secondary-color: #6b1b67;
$tertiary-color: #752a71;

$box-shadow-1: 0px 0px 6px rgba(0, 0, 0, 0.1);

.movie-detail {
    margin: 2%;
    line-height: 2;

    h2 {
        font-size: 2rem;
        text-align: center;
    }

    img {
        margin-left: auto;
        margin-right: auto;

        border-radius: 30px;
        border: 2px solid $secondary-color;

        display: block;

        object-fit: cover;
    }

    p {
        margin: 1%;

        font-size: 1.5rem;

    }
}
</style>
