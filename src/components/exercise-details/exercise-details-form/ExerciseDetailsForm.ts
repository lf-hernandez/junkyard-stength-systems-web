import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import { Exercise } from '@/types/types';

@Component
export default class ExerciseDetailsForm extends Vue {
    @Prop() exercise: Exercise | undefined;

    movementTypes: Array<object> = [
        {
            text: 'Main',
            value: 'Main'
        },
        {
            text: 'Assistance',
            value: 'Assistance'
        },
        {
            text: 'Accessory',
            value: 'Accessory'
        }
    ];

    options: Array<object> = [
        {
            value: 'chest',
            name: 'Chest'
        },
        {
            value: 'traps',
            name: 'Traps'
        },
        {
            value: 'shoulders',
            name: 'Shoulders'
        },
        {
            value: 'triceps',
            name: 'Triceps'
        },
        {
            value: 'biceps',
            name: 'Biceps'
        },
        {
            value: 'back',
            name: 'Back'
        },
        {
            value: 'glutes',
            name: 'Glutes'
        },
        {
            value: 'adductors',
            name: 'Adductors'
        },
        {
            value: 'calves',
            name: 'Calves'
        },
        {
            value: 'ql',
            name: 'QL'
        },
        {
            value: 'hamstrings',
            name: 'Hamstrings'
        },
        {
            value: 'quads',
            name: 'Quads'
        },
        {
            value: 'abs',
            name: 'Abs'
        },
        {
            value: 'sits',
            name: 'SITS'
        }
    ];

    onCancel() {
        this.$router.go(-1);
    }
}
