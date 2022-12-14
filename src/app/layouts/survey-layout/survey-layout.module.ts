import { ContactComponent } from './../../pages/survey/contact/contact.component';
import { HomeComponent } from './../../pages/survey/home/home.component';
import { SurveyComponent } from './../../pages/survey/survey/survey.component';
import { RouterModule } from '@angular/router';
import { SurveyLayoutComponent } from './survey-layout.component';
import { SharedModule } from './../../shared/shared.module';
import { SurveyModule } from 'survey-angular-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyLayoutRoutingModule } from './survey-layout-routing.module';
import { FormsModule } from '@angular/forms';
import { ListSurveyComponent } from 'app/pages/survey/list-survey/list-survey.component';


@NgModule({
  declarations: [
    SurveyLayoutComponent,
    SurveyComponent,
    HomeComponent,
    ContactComponent,
    ListSurveyComponent
  ],
  imports: [
    CommonModule,
    SurveyLayoutRoutingModule,
    SurveyModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class SurveyLayoutModule { }
