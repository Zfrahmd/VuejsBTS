<template>
  <div class="row py-4 text-center">
    <div
    v-for="project in allProjects"
    :key="project.id"
    class="col-sm-6 py-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title attribute">Name:
            <p class="attribute_value">{{project.project_name}}</p></h5>
          <p class="card-text attribute">Description: <span class="attribute_value">
            {{project.description}}</span></p>
          <p class="card-text attribute">Created at: <span class="attribute_value">
            {{format_date(project.created_at)}}</span>
          </p>
          <p class="card-text attribute">Updated at: <span class="attribute_value">
            {{format_date(project.updated_at)}}</span>
          </p>
          <button class="btn btn-outline-primary mx-2 my-3" @click="showProjectInfo(project.id)">
          Read More
          </button>
          <button class="btn btn-outline-primary mx-2 my-3" @click="editProjectInfo(project.id)">
          Edit Project
          </button>
          <button @click="deleteProject(project.id)" class="btn btn-outline-danger">
          <i class="fas fa-trash-alt delete_icon"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment';

export default {
  name: 'Projects',
  methods: {
    ...mapActions(['fetchProjects', 'deleteProject']),
    format_date(value) {
      if (value) {
        return moment(String(value)).format('DD-MM-YYYY');
      }
      return ('Date not passed');
    },
    showProjectInfo(projectId) {
      this.$router.push({ name: 'showProject', params: { id: projectId } });
    },
    editProjectInfo(projectId) {
      this.$router.push({ name: 'editProject', params: { id: projectId } });
    },
  },
  computed: {
    ...mapGetters(['allProjects']),
  },
  created() {
    this.fetchProjects();
  },
};

</script>

<style>
.card {
  border-radius: 1.5%;
  background-color: #0f0e13;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.7);
}
.delete_icon {
  cursor: pointer;
}
.attribute {
  color: grey;
}
.attribute_value {
  color: silver;
  display:inline-block;
}
</style>
