<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import Navbar from '@/components/layout/nav-bar/NavBar.vue';

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {}
</script>
