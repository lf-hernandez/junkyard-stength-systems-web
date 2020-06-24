<template>
    <div class="programs container pt-5">
        <div class="mb-5">
            <h1 class="text-left font-weight-light m-0">Programs</h1>
        </div>

        <div class="d-flex flex-nowrap">
            <div class="flex-column flex-shrink mr-4">
                <ProgramsSideNav :clients="clients"></ProgramsSideNav>

                <button class="btn btn-block btn-lg btn-dark mt-4">
                    <font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon>
                    Add Program
                </button>
            </div>

            <div class="flex-column flex-grow">
                <ProgramsGrid :clients="clients"></ProgramsGrid>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./Programs.ts"></script>