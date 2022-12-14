import { SurveyModule } from 'survey-angular-ui';

import { UserComponent } from './../../pages/admin/user/user.component';
import { ResultsSurveyComponent } from './../../pages/admin/results-survey/results-survey.component';
import { EditFormSurveyComponenet } from './../../pages/admin/edit-form-survey/edit-form-survey.component';
import { ManagementFormSurveyComponent } from './../../pages/admin/management-form-survey/management-form-survey.component';
import { QuestionsComponent } from './../../pages/admin/questions/questions.component';
import { SurveyCreatorModule } from 'survey-creator-angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/admin/dashboard/dashboard.component';

import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    SurveyCreatorModule,
    ModalModule.forRoot(),
    SurveyModule
  ],
  declarations: [
    DashboardComponent,
    QuestionsComponent,
    ManagementFormSurveyComponent,
    EditFormSurveyComponenet,
    ResultsSurveyComponent,
    UserComponent
  ],
  // providers: [{ provide: NgChartsConfiguration, useValue: { generateColors: false }}]
})

export class AdminLayoutModule {}
