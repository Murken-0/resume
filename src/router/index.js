import { createRouter, createWebHistory } from 'vue-router';
import AboutMeView from '@/views/AboutMeView.vue'
import PortfolioView from '@/views/PortfolioView.vue'

const routes = [
  { path: '/', component: AboutMeView },
  { path: '/about', component: AboutMeView },
  { path: '/portfolio', component: PortfolioView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
