import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ClientCard from '@/components/clients/client-card/ClientCard.vue';

@Component({
    components: {
        ClientCard
    }
})
export default class ClientList extends Vue {
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
        }, {
            Name: 'James Howlett',
            WeekNumber: '17'
        },
        {
            Name: 'Wade Wilson',
            WeekNumber: '32'
        }

    ];
}