<template>
    <div class="py-5">
        <h1 class="text-center">Vue Session Manager</h1>
        <div class="log_container">
          <div v-if="isLoggedIn" class="row">
              <button @click="logoutUser" class="logout-button" >Logout</button>
              <table class="table">
                  <thead class="thead-dark">
                  <tr class="table-headers">
                    <th scope="col">ID</th>
                    <th scope="col">email</th>
                    <th scope="col">Token</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="table-rows">
                    <th class="table-row">[{{ this.getUserID }}]</th>
                    <td class="table-row table-row-username">{{ this.getUserEmail }}</td>
                    <td class="table-row">{{ this.getAuthToken }}</td>
                  </tr>
                  </tbody>
              </table>
          </div>
          <div v-else class="row">
              <div class="col-12">
                <h3>Sign Up!</h3>
                <form @submit="onSignUp">
                  <input class="form-control" type="email" v-model="signUpEmail" placeholder="Email" />
                  <br />
                  <input
                    type="password"
                    class="form-control"
                    v-model="signUpPassword"
                    placeholder="Password"
                  />
                  <br />
                  <input type="submit" value="Sign up" class="btn btn-outline-success my-3" />
                </form>
              </div>
              <hr class="my-5" />
              <div class="col-12">
                <h3>Login!</h3>
                <form @submit="onLogin">
                  <input class="form-control" type="text" v-model="loginEmail" placeholder="Email" />
                  <br />
                  <input class="form-control" type="password" v-model="loginPassword" placeholder="Password" />
                  <br />
                  <input type="submit" value="Login" class="btn btn-outline-primary my-3" />
                </form>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
import "@/store/index.js";
import { createToast, withProps } from 'mosha-vue-toastify';
import { mapActions, mapGetters } from "vuex";
export default {
    name: "SessionManager",
    computed: {
        ...mapGetters(["getAuthToken", "getUserEmail", "getUserID", "isLoggedIn"]),
    },
    data() {
        return {
        signUpEmail: "",
        signUpPassword: "",
        loginEmail: "",
        loginPassword: "",
        };
    },
    methods: {
        vuetify_notify(message) {
          this.$moshaToast(message);
        },
        ...mapActions(["registerUser", "loginUser", "logoutUser"]),
        onSignUp(event) {
            event.preventDefault();
            let data = {
            user: {
            email: this.signUpEmail,
            password: this.signUpPassword,
            },
        };
        if (this.registerUser(data)){
          this.vuetify_notify("Successfully Signed up!");
          this.resetData();
          this.$router.push("/");
        }
        },
        onLogin(event) {
            event.preventDefault();
            let data = {
                user: {
                    email: this.loginEmail,
                    password: this.loginPassword,
                },
            };
            if (this.loginUser(data)){
              this.resetData();
              this.vuetify_notify("Successfully logged in!");
              this.$router.push("/");
            }
        },
        resetData() {
            this.signUpEmail = "";
            this.signUpPassword = "";
            this.loginEmail = "";
            this.loginPassword = "";
        },
    },
}
</script>

<style scoped>
.sm-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  font-family: "Roboto", sans-serif;
}

.log_container {
  max-width: 50%;

}

.table-headers {
  background-color: #2b3b49;
  color: #fff;
  max-width: 90%;
  margin: 0 auto;
}
.table-rows {
  background-color: #f2f2f2;
  margin: 0 auto;
}
.table-row {
  word-break: break-all;
  text-align: center;
  padding: 10px;
}
.table-row-username {
  width: 30%;
}
</style>