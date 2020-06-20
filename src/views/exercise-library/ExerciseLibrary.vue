<script lang="ts" src="./ExerciseLibrary.ts"></script>
<style lang="scss" src="./ExerciseLibrary.scss"></style>

<template>
    <div class="exerciseLibrary">
        <div class="container">
            <div class="row mb-5">
                <div class="col-4">
                    <h1 class="text-left font-weight-light m-0">Exercise Library</h1>
                </div>
                <div class="col-8">
                    <form>
                        <input class="form-control form-control-lg" type="text" placeholder="Search"
                               aria-label="Search">
                    </form>
                </div>
            </div>

            <div class="d-flex flex-nowrap">
                <div class="flex-column flex-shrink mr-4">
                    <ExerciseLibrarySideNav></ExerciseLibrarySideNav>

                    <button class="btn btn-block btn-lg btn-dark mt-4" @click="onAddExercise">
                        <font-awesome-icon icon="plus"></font-awesome-icon>
                        Add Exercise
                    </button>
                </div>

                <div class="flex-column flex-grow">
                    <div class="row row-cols-1 row-cols-md-3">
                        <div class="col mb-5" v-for="exercise in exercises" :key="exercise.id">
                            <ExerciseLibraryCard v-on:click.native="onClick(exercise)"
                                                 :exercise="exercise"></ExerciseLibraryCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

