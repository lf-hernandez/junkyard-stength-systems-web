import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ExerciseLibrarySideNav from '@/components/exercise-library/exercise-side-nav/ExerciseLibrarySideNav.vue';
import ExerciseLibraryCard from '@/components/exercise-library/exercise-library-card/ExerciseLibraryCard.vue';

import { Exercise } from '@/types/types';
import { Action, State } from 'vuex-class';

const namespace = 'exercises';

@Component({
    components: {
        ExerciseLibrarySideNav,
        ExerciseLibraryCard
    }
})
export default class ExerciseLibrary extends Vue {
    @State('exercises', {namespace}) exercises: Array<Exercise>;
    @Action('getExercises', {namespace}) getExercises: any;

    async created() {
        try {
            await this.getExercises();
        } catch (e) {
            console.log(e);
        }

    }

    async onClick(exercise: Exercise) {
        const normalizedSlug = exercise.name.split(' ').join('-').toLowerCase();
        await this.$router.push({
            name: 'exercise-details.view',
            params: {
                id: exercise.id,
                slug: normalizedSlug
            }
        });
    }

    async onAddExercise() {
        await this.$router.push({name: 'exercise-library.add'});
    }
}