<script lang="ts" src="./ExerciseDetails.ts"></script>

<template>
    <div class="exerciseDetails">
        <div class="container">
            <h1 class="text-left font-weight-light m-0">Exercise Details</h1>

           <template v-if="isEditMode">
               <ExerciseDetailsForm :exercise="exercise"></ExerciseDetailsForm>
           </template>
            <template v-else>
                <ExerciseDetailsCard :exercise="exercise"></ExerciseDetailsCard>
            </template>
        </div>
    </div>
</template>