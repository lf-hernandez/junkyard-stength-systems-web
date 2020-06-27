import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ExerciseLibrarySideNav from '@app/components/exercise-library/exercise-side-nav/ExerciseLibrarySideNav.vue';
import ExerciseLibraryGrid from '@app/components/exercise-library/exercise-library-grid/ExerciseLibraryGrid.vue';

import { Exercise } from '@app/types/types';
import { Action, State } from 'vuex-class';

const namespace = 'exercises';

@Component({
    components: {
        ExerciseLibrarySideNav,
        ExerciseLibraryGrid
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

    async onAddExercise() {
        await this.$router.push({name: 'exercise-library.add'});
    }
}