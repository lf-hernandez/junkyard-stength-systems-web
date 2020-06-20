import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ExerciseDetailsForm extends Vue {
    @Prop() exercise: any;
    
    checkedValues = [];
    options = [
        {
            name: 'Chest',
            value: 'chest'
        },
        {
            name: 'Traps',
            value: 'traps'
        },
        {
            name: 'Shoulders',
            value: 'shoulders'
        },
        {
            name: 'Triceps',
            value: 'triceps'
        }, {
            name: 'Biceps',
            value: 'biceps'
        }, {
            name: 'Back',
            value: 'back'
        },
        {
            name: 'Glutes',
            value: 'glutes'
        },
        {
            name: 'Hamstrings',
            value: 'hamstrings'
        },
        {
            name: 'Quads',
            value: 'quads'
        },
        {
            name: 'Abs',
            value: 'abs'
        },
        {
            name: 'SITS',
            value: 'sits'
        },
    ];
}