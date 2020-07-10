<template>
    <div class="programs container">
        <div class="mb-5">
            <h1 class="text-left font-weight-light m-0">Programs</h1>
        </div>

        <div class="d-flex flex-nowrap">
            <div class="flex-column flex-shrink mr-4">
                <ProgramsSideNav :clients="clients"></ProgramsSideNav>

                <button
                    class="btn btn-block btn-lg btn-dark mt-4"
                    type="button"
                    @click="pushAddProgramRoute"
                >
                    <font-awesome-icon
                        :icon="['fas', 'plus']"
                    ></font-awesome-icon>
                    Program
                </button>
                <button class="btn btn-block btn-lg btn-dark mt-4">
                    <font-awesome-icon
                        :icon="['fas', 'plus']"
                    ></font-awesome-icon>
                    Template
                </button>
            </div>

            <div class="flex-column flex-grow">
                <ProgramsGrid :clients="clients"></ProgramsGrid>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./Programs.ts"></script>
