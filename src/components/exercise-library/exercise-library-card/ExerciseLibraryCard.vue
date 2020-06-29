<template>
    <div class="exerciseLibraryCard card p-0 shadow-sm" role="button">
        <img
            src="../../../assets/logo.svg"
            class="p-4 card-img-top exerciseImg"
            alt="placeholder"
        />
        <div class="card-header text-center">
            {{ exercise.name }}
        </div>
        <div class="card-body">
            {{ exercise.description }}
        </div>
    </div>
</template>
<script lang="ts" src="./ExerciseLibraryCard.ts"></script>
<style lang="scss" src="./ExerciseLibraryCard.scss"></style>
