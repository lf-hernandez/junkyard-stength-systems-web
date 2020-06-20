<script lang="ts" src="./ExerciseDetails.ts"></script>

<template>
    <div class="exerciseDetails">
        <div class="container">
            <h1 class="text-left font-weight-light m-0">Exercise Details</h1>

            <div class="row mt-5">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">
                                {{ exercise.name }}
                            </h3>

                            <hr>

                            {{ exercise.description }}

                            <hr>
                            <h5 class="card-title">Muscle Groups</h5>
                            <span class="badge badge-pill badge-success mx-3">Chest</span>
                            <span class="badge badge-pill badge-success mx-3">Triceps</span>
                            <span class="badge badge-pill badge-success mx-3">Shoulders</span>
                            <span class="badge badge-pill badge-secondary mx-3">Biceps</span>
                            <span class="badge badge-pill badge-secondary mx-3">Back</span>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col">
                    <button class="btn btn-block btn-primary">
                        <font-awesome-icon icon="edit"></font-awesome-icon>
                        Edit
                    </button>
                </div>
                <div class="col">
                    <button class="btn btn-block btn-danger">
                        <font-awesome-icon icon="trash-alt"></font-awesome-icon>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>