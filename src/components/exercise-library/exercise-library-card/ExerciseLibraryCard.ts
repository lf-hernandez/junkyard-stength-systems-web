import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Exercise } from '@/types/types';

@Component
export default class ExerciseLibraryCard extends Vue {
    @Prop() exercise: Exercise | undefined;
}
