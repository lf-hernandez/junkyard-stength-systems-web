<template>
    <div id="app" class="d-flex flex-column h-100">
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

    html, body {
        height: 100%;
    }

    body {
        padding-top: 8rem !important;
    }

    #app {
        font-family: $font-family-roboto;
        background-color: #FAFAFA;
    }
</style>