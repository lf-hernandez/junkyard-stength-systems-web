<template>
    <div id="app">
        <AppNav></AppNav>

        <main role="main">
            <router-view/>
        </main>

        <AppFooter></AppFooter>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    import AppNav from '@/components/layout/app-nav/AppNav.vue';
    import AppFooter from '@/components/layout/app-footer/AppFooter.vue';

    @Component({
        components: {
            AppNav,
            AppFooter
        }
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    @import "./styles/style.scss";
    * {
        margin: 0;
    }
    html, body {
        height: 100%;

        main {
            height: 100%;
        }
    }

    body {
        padding-top: 6rem !important;
        background-color: #FAFAFA;
    }

    #app {
        font-family: $font-family-roboto;
        min-height: 100%;
    }
</style>