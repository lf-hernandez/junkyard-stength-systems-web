<script lang="ts" src="./ExerciseLibrarySideNav.ts"></script>
<style lang="scss" src="./ExerciseLibrarySideNav.scss"></style>

<template>
    <div class="exerciseLibrarySideNav">
        <div class="card shadow">
            <div class="card-body p-0">
                <div class="list-group">
                    <a class="list-group-item list-group-item-action" href="#" v-for="muscleGroup in muscleGroups" :key="muscleGroup">
                        {{muscleGroup}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>