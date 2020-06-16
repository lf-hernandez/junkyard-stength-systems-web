<template>
    <div class="ClientListViewer">
        <ClientCard
                v-for="client in clients"
                :key="client.name"
                :name="client.Name"
                :weekNumber="client.WeekNumber"
                class="mb-4 shadow-sm rounded"
        ></ClientCard>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    import ClientCard from '@/components/clients/ClientCard.vue'

    @Component({
        components: {
            ClientCard
        }
    })
    export default class ClientListViewer extends Vue {
        clients = [
            {
                Name: 'Simon Bolivar',
                WeekNumber: '7'
            },
            {
                Name: 'Selina Kyle',
                WeekNumber: '3'
            },
            {
                Name: 'Thor Odinson',
                WeekNumber: '10'
            },
            {
                Name: 'Lebron James',
                WeekNumber: '2'
            },{
                Name: 'James Howlett',
                WeekNumber: '17'
            },
            {
                Name: 'Wade Wilson',
                WeekNumber: '32'
            },

        ]
    }
</script>