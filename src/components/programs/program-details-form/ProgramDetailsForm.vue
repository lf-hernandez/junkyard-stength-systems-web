<template>
    <div class="programDetailsForm">
        <form>
            <div class="form-group mb-5">
                <input
                    type="text"
                    class="form-control input-position-static"
                    id="programName"
                    aria-label="enter program name"
                    aria-describedby="programName"
                    placeholder="Program name"
                />
            </div>

            <div class="form-group row">
                <label for="programDuration" class="col-sm-2 col-form-label"
                    >Assign to client (optional)</label
                >
                <div class="col-sm-10">
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Choose Client</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="programDuration" class="col-sm-2 col-form-label">Weeks</label>
                <div class="col-sm-10">
                    <input
                        type="text"
                        class="form-control"
                        id="programDuration"
                        placeholder="Program duration"
                    />
                </div>
            </div>
            <div class="form-group row">
                <label for="sessionFrequency" class="col-sm-2 col-form-label"
                    >Sessions per week</label
                >
                <div class="col-sm-10">
                    <input
                        type="text"
                        class="form-control"
                        id="programDuration"
                        placeholder="Session frequency"
                    />
                </div>
            </div>

            <button
                class="btn btn-block btn-primary mt-5 mb-4"
                type="button"
                @click="pushProgramDesignRoute"
            >
                Proceed to program design
            </button>
        </form>
    </div>
</template>
<script lang="ts" src="./ProgramDetailsForm.ts"></script>
