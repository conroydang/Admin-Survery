import { ListSurveyComponent } from './../../pages/survey/list-survey/list-survey.component';
import { ContactComponent } from './../../pages/survey/contact/contact.component';
import { HomeComponent } from './../../pages/survey/home/home.component';
import { SurveyComponent } from './../../pages/survey/survey/survey.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    { path:'survey', component: ListSurveyComponent},
    {path:"do-survey/:id", component:SurveyComponent},
    { path:'', component: HomeComponent},
    {path:"contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyLayoutRoutingModule { }
