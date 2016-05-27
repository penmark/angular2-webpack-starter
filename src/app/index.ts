import { provideRouter } from '@ngrx/router';
import { provideStore } from '@ngrx/store'

import { routes } from './routes';
export * from './app.component';

// Application wide providers
export const APP_PROVIDERS = [
  provideRouter(routes),
  provideStore({})
];
