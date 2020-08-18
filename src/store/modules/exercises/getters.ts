import { GetterTree } from 'vuex';
import { ExercisesState, RootState } from '@/types/types';

export const getters: GetterTree<ExercisesState, RootState> = {
    exerciseById: (state) => (id: string) => {
        return state.exercises.find((exercise) => exercise.id === id);
    },
    exercisesByCategory: (state) => (category: string) => {
        return state.exercises.filter((exercise) => exercise.muscles.includes(category));
    }
};
