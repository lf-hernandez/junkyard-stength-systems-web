<template>
    <div class="signIn container h-100">
        <div class="row align-items-center justify-content-center h-100">
            <div class="col-12 col-lg-4 text-center">
                <h1 class="mb-4 font-weight-light">Sign in</h1>
                <SignInForm></SignInForm>
                <hr class="my-4">
                <p>New to JSS?
                    <router-link :to="{name: 'sign-up'}">Create an account.</router-link>
                </p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./SignIn.ts"></script>