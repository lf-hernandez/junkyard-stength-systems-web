<script lang="ts" src="./ExerciseLibrary.ts"></script>
<style lang="scss" src="./ExerciseLibrary.scss"></style>
<template>
    <div class="exerciseLibrary">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h1 class="text-left font-weight-light mb-4">Exercise Library</h1>
                </div>
                <div class="col-md-4 offset-4">
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search"
                               aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div class="d-flex flex-nowrap">
                <div class="flex-column flex-shrink visible-xl">
                    <ExerciseLibrarySideNav></ExerciseLibrarySideNav>
                </div>

                <div class="flex-column flex-grow">
                    <div class="container">
                        <div class="row row-cols-1 row-cols-md-3">
                            <div class="col mb-5" v-for="exercise in exercises" :key="exercise.id">
                                <ExerciseLibraryCard v-on:click.native="onClick" :exercise="exercise"></ExerciseLibraryCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

