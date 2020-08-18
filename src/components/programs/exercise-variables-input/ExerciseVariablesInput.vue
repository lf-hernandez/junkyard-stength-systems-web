<template>
    <div class="exerciseVariablesInput">
        <form class="form-inline">
            <div class="form-row">
                <div class="form-group col-auto m-2">
                    <span>{{ exerciseName }}</span>
                </div>
                <div class="form-group col-auto m-2">
                    <select v-model="selectedRpe">
                        <option disabled value="0">Select RPE</option>
                        <option v-for="rate in rpeRates" :key="rate.value" :value="rate.value">
                            {{ rate.text }}
                        </option>
                    </select>
                </div>
                <div class="form-group col-auto m-2">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Sets"
                        name="sets"
                        id="sets"
                        maxlength="2"
                    />
                </div>
                <div class="form-group col-auto m-2">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Reps"
                        name="reps"
                        id="reps"
                        maxlength="2"
                    />
                </div>
                <div class="form-group col-auto m-2">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Weight(lbs)"
                        name="weight"
                        id="weight"
                        maxlength="3"
                    />
                </div>
                <div class="form-group col-auto m-2">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Distance(ft)"
                        name="distance"
                        id="distance"
                        maxlength="4"
                    />
                </div>
                <div class="form-group col-auto m-2">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Time(secs)"
                        name="time"
                        id="time"
                        maxlength="6"
                    />
                </div>
            </div>
        </form>
    </div>
</template>
<script lang="ts" src="./ExerciseVariablesInput.ts"></script>
