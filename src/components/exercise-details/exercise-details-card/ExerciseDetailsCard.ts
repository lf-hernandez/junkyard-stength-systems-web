import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ExerciseDetailsCard extends Vue {
    @Prop() exercise: any;
}