import { GetterTree } from 'vuex';
import { ExercisesState, RootState } from '@app/types/types';

export const getters: GetterTree<ExercisesState, RootState> = {
    exerciseById: (state) => (id: string) => {
        return state.exercises.find(exercise => exercise.id === id);
    }
};