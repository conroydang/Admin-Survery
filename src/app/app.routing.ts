import { SurveyLayoutComponent } from './layouts/survey-layout/survey-layout.component';
import { AuthComponent } from './layouts/auth-layout/auth.component';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const AppRoutes: Routes = [
  {
    path:"",
    component:SurveyLayoutComponent,
    children:[
      { path: '',
    loadChildren:() => import('./layouts/survey-layout/survey-layout.module').then(x => x.SurveyLayoutModule)}
    ]
  },
  {
    path:"auth",
    component:AuthComponent,
    children:[
      { path: '',
    loadChildren:() => import('./layouts/auth-layout/auth.module').then(x => x.AuthModule)}
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
  {
    path: '',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full',
  },
  { path: '404', component:NotFoundComponent},
  {
    path: '**',
    redirectTo: '404'
  }

]
