import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/home/home.module').then(
      (m) => m.HomeModule
    ),
  },
  {
    path: ':id',
    loadChildren: () => import('./pages/detail/detail.module').then(
      (m) => m.DetailModule
    ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
