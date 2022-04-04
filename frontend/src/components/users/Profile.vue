<template>
  <div class="">
    <div class="py-5">
      <h2><strong>Bug Detail</strong></h2>
    </div>
    <div class="row py-4">
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Profile",
  computed: {
      ...mapGetters(["getAuthToken", "getUserEmail", "getUserID"]),
  },
  
}
</script>

<style scoped>
/* .sm-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  font-family: "Roboto", sans-serif;
}
.container {
  width: 90%;
  margin: 0 auto;
}
.sm-card {
  width: 75%;
  padding: 20px;
  margin: 0 auto;
  height: 25em;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
} */
.table {
  color:#333;
  text-align: center;
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
  padding: 1.5rem;
}

</style>