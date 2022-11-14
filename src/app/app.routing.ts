import { AuthComponent } from './layouts/auth/auth.component';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const AppRoutes: Routes = [

  {
    path:"",
    component:AuthComponent,
    children:[
      { path: '',
    loadChildren:() => import('../app/layouts/auth/auth.module').then(x => x.AuthModule)}
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }

]
