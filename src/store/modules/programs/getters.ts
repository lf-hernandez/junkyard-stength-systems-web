import { GetterTree } from 'vuex';
import { ProgramsState, RootState } from '@/types/types';

export const getters: GetterTree<ProgramsState, RootState> = {
    programById: (state) => (id: string) => {
        return state.programs.find((program) => program.id === id);
    }
};
