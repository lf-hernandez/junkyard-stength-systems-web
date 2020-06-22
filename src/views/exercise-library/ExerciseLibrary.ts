import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ExerciseLibrarySideNav from '@/components/exercise-library/exercise-side-nav/ExerciseLibrarySideNav.vue';
import ExerciseLibraryCard from '@/components/exercise-library/exercise-library-card/ExerciseLibraryCard.vue';
import { Exercise } from '@/types/Exercise';

@Component({
    components: {
        ExerciseLibrarySideNav,
        ExerciseLibraryCard
    }
})
export default class ExerciseLibrary extends Vue {
    exercises: Array<Exercise> = [
        {
            id: '0',
            name: 'Overhead Press',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            movementType: 'Main',
            muscles: ['Shoulders', 'Chest', 'Triceps']
        },
        {
            id: '1',
            name: 'Bench Press',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            movementType: 'Main',
            muscles: ['Shoulders', 'Chest', 'Triceps']
        },
        {
            id: '2',
            name: 'Squat',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            movementType: 'Main',
            muscles: ['Quads', 'Glutes', 'Hamstrings']
        },
        {
            id: '3',
            name: 'Front Squat',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            movementType: 'Assistance',
            muscles: ['Quads', 'Glutes', 'Hamstrings']
        },
        {
            id: '4',
            name: 'Hamstring Curl',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            movementType: 'Accessory',
            muscles: ['Hamstrings']
        },
        {
            id: '5',
            name: 'French Press',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            movementType: 'Accessory',
            muscles: ['Triceps']
        },
        {
            id: '6',
            name: 'Deadlift',
            description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            movementType: 'Main',
            muscles: ['Back', 'Traps', 'Hamstrings']
        }
    ];

    async onClick(exercise: Exercise) {
        await this.$router.push({
            name: 'exercise-details.view',
            params: {
                exerciseName: exercise.name,
                exercise
            }
        });
    }

    async onAddExercise() {
        await this.$router.push({name: 'exercise-library.add'});
    }
}