<template>
    <div class="signUpForm">
        <div class="card">
            <div class="card-body text-left">
                <form>
                    <div class="form-group">
                        <label for="userName">Userame</label>
                        <input
                            type="text"
                            class="form-control"
                            id="userName"
                            aria-describedby="userNam"
                        />
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            aria-describedby="email"
                        />
                    </div>

                    <div class="form-group">
                        <label for="Password">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                        />
                    </div>

                    <button
                        type="submit"
                        class="mt-5 btn btn-block btn-primary"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./SignUpForm.ts"></script>
