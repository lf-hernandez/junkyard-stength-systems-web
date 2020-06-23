<template>
    <div class="clientList">
        <ClientCard
                v-for="client in clientsState.clients"
                :key="client.Id"
                :client="client"
                class="mb-4 shadow-sm rounded"
        ></ClientCard>
    </div>
</template>
<script lang="ts" src="./ClientList.ts"></script>