<template>
    <div class="programDesignForm">
        <form>
            <div class="input-group mb-5">
                <input
                    type="text"
                    class="form-control input-position-static"
                    aria-label="session block input"
                    placeholder="Session block"
                />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">
                        <font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon>
                    </button>
                </div>
            </div>
            <hr />
            <template v-if="exerciseBag">
                <template v-for="exercise in exerciseBag">
                    <ProgramExerciseVariables
                        :key="exercise.id"
                        :exerciseName="exercise.name"
                    ></ProgramExerciseVariables>
                </template>
            </template>
            <label for="exerciseSelect">Add exercise</label>
            <div class="input-group mb-5">
                <div class="input-group-prepend">
                    <select v-model="selectedExercise">
                        <option disabled value="">Choose exercise</option>
                        <option v-for="exercise in exercises" :key="exercise.id" :value="exercise">
                            {{ exercise.name }}
                        </option>
                    </select>
                </div>
                <div class="input-group-append">
                    <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="addExercise(selectedExercise)"
                    >
                        <font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
<script lang="ts" src="./ProgramDesignForm.ts"></script>
