<template>
    <div class="clients container pt-5">
        <h1 class="text-left font-weight-light m-0">Client Management</h1>
        <br><br>
        <ClientList :clients="clients"></ClientList>
    </div>
</template>
<script lang="ts" src="./Clients.ts"></script>