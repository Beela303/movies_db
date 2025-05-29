<script>
import { ref } from 'vue';
import env from '@/env.js';

export default {
    name: 'HomeView',

    setup() {
        const search = ref("");
        const movies = ref([]);

        const SearchMovies = () => {
            if (search.value != "") {
                fetch(`https://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
                    .then(response => response.json())
                    .then(data => {
                        movies.value = data.Search;
                        search.value = "";
                    });

            }
        }

        return {
            search,
            movies,
            SearchMovies
        }
    }
}
</script>

<template>
    <div class="home-page">
        <h1>Welcome to your favorite Movies & Series DataBase</h1>

        <p>Your one stop to everything Movies & Series</p>
    </div>

    <form class="search-box" @submit.prevent="SearchMovies()">
        <input type="text" placeholder="What are you searching for?" v-model="search">
        <input type="submit" value="Search">
    </form>

    <div class="movies-list">
        <div class="movie" v-for="movie in movies" :key="movie.imdbID">
            <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
                <div class="product-image">
                    <img :src="movie.Poster" :alt="movie.Title">
                    <div class="type">{{ movie.Type }}</div>
                </div>

                <div class="detail">
                    <p class="year">{{ movie.Year }}</p>
                    <h3>{{ movie.Title }}</h3>
                </div>
            </router-link>
        </div>
    </div>

</template>

<style lang="scss">
$primary-color: #130112;
$secondary-color: #6b1b67;
$tertiary-color: #752a71;

$box-shadow-1: 0px 0px 6px rgba(0, 0, 0, 0.1);

.home-page {
    color: #f3f3f3;
    background-color: $primary-color;

    padding: 100px;
    height: 60vh;

    text-align: center;

    h1 {
        font-size: 3rem;
    }

    p {
        margin-top: 5%;
        font-size: 2rem;
    }

    .intro {
        display: flex;
        justify-content: center;
        align-items: center;


        .intro-img {
            width: 90%;

            margin: 2%;


            img {
                margin: 2%;
                border-radius: 30px;
            }
        }

    }
}

.search-box {
    padding: 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        display: block;
        appearance: none;
        border: none;
        outline: none;
        background: none;

        &[type="text"] {
            color: #fff;
            background-color: $secondary-color;

            width: 100%;
            padding: 10px 16px;

            margin-bottom: 15px;

            border-radius: 8px;

            font-size: 20px;

            transition: .4s;

            &::placeholder {
                color: #f3f3f3;
            }

            &:focus {
                box-shadow: 0 3px 6px rgba(0, 0, 0, );
            }
        }

        &[type="submit"] {
            color: #fff;
            background-color: $tertiary-color;

            width: 100%;
            max-width: 300px;
            padding: 16px;

            border-radius: 8px;

            font-size: 20px;
            text-transform: uppercase;

            transition: .4s;

            &:active {
                background-color: $primary-color;
            }
        }
    }

}

.movies-list {
    margin: 0 8px;

    display: flex;
    flex-wrap: wrap;

    .movie {
        max-width: 50%;
        flex: 1 1 50%;
        padding: 16px 8px;

        .movie-link {
            height: 100%;

            display: flex;
            flex-direction: column;

            .product-image {
                position: relative;
                display: block;

                img {
                    width: 100%;
                    height: 275px;

                    object-fit: cover;

                    display: block;
                }

                .type {
                    color: #fff;
                    background-color: $secondary-color;

                    left: 0;
                    bottom: 16px;

                    padding: 8px 16px;

                    text-transform: uppercase;

                    position: absolute;
                }
            }

            .detail {
                background-color: $primary-color;

                padding: 16px 8px;
                border-radius: 0 0 8px 0;

                flex: 1 1 100%;

                .year {
                    color: #aaa;

                    font-size: 14px;
                }

                h3 {
                    color: #fff;

                    font-size: 18px;
                    font-weight: 600;
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .home-page {
        padding: 70px;

        h1 {
            font-size: 2.3rem;
        }

        p {
            font-size: 1.5rem;
        }
    }
}

@media screen and (max-width: 400px) {
    .home-page {
        padding: 50px;

        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1.3rem;
        }
    }
}

@media screen and (max-width: 300px) {
    .home-page {
        h1 {
            font-size: 1.7rem;
        }

        p {
            font-size: 1.2rem;
        }
    }
}
</style>