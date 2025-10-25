import { HomeComponent } from './components/home/home.component';

import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
