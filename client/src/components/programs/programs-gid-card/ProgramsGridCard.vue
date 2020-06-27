<template>
    <div class="programsGridCard card p-0">
        <div class="card-header text-center">
            {{ getFullName(client.id) }}
        </div>
        <div class="card-body">
            <p>Week: {{ client.weekNumber }}</p>
            <p>Last Check in: {{ client.lastCheckIn }}</p>
        </div>
    </div>
</template>

<script lang="ts" src="./ProgramsGridCard.ts"></script>
<style lang="scss" src="./ProgramGridCard.scss" scoped></style>