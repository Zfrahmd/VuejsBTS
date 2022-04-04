import { createStore } from "vuex";
import sessionManager from "@/store/modules/session_manager";
import projects from '@/store/modules/projects';
import bugs from '@/store/modules/bugs';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    sessionManager,
    projects,
    bugs,
  },
});
