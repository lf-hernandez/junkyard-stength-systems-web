<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  @import "./styles/style.scss";
#app {
  font-family: $font-family-roboto;
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
