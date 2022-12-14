import { Component, OnInit } from '@angular/core';
import {StylesManager, SurveyCreatorModel} from "survey-creator-core";
import {surveyLocalization} from "survey-core";
import { QuestionsService } from 'app/services/questions/questions.service';
// StylesManager.applyTheme("defaultV2");
surveyLocalization.supportedLocales = ["en", "vi"];

@Component({
    selector: 'app-survey',
    moduleId: module.id,
    templateUrl: 'questions.component.html'
})



export class QuestionsComponent implements OnInit{
  public creator:SurveyCreatorModel;
  constructor(
    private questionService:QuestionsService
  ){

  }

  ngOnInit() {
    this.methodsQuestions();
  }



  methodsQuestions(){
    let creatorOptions = {};
    const creator = new SurveyCreatorModel(creatorOptions);
    // Automatically save survey definition on changing. Hide "Save" button
    creator.isAutoSave = false;
    // Show state button here
    creator.showSaveButton = true;
    creator.showLogicTab = false;
    // Setting this callback will make visible the "Save" button
    creator.saveSurveyFunc = (saveNo, callback) => { // save the survey JSON
      // You can store in your database JSON as text: creator.text  or as JSON: creator.JSON
      this.questionService.createQuestions(creator.JSON)
      // We assume that we can't get error on saving data in local storage
      // Tells creator that changing (saveNo) saved successfully.
      // Creator will update the status from Saving to saved
      callback(saveNo, true);
    }
    const defaultJSON = {
      pages: [
        {
          name: 'page1',
          elements: [
            {
              type: 'text',
              name: "q1"
            }
          ]
        }
      ]
    };

    creator.JSON = {}



    // creator.JSON = getSurvey
    // If you get JSON from your database then you can use creator.JSON property
    // creator.JSON = yourJSON;
    this.creator = creator;
  }

}
