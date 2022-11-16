import { SignUpComponent } from '../../pages/auth/sign-up/sign-up.component';
import { Routes } from '@angular/router';

import { SignInComponent } from '../../pages/auth/sign-in/sign-in.component';

export const AuthRoutes: Routes = [
    { path: 'login',      component: SignInComponent },
    { path: 'register',    component: SignUpComponent },
];
