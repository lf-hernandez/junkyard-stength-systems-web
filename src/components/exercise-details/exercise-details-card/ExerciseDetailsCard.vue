<template>
    <div class="exerciseDetailsCard">
        <div class="row mt-5">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">{{ exercise.name }}</h3>

                        <hr />
                        {{ exercise.description }}
                        <hr />

                        <div class="my-2">
                            <h5>Movement Type:</h5>
                            <span class="badge badge-warning">{{ exercise.movementType }}</span>
                        </div>

                        <template v-if="isEmbeddedVideo">
                            <iframe
                                width="560"
                                height="315"
                                :src="exercise.link"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </template>
                        <template v-else>
                            <a :href="exercise.link">{{ exercise.link }}</a>
                        </template>

                        <hr />

                        <h5 class="card-title">Muscle Groups</h5>

                        <div class="d-flex">
                            <div class="mr-2" v-for="muscle in muscles" :key="muscle">
                                <span
                                    class="badge badge-pill"
                                    :class="{
                                        'badge-success': isActive(muscle, exercise.muscles),
                                        'badge-secondary': !isActive(muscle, exercise.muscles)
                                    }"
                                    >{{ muscle }}</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col">
                <button class="btn btn-block btn-danger" type="button" @click="onDelete">
                    <font-awesome-icon :icon="['fas', 'trash-alt']"></font-awesome-icon>
                    Delete
                </button>
            </div>
            <div class="col">
                <button class="btn btn-block btn-primary" type="button" @click="onEdit">
                    <font-awesome-icon :icon="['fas', 'edit']"></font-awesome-icon>
                    Edit
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./ExerciseDetailsCard.ts"></script>
