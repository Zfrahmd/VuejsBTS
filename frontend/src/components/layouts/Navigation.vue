<template>
  <nav class="navbar navbar-expand-sm navigation">
    <div class="container-fluid">
      <a class= "nav-link active link_logo" href="/">Bug Tracking System</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">Projects
            </a>
            <ul class="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
              <!-- <li><p class= "text-center"><router-link :to="{ name: 'NewProject' }"
              class="dropdown-item">Create Project</router-link></p>
              </li> -->
              <li><p class= "text-center"><router-link :to="{ name: 'BrowseProjects' }"
              class="dropdown-item">View Projects</router-link></p>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">Bugs
            </a>
            <ul class="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
              <!-- <li><p class= "text-center"><router-link :to="{ name: 'NewBug' }"
              class="dropdown-item">Create Bug</router-link></p>
              </li> -->
              <li><p class= "text-center"><router-link :to="{ name: 'BrowseBugs' }"
              class="dropdown-item">View Bugs</router-link></p>
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="{ name: 'About'}" class="nav-link">About</router-link>
          </li>
        </ul>
        <!-- <div><strong><i class="px-2 text-muted" ><%= current_user.user_type.capitalize%></i></strong></div> -->
        <div v-if="isLoggedIn">
          <!-- <a href="/" class="btn btn-outline-success d-inline mx-2">Profile</a>
          <a @click="logoutUser" class="btn btn-outline-warning d-inline">Signout</a> -->
          <!-- <button  class="logout-button" >Logout</button> -->
          <div class="d-inline"><router-link :to="{ name: 'Profile' }" class="btn btn-outline-success d-inline mx-2">Profile</router-link></div>
          <div class="d-inline"><router-link :to="{ name: 'Home' }" @click="logoutUser" class="btn btn-outline-warning d-inline">Signout</router-link></div>
        </div>
        <div v-else>
          <!-- <a href="/sessions" class="btn btn-outline-success text-white mx-2">Sign Up</a>
          <a href="/sessions" class="btn btn-outline-primary text-white">Log In</a> -->
          <div class="d-inline"><router-link :to="{ name: 'SessionsManager' }"
                class="btn btn-outline-success text-white mx-2">Signup</router-link></div>
          <div class="d-inline"><router-link :to="{ name: 'SessionsManager' }"
                class="btn btn-outline-primary text-white">Login</router-link></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'Navigation',
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logoutUser"]),
  },
};
</script>

<style>

</style>
