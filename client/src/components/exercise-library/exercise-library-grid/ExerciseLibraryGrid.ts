import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import ExerciseLibraryCard from '@app/components/exercise-library/exercise-library-card/ExerciseLibraryCard.vue';

import { Exercise } from '@app/types/types';

@Component({
    components: {
        ExerciseLibraryCard
    }
})
export default class ExerciseLibraryGrid extends Vue {
    @Prop() exercises: Array<Exercise>;

    async pushExerciseDetailsRoute(exercise: Exercise) {
        const normalizedSlug = exercise.name.split(' ').join('-').toLowerCase();
        await this.$router.push({
            name: 'exercise-details.view',
            params: {
                id: exercise.id,
                slug: normalizedSlug
            }
        });
    }
}