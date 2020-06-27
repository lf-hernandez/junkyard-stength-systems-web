import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ExerciseLibraryCard extends Vue {
    @Prop() exercise: any;
}