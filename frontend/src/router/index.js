import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/pages/Home.vue';
import About from '@/views/pages/About.vue';
import AllProjects from '@/views/projects/index.vue'
import AllBugs from '@/views/bugs/index.vue'
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
    path: '/bugs',
    name: 'BrowseBugs',
    component: AllBugs,
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
