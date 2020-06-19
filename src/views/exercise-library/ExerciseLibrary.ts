import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ExerciseLibrarySideNav from '@/components/exercise-library/exercise-side-nav/ExerciseLibrarySideNav.vue';
import ExerciseLibraryCard from '@/components/exercise-library/exercise-library-card/ExerciseLibraryCard.vue';

@Component({
    components: {
        ExerciseLibrarySideNav,
        ExerciseLibraryCard
    }
})
export default class ExerciseLibrary extends Vue {
    exercises = [
        {
            id: 0,
            name: 'Exercise Name Goes Here...',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 1,
            name: 'Exercise Name Goes Here...',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 2,
            name: 'Exercise Name Goes Here...',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 3,
            name: 'Exercise Name Goes Here...',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 4,
            name: 'Exercise Name Goes Here...',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 5,
            name: 'Exercise Name Goes Here...',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 6,
            name: 'Exercise Name Goes Here...',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ];

    onClick() {
        this.$router.push({ name: 'exercise-details'})
    }
}