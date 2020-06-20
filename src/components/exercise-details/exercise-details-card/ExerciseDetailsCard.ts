import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ExerciseDetailsCard extends Vue {
    @Prop() exercise: any;

    muscles = [
        'Shoulders',
        'Chest',
        'Triceps',
        'Biceps',
        'Back',
        'Glutes',
        'Adductors',
        'Calves',
        'QL',
        'Hamstrings',
        'Quads',
        'Abs',
        'SITS'
    ];

    isActive(muscle: string, muscles: Array<string>) {
        return muscles.includes(muscle);
    }

    onEdit() {
        this.$router.push({name: 'exercise-details.edit', params: {exercise: this.exercise}});
    }

    onDelete() {
        alert('Are you sure you want to Delete?');
    }
}