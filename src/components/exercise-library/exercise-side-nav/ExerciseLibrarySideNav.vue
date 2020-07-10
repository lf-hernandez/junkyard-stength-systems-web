<template>
    <div class="exerciseLibrarySideNav">
        <div class="card shadow">
            <div class="card-header">
                <h5 class="card-title m-0">
                    Categories
                </h5>
            </div>
            <div class="card-body p-0">
                <div class="list-group">
                    <router-link
                        class="list-group-item list-group-item-action"
                        :to="{
                            name: 'exercise-library.category',
                            params: { category: muscleGroup.toLowerCase() }
                        }"
                        v-for="muscleGroup in muscleGroups"
                        :key="muscleGroup"
                    >
                        {{ muscleGroup }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./ExerciseLibrarySideNav.ts"></script>
<style lang="scss" src="./ExerciseLibrarySideNav.scss"></style>
