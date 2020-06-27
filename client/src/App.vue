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

    import AppNav from '@app/components/layout/app-nav/AppNav.vue';
    import AppFooter from '@app/components/layout/app-footer/AppFooter.vue';

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

    @import "./styles/style.scss";

    html {
        height: 100vh;
    }

    body {
        height: 100vh;
        padding-top: 5rem;
        display: flex;
        flex-direction: column;
    }

    main {
        padding-top: 4rem;
        min-height: 100vh;
    }


    #app {
        font-family: $font-family-roboto;
        background-color: #FAFAFA;
    }
</style>