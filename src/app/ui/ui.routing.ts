import { Routes } from '@angular/router';

export const uiRoutes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: '', loadChildren: () => import('./management-students/management.students.module').then(m => m.ManagementStudentsModule)},
  { path: '', loadChildren: () => import('./management-books/management.books.module').then(m => m.ManagementBooksModule)},
  { path: '', loadChildren: () => import('./management-loans/management.loans.module').then(m => m.ManagementLoansModule)},
  { path: '', loadChildren: () => import('./book-catalog/book.catalog.module').then(m => m.BookCatalogModule)}
];
