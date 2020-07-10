import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import ExerciseDetailsForm from '@/components/exercise-details/exercise-details-form/ExerciseDetailsForm.vue';
import ExerciseDetailsCard from '@/components/exercise-details/exercise-details-card/ExerciseDetailsCard.vue';
import { Getter } from 'vuex-class';
import { Exercise } from '@/types/types';

const namespace = 'exercises';

@Component({
    components: {
        ExerciseDetailsCard,
        ExerciseDetailsForm
    }
})
export default class ExerciseDetails extends Vue {
    @Prop() id!: string;
    @Getter('exerciseById', { namespace }) getExerciseById!: (id: string) => Exercise;

    exercise = {};

    created() {
        this.exercise = this.getExerciseById(this.id);
    }

    get isEditMode() {
        return this.$route.name === 'exercise-details.edit';
    }
}
