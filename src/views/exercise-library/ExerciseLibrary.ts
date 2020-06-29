import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ExerciseLibrarySideNav from '@/components/exercise-library/exercise-side-nav/ExerciseLibrarySideNav.vue';
import ExerciseLibraryGrid from '@/components/exercise-library/exercise-library-grid/ExerciseLibraryGrid.vue';

import { Exercise } from '@/types/types';
import { Action, State } from 'vuex-class';

const namespace = 'exercises';

@Component({
    components: {
        ExerciseLibrarySideNav,
        ExerciseLibraryGrid
    }
})
export default class ExerciseLibrary extends Vue {
    @State('exercises', { namespace }) exercises: Array<Exercise> | undefined;
    @Action('getExercises', { namespace }) getExercises;

    async created() {
        try {
            await this.getExercises();
        } catch (e) {
            console.log(e);
        }
    }

    async onAddExercise() {
        await this.$router.push({ name: 'exercise-library.add' });
    }
}
