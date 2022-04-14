import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/pages/Home.vue';
import About from '@/views/pages/About.vue';
import AllProjects from '@/views/projects/index.vue'
import ProjectInfo from '@/components/projects/ProjectInfo.vue';
import NewProject from '@/views/projects/new.vue';
import EditProject from '@/views/projects/edit.vue';
import AllBugs from '@/views/bugs/index.vue';
import BugInfo from '@/components/bugs/BugInfo.vue';
import NewBug from '@/views/bugs/new.vue';
import EditBug from '@/views/bugs/edit.vue';
import Profile from '@/components/users/Profile.vue';
import SessionManager from '@/components/SessionManager.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/projects',
    name: 'BrowseProjects',
    component: AllProjects,
  },
  {
    path: '/projects/:id',
    name: 'showProject',
    component: ProjectInfo,
  },
  {
    path: '/projects/new',
    name: 'NewProject',
    component: NewProject,
  },
  {
    path: '/projects/:id/edit',
    name: 'editProject',
    component: EditProject,
  },
  {
    path: '/bugs',
    name: 'BrowseBugs',
    component: AllBugs,
  },
  {
    path: '/bugs/:id',
    name: 'showBug',
    component: BugInfo,
    props: (route) => ({ query: route.query.q }),
  },
  {
    path: '/bugs/new',
    name: 'NewBug',
    component: NewBug,
  },
  {
    path: '/bugs/:id/edit',
    name: 'editBug',
    component: EditBug,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/sessions',
    name: 'SessionsManager',
    component: SessionManager,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
