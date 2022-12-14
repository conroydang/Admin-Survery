import { ResultsSurveyComponent } from './../../pages/admin/results-survey/results-survey.component';
import { EditFormSurveyComponenet } from './../../pages/admin/edit-form-survey/edit-form-survey.component';
import { ManagementFormSurveyComponent } from './../../pages/admin/management-form-survey/management-form-survey.component';
import { QuestionsComponent } from './../../pages/admin/questions/questions.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';
import { UserComponent } from 'app/pages/admin/user/user.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'create-questions', component:QuestionsComponent},
    {path: 'management-survey', component:ManagementFormSurveyComponent},
    { path: 'survey/edit/:id', component:EditFormSurveyComponenet },
    { path:'survey/result/:id' , component:ResultsSurveyComponent},
    {path:'management-users', component:UserComponent}

];
