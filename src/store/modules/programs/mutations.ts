import { MutationTree } from 'vuex';
import { Program, ProgramsState } from '@/types/types';

export const mutations: MutationTree<ProgramsState> = {
    setPrograms(state, programs: Array<Program>) {
        state.programs = programs;
    },
    addProgram(state, newProgram: Program) {
        state.programs.push(newProgram);
    },
    updateProgram(state, updatedProgram: Program) {
        const index = state.programs.findIndex((program) => program.id === updatedProgram.id);

        state.programs.splice(index, 1, updatedProgram);
        state.programs = [...state.programs];
    },
    deleteProgram(state, deletedProgram: Program) {
        state.programs = [...state.programs.filter((program) => program.id !== deletedProgram.id)];
    }
};
