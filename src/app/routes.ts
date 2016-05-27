import { Routes } from '@ngrx/router';

import { Home } from './home/home.component';
export const routes: Routes = [
  {
    path: '/', component: Home
  }, {
    path: '/about',
    loadComponent: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve(require('./about').About);
      })
    })
  }
];
