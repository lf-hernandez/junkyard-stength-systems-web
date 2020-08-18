import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';

import ExerciseLibrarySideNav from '@/components/exercise-library/exercise-side-nav/ExerciseLibrarySideNav.vue';
import ExerciseLibraryGrid from '@/components/exercise-library/exercise-library-grid/ExerciseLibraryGrid.vue';

import { Exercise } from '@/types/types';
import { Action, State, Getter } from 'vuex-class';

const namespace = 'exercises';

@Component({
    components: {
        ExerciseLibrarySideNav,
        ExerciseLibraryGrid
    }
})
export default class ExerciseLibrary extends Vue {
    @State('exercises', { namespace }) exercises!: Array<Exercise>;
    @Action('getExercises', { namespace }) getExercises!: () => void;
    @Getter('exercisesByCategory', { namespace }) exercisesByCategory!: (
        category: string
    ) => Array<Exercise>;

    @Prop() category!: string;

    async created() {
        try {
            if (this.exercises.length < 1) {
                await this.getExercises();
            }
        } catch (e) {
            console.log(e);
        }
    }

    @Watch('category')
    onCategoryChange() {
        if (this.category === 'all') {
            this.$router.push({ name: 'exercise-library' });
        }
    }

    onAddExercise() {
        this.$router.push({ name: 'exercise-library.add' });
    }
}
