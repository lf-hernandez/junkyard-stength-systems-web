import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Exercise } from '@/types/types';

@Component
export default class ExerciseDetailsCard extends Vue {
    @Prop() exercise!: Exercise;

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
