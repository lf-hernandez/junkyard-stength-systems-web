<template>
    <div class="programs container pt-5">
        <h1 class="text-left font-weight-light m-0">Programs</h1>

        <div class="d-flex flex-nowrap">
            <div class="flex-column flex-shrink mr-4">
                <ProgramsSideNav class="pt-5"></ProgramsSideNav>

                <button class="btn btn-block btn-lg btn-dark mt-4">
                    <font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon>
                    Add Program
                </button>
            </div>

            <div class="flex-column flex-grow">
                <div class="row row-cols-1 row-cols-md-3">
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import ProgramsSideNav from '../../components/programs/programs-side-nav/ProgramsSideNav.vue';

    @Component({
        components: {ProgramsSideNav}
    })
    export default class Programs extends Vue {
    }
</script>