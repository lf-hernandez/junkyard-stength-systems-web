<template>
    <div class="ClientCard">
        <div class="card">
            <div class="d-flex align-items-center">
                <div class="d-flex-shrink">
                    <div class="avatar-circle ml-3">
                        <span class="initials">
                            {{initials }}
                        </span>
                    </div>
                </div>
                <div class="d-flex-grow flex-fill p-2">
                    <h2 class="m-0">{{ name }}</h2>
                    <p class="text-bold m-0">Week {{ weekNumber }}</p>


                </div>
                <div class="p-4">
                    <button class="btn btn-lg btn-primary"><i class="fas fa-user-edit"></i></button>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class ClientCard extends Vue {
        @Prop()
        name: string;

        @Prop()
        weekNumber: number

        get initials() {
            return this.name.split('')[0].toUpperCase();
        }


    }
</script>

<style lang="scss">
    @import "src/styles/style.scss";

    * {
        font-family: $font-family-roboto;
    }
    .avatar-circle {
        @include md-avatar(70px);
    }
</style>