<script lang="ts" src="./ExerciseDetails.ts"></script>

<template>
    <div class="exerciseDetails">
        <div class="container">
            <h1 class="text-left font-weight-light">Exercise Details</h1>

            <div class="row mt-5">
                <div class="col">
                    <div class="card">
                        {{ exercise.name }}

                        <hr>

                        {{ exercise.description }}
                    </div>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col">
                    <button class="btn btn-block btn-success">
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