/*
 * Mock Client API
 */
import { Client } from '../src/types/Client';
const _checkInDate = new Date('June 16, 1995 00:00:00')
const _clients: Array<Client> = [
    {
        Id: '0',
        FirstName: 'Simon',
        LastName: 'Bolivar',
        WeekNumber: 7,
        Email: 'test@gmail.com',
        LastCheckIn: _checkInDate,
        Phone: '(555) 555-5555'
    },
    {
        Id: '1',
        FirstName: 'Selina',
        LastName: 'Kyle',
        WeekNumber: 3,
        Email: 'test@gmail.com',
        LastCheckIn: _checkInDate,
        Phone: '(555) 555-5555'
    },
    {
        Id: '2',
        FirstName: 'Thor',
        LastName: 'Odinson',
        WeekNumber: 10,
        Email: 'test@gmail.com',
        LastCheckIn: _checkInDate,
        Phone: '(555) 555-5555'
    },
    {
        Id: '3',
        FirstName: 'Lebron',
        LastName: 'James',
        WeekNumber: 2,
        Email: 'test@gmail.com',
        LastCheckIn: _checkInDate,
        Phone: '(555) 555-5555'
    },
    {
        Id: '4',
        FirstName: 'James',
        LastName: 'Howlett',
        WeekNumber: 17,
        Email: 'test@gmail.com',
        LastCheckIn: _checkInDate,
        Phone: '(555) 555-5555'
    },
    {
        Id: '5',
        FirstName: 'Wade',
        LastName: 'Wilson',
        WeekNumber: 32,
        Email: 'test@gmail.com',
        LastCheckIn: _checkInDate,
        Phone: '(555) 555-5555'
    }
];

interface Callback {
    (arg0: Array<Client>, arg1: number): Array<Client>;
}

export default {
    getClients(cb: Callback) {
        setTimeout(() => {
            cb(_clients, 100);
        });
    }
}