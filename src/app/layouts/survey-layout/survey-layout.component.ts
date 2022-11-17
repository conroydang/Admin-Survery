import { surveyJson } from './../../model/survey.model';
import { Component, OnInit} from '@angular/core';
import {Model, StylesManager} from "survey-core";
import "survey-core/defaultV2.min.css";
StylesManager.applyTheme("defaultV2");

@Component({
  selector: 'app-survey-layout',
  templateUrl: './survey-layout.component.html',
  styleUrls: ['./survey-layout.component.css']
})
export class SurveyLayoutComponent implements OnInit {
  model : Model;
  ngOnInit() {
    const survey = new Model(surveyJson);
    survey.showProgressBar = 'top';
    this.model = survey;
  }
  

}
