import { AuthModule } from './layouts/auth-layout/auth.module';
import { InterceptorInterceptor } from './utils/interceptor/interceptor.interceptor';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { SurveyModule } from "survey-angular-ui";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { FixedPluginModule} from './shared/components/fixedplugin/fixedplugin.module';
import {SurveyCreatorModule} from "survey-creator-angular";


import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SurveyLayoutComponent } from './layouts/survey-layout/survey-layout.component';
import { SurveyComponent } from './pages/survey/survey/survey.component';
import { HomeComponent } from './pages/survey/home/home.component';
import { ContactComponent } from './pages/survey/contact/contact.component';
import { NavbarModule } from './shared/components/navbar/navbar.module';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: false
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    AuthModule,
    SurveyModule,
    HttpClientModule,
    SurveyCreatorModule,



  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
