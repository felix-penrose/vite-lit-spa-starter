import { Router } from '@vaadin/router';
import './pages/Dashboard';
import './scss/styles.scss'

const routes = [
  {
    path: '/',
    component: 'page-dashboard',
  },
  {
    path: '/profile',
    children: [
      {
        path: '/',
        component: 'page-profile',
        action: async () => {
          await import('./pages/Profile');
        },
      },
      {
        path: '/:userId',
        component: 'page-profile-id',
        action: async () => {
          await import('./pages/ProfileId');
        },
      }
    ]
  },
  // { path: '(.*)', component: 'x-not-found-view' },
];

export const router = new Router(document.getElementById('outlet'));
router.setRoutes(routes);
