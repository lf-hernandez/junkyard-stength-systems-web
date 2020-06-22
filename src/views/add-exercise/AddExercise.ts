import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import ExerciseDetailsForm from '@/components/exercise-details/exercise-details-form/ExerciseDetailsForm.vue';
import { Exercise } from '@/types/Exercise';

@Component({
    components: {
        ExerciseDetailsForm
    }
})
export default class AddExercise extends Vue {
    exercise = {};

    created() {
        this.exercise = {id: '', name: '', description: '', movementType: '', muscles: []};
    }

}