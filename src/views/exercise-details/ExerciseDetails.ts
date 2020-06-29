import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import ExerciseDetailsForm from '@/components/exercise-details/exercise-details-form/ExerciseDetailsForm.vue';
import ExerciseDetailsCard from '@/components/exercise-details/exercise-details-card/ExerciseDetailsCard.vue';
import { Getter } from 'vuex-class';

const namespace = 'exercises';

@Component({
    components: {
        ExerciseDetailsCard,
        ExerciseDetailsForm
    }
})
export default class ExerciseDetails extends Vue {
    @Prop() id: string | undefined;
    @Getter('exerciseById', { namespace }) getExerciseById;

    exercise = {};

    created() {
        this.exercise = this.getExerciseById(this.id);
    }

    get isEditMode() {
        return this.$route.name === 'exercise-details.edit';
    }
}
