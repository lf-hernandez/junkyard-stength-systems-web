<template>
    <div class="exerciseLibrary container">
        <div class="row mb-5">
            <div class="col-4">
                <h1 class="text-left font-weight-light m-0">
                    Exercise Library
                </h1>
            </div>
            <div class="col-8">
                <form>
                    <input
                        class="form-control form-control-lg"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </form>
            </div>
        </div>

        <div class="d-flex flex-nowrap">
            <div class="flex-column flex-shrink mr-4">
                <ExerciseLibrarySideNav></ExerciseLibrarySideNav>

                <button class="btn btn-block btn-lg btn-dark mt-4" @click="onAddExercise">
                    <font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon>
                    Add Exercise
                </button>
            </div>

            <div class="flex-column flex-grow">
                <template v-if="category">
                    <ExerciseLibraryGrid :exercises="exercisesByCategory(category)"></ExerciseLibraryGrid>
                </template>
                <template v-else>
                    <ExerciseLibraryGrid :exercises="exercises"></ExerciseLibraryGrid>
                </template>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./ExerciseLibrary.ts"></script>
