<script lang="ts" src="./ExerciseDetailsForm.ts"></script>

<template>
    <div class="exerciseDetailsForm">
        <form>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="exercise-name">Name</label>
                        <input type="text" class="form-control" id="exercise-name" aria-describedby="exercise-name"
                               v-model="exercise.name"/>
                    </div>

                    <div class="form-group">
                        <label for="exercise-description">Description</label>
                        <textarea type="text" class="form-control" id="exercise-description"
                                  aria-describedby="exercise-description"
                                  v-model="exercise.description"/>
                    </div>

                    <hr>

                    <div class="form-group">
                        <h3>Muscle Groups</h3>
                        <div v-for="option in options" :key="option.value">
                            <input type="checkbox" :id="option.name" :value="option.Value" v-model="checkedValues">
                            <label :for="option.name">{{option.Value}}</label>
                        </div>

                    </div>
                </div>

            </div>
            <div class="row mt-5">
                <div class="col">
                    <button type="submit" class="btn btn-block btn-primary">Save</button>
                </div>
            </div>
        </form>
    </div>
</template>