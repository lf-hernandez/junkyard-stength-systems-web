import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import ExerciseLibraryCard from '@/components/exercise-library/exercise-library-card/ExerciseLibraryCard.vue';

import { Exercise } from '@/types/types';

@Component({
    components: {
        ExerciseLibraryCard
    }
})
export default class ExerciseLibraryGrid extends Vue {
    @Prop() exercises: Array<Exercise> | undefined;

    pushExerciseDetailsRoute(exercise: Exercise) {
        const normalizedSlug = exercise.name
            .split(' ')
            .join('-')
            .toLowerCase();
        this.$router.push({
            name: 'exercise-details.view',
            params: {
                id: exercise.id,
                slug: normalizedSlug
            }
        });
    }
}
