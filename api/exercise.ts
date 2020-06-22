/*
 * Mock Exercises API
 */

import { Exercise } from '../src/types/Exercise';

const _exercises: Array<Exercise> = [
    {
        id: '0',
        name: 'Overhead Press',
        description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        movementType: 'Main',
        muscles: ['Shoulders', 'Chest', 'Triceps']
    },
    {
        id: '1',
        name: 'Bench Press',
        description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        movementType: 'Main',
        muscles: ['Shoulders', 'Chest', 'Triceps']
    },
    {
        id: '2',
        name: 'Squat',
        description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        movementType: 'Main',
        muscles: ['Quads', 'Glutes', 'Hamstrings']
    },
    {
        id: '3',
        name: 'Front Squat',
        description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        movementType: 'Assistance',
        muscles: ['Quads', 'Glutes', 'Hamstrings']
    },
    {
        id: '4',
        name: 'Hamstring Curl',
        description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        movementType: 'Accessory',
        muscles: ['Hamstrings']
    },
    {
        id: '5',
        name: 'French Press',
        description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        movementType: 'Accessory',
        muscles: ['Triceps']
    },
    {
        id: '6',
        name: 'Deadlift',
        description: 'Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        movementType: 'Main',
        muscles: ['Back', 'Traps', 'Hamstrings']
    }
];

interface Callback {
    (arg0: Array<Exercise>, arg1: number): Array<Exercise>;
}

export default {
    getExercises(cb: Callback) {
        setTimeout(() => {
            cb(_exercises, 100);
        });
    }
}