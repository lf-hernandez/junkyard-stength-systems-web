import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class ExerciseLibrarySideNav extends Vue {
    muscleGroups: Array<string> = [
        'All',
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
