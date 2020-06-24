<template>
    <div class="clientList">
        <ClientListCard
                v-for="client in clients"
                :key="client.id"
                :client="client"
                class="mb-4 shadow-sm rounded"
        ></ClientListCard>
    </div>
</template>
<script lang="ts" src="./ClientList.ts"></script>