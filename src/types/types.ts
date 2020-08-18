export interface Exercise {
    id: string;
    name: string;
    description: string;
    movementType: string;
    link: string;
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

export interface Program {
    id: string;
    name: string;
    client: Client;
    weeks: number;
    frequency: number;
    sessions: Array<Session>;
}

export interface Session {
    id: string;
    name: string;
    exercisesPrescriptions: Array<ExercisePrescription>;
}

export interface ExercisePrescription {
    id: string;
    exercise: Exercise;
    sets: number;
    reps: number;
    time: string;
    distance: string;
    restPeriod: string;
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

export interface ProgramsState {
    programs: Array<Program>;
}
