import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import ExerciseDetailsForm from '@/components/exercise-details/exercise-details-form/ExerciseDetailsForm.vue';
import ExerciseDetailsCard from '@/components/exercise-details/exercise-details-card/ExerciseDetailsCard.vue';

@Component({
    components: {
        ExerciseDetailsCard,
        ExerciseDetailsForm
    }
})
export default class ExerciseDetails extends Vue {
    @Prop() exercise: any;

    get isEditMode() {
        return this.$route.name === 'exercise-details.edit'
    }
}