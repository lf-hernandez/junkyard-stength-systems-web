import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Exercise } from '@/types/types';

@Component
export default class ExerciseDetailsCard extends Vue {
    @Prop() exercise!: Exercise;

    muscles = [
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

    isActive(muscle: string, muscles: Array<string>) {
        return muscles.includes(muscle);
    }

    isEmbeddedVideo() {
        return this.exercise.link.includes('youtube' || 'youtu.be' || 'vimeo' || 'drive');
    }

    onEdit() {
        const normalizedSlug = this.exercise.name
            .split(' ')
            .join('-')
            .toLowerCase();
        this.$router.push({
            name: 'exercise-details.edit',
            params: { id: this.exercise.id, slug: normalizedSlug }
        });
    }

    onDelete() {
        alert('Are you sure you want to Delete?');
    }
}
