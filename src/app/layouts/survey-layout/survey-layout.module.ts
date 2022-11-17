import { SurveyLayoutComponent } from './survey-layout.component';
import { SharedModule } from './../../shared/shared.module';
import { SurveyModule } from 'survey-angular-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyLayoutRoutingModule } from './survey-layout-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SurveyLayoutComponent
  ],
  imports: [
    CommonModule,
    SurveyLayoutRoutingModule,
    SurveyModule,
    FormsModule,
    SharedModule
  ]
})
export class SurveyLayoutModule { }
