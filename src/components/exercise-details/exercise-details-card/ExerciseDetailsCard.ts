import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ExerciseDetailsCard extends Vue {
    @Prop() exercise: any;

    onEdit() {
        this.$router.push({name: 'exercise-details.edit', params: { exercise: this.exercise } });
    }

    onDelete() {
            alert('Are you sure you want to Delete?')
    }
}