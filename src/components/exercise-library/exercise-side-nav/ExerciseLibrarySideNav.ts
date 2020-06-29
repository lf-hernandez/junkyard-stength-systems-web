import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class ExerciseLibrarySideNav extends Vue {
    muscleGroups: Array<string> = [
        'Chest',
        'Triceps',
        'Biceps',
        'Traps',
        'Glutes',
        'Hamstrings',
        'Quads',
        'Abs',
        'SITS'
    ];

}