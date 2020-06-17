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
            Id: 0,
            FirstName: 'Simon',
            LastName: 'Bolivar',
            WeekNumber: '7',
            Email: 'test@gmail.com',
            LastCheckIn: '06/01/2020',
            Phone: '(555) 555-5555'
        },
        {
            Id: 1,
            FirstName: 'Selina',
            LastName: 'Kyle',
            WeekNumber: '3'
        },
        {
            Id: 2,
            FirstName: 'Thor',
            LastName: 'Odinson',
            WeekNumber: '10',
            Email: 'test@gmail.com',
            LastCheckIn: '06/01/2020',
            Phone: '(555) 555-5555'
        },
        {
            Id: 3,
            FirstName: 'Lebron',
            LastName: 'James',
            WeekNumber: '2',
            Email: 'test@gmail.com',
            LastCheckIn: '06/01/2020',
            Phone: '(555) 555-5555'
        }, {
            Id: 4,
            FirstName: 'James',
            LastName: 'Howlett',
            WeekNumber: '17',
            Email: 'test@gmail.com',
            LastCheckIn: '06/01/2020',
            Phone: '(555) 555-5555'
        },
        {
            Id: 5,
            FirstName: 'Wade',
            LastName: 'Wilson',
            WeekNumber: '32',
            Email: 'test@gmail.com',
            LastCheckIn: '06/01/2020',
            Phone: '(555) 555-5555'
        }

    ];
}