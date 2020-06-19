<script lang="ts" src="./ExerciseLibraryCard.ts"></script>
<style lang="scss" src="./ExerciseLibraryCard.scss"></style>

<template>
    <div class="exerciseLibraryCard card p-0" role="button">
        <img src="../../../assets/logo.svg" class="p-4 card-img-top exerciseImg"
             alt="placeholder">
        <div class="card-header">
            {{ exercise.name }}
        </div>
        <div class="card-body">
            {{ exercise.description }}
        </div>
    </div>
</template>