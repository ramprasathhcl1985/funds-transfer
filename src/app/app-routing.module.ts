import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'user', loadChildren: () => import('./common-modules/users-module/users.module').then(m => m.UsersModule)},
  { path: 'customer', loadChildren: () => import('./customer-sections/customer-sections.module').then(m => m.CustomerSectionsModule)},
  { path: '', redirectTo: '/user', pathMatch: 'full' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
