import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ExerciseDetailsForm extends Vue {
    @Prop() exercise: any;

    options = [
        {
            value: 'Chest',
            name: 'chest'
        },
        {
            value: 'Traps',
            name: 'traps'
        },
        {
            value: 'Shoulders',
            name: 'shoulders'
        },
        {
            value: 'Triceps',
            name: 'triceps'
        }, {
            value: 'Biceps',
            name: 'biceps'
        }, {
            value: 'Back',
            name: 'back'
        },
        {
            value: 'Glutes',
            name: 'glutes'
        },
        {
            value: 'Hamstrings',
            name: 'hamstrings'
        },
        {
            value: 'Quads',
            name: 'quads'
        },
        {
            value: 'Abs',
            name: 'abs'
        },
        {
            value: 'SITS',
            name: 'sits'
        }
    ];
}