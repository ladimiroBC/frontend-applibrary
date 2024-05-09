import { Routes } from '@angular/router';

export const uiRoutes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
];
