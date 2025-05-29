<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>


<style lang="scss">
$primary-color: #130112;
$secondary-color: #6b1b67;
$tertiary-color: #752a71;

$box-shadow-1: 0px 0px 6px rgba(0, 0, 0, 0.1);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: "Sansita", sans-serif;

  &::selection {
    background: transparentize($secondary-color, 0.5);
  }
}

//#130112

a {
  text-decoration: none;
}

/*
header {
  background-color: #2c3d4e;

  padding: 10px 16px;

  box-shadow: 0px 0px 6px rgba(0, 0, 0, .1);

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;

    font-size: 28px;

    span {
      color: #42b883;
    }
  }
} */
</style>
