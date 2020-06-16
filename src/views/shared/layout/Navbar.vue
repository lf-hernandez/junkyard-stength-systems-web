<template>
  <div class="Navbar">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">Logo</router-link>

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
            <router-link class="nav-item nav-link" :to="{name: 'clients'}">Clients</router-link>|
            <router-link class="nav-item nav-link" :to="{name: 'exercise-library'}">Exercise Library</router-link>
            <router-link class="nav-item nav-link" :to="{name: 'programs'}">Programs</router-link>
          </div>

          <div class="navbar-nav ml-md-auto">
            <router-link class="nav-item nav-link" :to="{name: 'login'}">Login</router-link>
            <router-link class="nav-item nav-link" :to="{name: 'signup'}">Signup</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.Navbar {
  margin-bottom: 7rem;
}
</style>