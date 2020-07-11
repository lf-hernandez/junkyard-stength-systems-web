<template>
    <div class="exerciseDetailsForm">
        <form>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="exercise-name">Name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="exercise-name"
                            aria-describedby="exercise-name"
                            v-model="exercise.name"
                        />
                    </div>

                    <div class="form-group">
                        <label for="exercise-description">Description</label>
                        <textarea
                            type="text"
                            class="form-control"
                            id="exercise-description"
                            aria-describedby="exercise-description"
                            v-model="exercise.description"
                        />
                    </div>

                    <div class="form-group">
                        <label for="exercise-link">Link</label>
                        <input
                            type="text"
                            class="form-control"
                            name="exercise-link"
                            id="exercise-link"
                            aria-describedby="exercise-link"
                            v-model="exercise.link"
                        />
                    </div>

                    <div class="form-group">
                        <label for="inputState">Movement Type</label>
                        <select
                            id="inputState"
                            class="form-control"
                            v-model="exercise.movementType"
                        >
                            <option
                                v-for="movementType in movementTypes"
                                :value="movementType.value"
                                :key="movementType.text"
                                >{{ movementType.text }}
                            </option>
                        </select>
                    </div>

                    <hr class="my-4" />

                    <div class="form-group">
                        <h3 class="mb-4 font-weight-light text-center">
                            Muscle Groups
                        </h3>
                        <div class="d-flex flex-wrap">
                            <div
                                class="form-check flex-fill"
                                v-for="option in options"
                                :key="option.value"
                            >
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    :id="option.name"
                                    :value="option.value"
                                    v-model="exercise.muscles"
                                />
                                <label class="form-check-label" :for="option.name">{{option.value}}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col">
                    <button type="button" class="btn btn-block btn-secondary" @click="onCancel">
                        <font-awesome-icon :icon="['fas', 'times-circle']"></font-awesome-icon>
                        Cancel
                    </button>
                </div>
                <div class="col">
                    <button type="submit" class="btn btn-block btn-primary">
                        <font-awesome-icon :icon="['fas', 'save']"></font-awesome-icon>
                        Save
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
<script lang="ts" src="./ExerciseDetailsForm.ts"></script>
