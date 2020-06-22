<style lang="scss" src="./AppNav.scss"></style>
<script lang="ts" src="./AppNav.ts"></script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container">
                <router-link class="appBrand" to="/">
                    <img id="logo" src="../../../assets/logo.svg" alt="">
                </router-link>

                <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="navbar-nav">
                        <router-link class="nav-item nav-link" :to="{name: 'clients'}">Clients</router-link>
                        <router-link class="nav-item nav-link" :to="{name: 'exercise-library'}">Exercise Library
                        </router-link>
                        <router-link class="nav-item nav-link" :to="{name: 'programs'}">Programs</router-link>
                    </div>

                    <div class="navbar-nav ml-md-auto">
                        <router-link class="nav-item nav-link" :to="{name: 'sign-in'}">Sign In</router-link>
                        <router-link class="nav-item nav-link" :to="{name: 'sign-up'}">Sign Up</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>