<template>
    <div class="Clients">
        <div class="container">
            <h1 class="text-left font-weight-light m-0">Client Management</h1>
            <br><br>
            <ClientListViewer></ClientListViewer>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    import ClientListViewer from '@/components/clients/ClientListViewer.vue'

    @Component({
        components: {
            ClientListViewer
        }
    })
    export default class Clients extends Vue {}
</script>