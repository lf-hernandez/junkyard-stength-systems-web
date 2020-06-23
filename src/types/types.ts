export interface Exercise {
    id: string;
    name: string;
    description: string;
    movementType: string;
    muscles: Array<string>;
}

export interface Client {
    Id: string;
    FirstName: string;
    LastName: string;
    WeekNumber: number;
    Email: string;
    Phone: string;
    LastCheckIn: Date;
}

export interface RootState {
}

export interface ClientsState {
    clients: [];
}
