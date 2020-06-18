<script lang="ts" src="./ClientList.ts"></script>

<template>
    <div class="clientList" v-if="IsClientsLoaded">
        {{clients}}
        <ClientCard
                v-for="client in clients"
                :key="client.Id"
                :client="client"
                class="mb-4 shadow-sm rounded"
        ></ClientCard>
    </div>
</template>

