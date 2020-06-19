import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ExerciseDetails extends Vue {
    @Prop() exercise: any;


}