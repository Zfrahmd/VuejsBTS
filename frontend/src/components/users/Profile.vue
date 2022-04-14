<template>
  <div class="">
    <div class="py-5">
      <h2><strong>User Profile</strong></h2>
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
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  computed: {
      ...mapGetters(["getAuthToken", "getUserEmail", "getUserID"]),
  },
  
}
</script>

<style scoped>

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