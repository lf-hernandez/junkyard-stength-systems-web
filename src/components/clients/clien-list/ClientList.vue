<script lang="ts" src="./ClientList.ts"></script>

<template>
    <div class="clientList">
        <ClientCard
                v-for="client in clients"
                :key="client.name"
                :name="client.Name"
                :weekNumber="client.WeekNumber"
                class="mb-4 shadow-sm rounded"
        ></ClientCard>
    </div>
</template>

