<template>
    <div id="app">
        <Navbar></Navbar>
        <main role="main">
            <router-view/>
        </main>
    </div>
</template>

<style lang="scss">
    @import "./styles/style.scss";

    html, body {
        height: 100%;
    }

    #app {
        font-family: $font-family-roboto;
        background-color: #FAFAFA;
        height: 100%;

        main {
            padding-top: 12px;
        }
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
    export default class App extends Vue {
    }
</script>
