<script lang="ts" src="./SignIn.ts"></script>

<template>
    <div class="signIn container pt-5">
            <div class="row">
                <div class="col-sm-4 col-4 offset-4 text-center">
                    <h1 class="mb-4 font-weight-light">Sign in to JSS</h1>
                    <SignInForm></SignInForm>
                    <hr class="my-4">
                    <p>New to JSS?
                        <router-link :to="{name: 'sign-up'}">Create an account.</router-link>
                    </p>
                </div>
            </div>
        </div>
</template>

