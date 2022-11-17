import { SharedModule } from '../../shared/shared.module';
import { AuthRoutes } from './auth.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInComponent } from '../../pages/auth/sign-in/sign-in.component';
import { SignUpComponent } from '../../pages/auth/sign-up/sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StrengthMeterModule } from 'ngx-strength-meter';


@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule.forChild(AuthRoutes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StrengthMeterModule
  ]
})
export class AuthModule { }
