<script lang="ts" src="./ExerciseDetails.ts"></script>

<template>
    <div class="exerciseDetails container mt-5">
        <h1 class="font-weight-light mb-5">
            <template v-if="isEditMode">Edit Exercise Details</template>
            <template v-else>View Exercise Details</template>
        </h1>

        <template v-if="isEditMode">
            <ExerciseDetailsForm :exercise="exercise"></ExerciseDetailsForm>
        </template>
        <template v-else>
            <ExerciseDetailsCard :exercise="exercise"></ExerciseDetailsCard>
        </template>
    </div>
</template>