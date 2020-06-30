import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ProgramExerciseVariables from '@/components/programs/exercise-variables-input/ExerciseVariablesInput.vue';
import { Exercise } from '@/types/types';
import { Action, State } from 'vuex-class';

const namespace = 'exercises';
@Component({
    components: {
        ProgramExerciseVariables
    }
})
export default class ProgramDesignForm extends Vue {
    @State('exercises', { namespace }) exercises: Array<Exercise> | undefined;
    @Action('getExercises', { namespace }) getExercises;

    exerciseBag: Array<Exercise> = [];
    selectedExercise: string | Exercise = '';


    async created() {
        try {
            if(this.exercises.length < 1) {
                await this.getExercises();
            }
        } catch (e) {
            console.log(e);
        }
    }

    addExercise(exercise: Exercise) {
        if(exercise) {
            this.exerciseBag.push(exercise);
            this.selectedExercise = '';
        }
    }

}