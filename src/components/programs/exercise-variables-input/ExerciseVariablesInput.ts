import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ExerciseVariablesInput extends Vue {
    @Prop() exerciseName: string | undefined;

    created() {
        console.log(this.exerciseName);
    }

    rpeRates = [
        {
            value: 5,
            text: '5'
        },
        {
            value: 6,
            text: '6'
        },
        {
            value: 7,
            text: '7'
        },
        {
            value: 8,
            text: '8'
        },
        {
            value: 9,
            text: '9'
        },
        {
            value: 10,
            text: '10'
        }
    ];

    selectedRpe = 0;
}
