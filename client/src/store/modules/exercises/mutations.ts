import { MutationTree } from 'vuex';
import { Exercise, ExercisesState } from '@app/types/types';

export const mutations: MutationTree<ExercisesState> = {
    setClients(state, exercises: Array<Exercise>) {
        state.exercises = exercises;
    },
    addClient(state, newExercise: Exercise) {
        state.exercises.push(newExercise);
    },
    updateClient(state, updatedExercise: Exercise) {
        const index = state.exercises.findIndex(exercise => exercise.id === updatedExercise.id);

        state.exercises.splice(index, 1, updatedExercise);
        state.exercises = [...state.exercises];
    },
    deleteClient(state, deletedExercise: Exercise) {
        state.exercises = [...state.exercises.filter(exercise => exercise.id !== deletedExercise.id)];
    }
};