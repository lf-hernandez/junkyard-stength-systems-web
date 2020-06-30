export interface Exercise {
    id: string;
    name: string;
    description: string;
    movementType: string;
    muscles: Array<string>;
}

export interface Client {
    id: string;
    firstName: string;
    lastName: string;
    weekNumber: number;
    email: string;
    phone: string;
    lastCheckIn: Date;
}

export interface RootState {
    isLoaded: boolean;
}

export interface ClientsState {
    clients: Array<Client>;
}

export interface ExercisesState {
    exercises: Array<Exercise>;
}
