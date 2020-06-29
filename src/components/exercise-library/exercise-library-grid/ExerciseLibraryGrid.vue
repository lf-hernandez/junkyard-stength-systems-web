<template>
    <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-5" v-for="exercise in exercises" :key="exercise.id">
            <ExerciseLibraryCard
                v-on:click.native="pushExerciseDetailsRoute(exercise)"
                :exercise="exercise"
            ></ExerciseLibraryCard>
        </div>
    </div>
</template>

<script lang="ts" src="./ExerciseLibraryGrid.ts"></script>
