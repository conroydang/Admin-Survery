import { QuestionsService } from 'app/services/questions/questions.service';
import { SurveyCreatorModel } from 'survey-creator-core';
import { SurveyCreatorModule } from 'survey-creator-angular';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit',
    moduleId: module.id,
    templateUrl: 'edit-form-survey.component.html'
})

export class EditFormSurveyComponenet{

  constructor(
    private route : ActivatedRoute,
    private questionService:QuestionsService
  ) {
  }

  creator:SurveyCreatorModule

  ngOnInit(): void {
     this.route.params.subscribe(param => this.methodsEdit(param.id)
     )
  }

  methodsEdit(id:string){
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
      this.questionService.putQuestion(id,creator.JSON)
      // We assume that we can't get error on saving data in local storage
      // Tells creator that changing (saveNo) saved successfully.
      // Creator will update the status from Saving to saved
      callback(saveNo, true);
    }

    this.questionService.getOneQuestion(id).subscribe(res => res.status === 200 ? creator.JSON = res.data : null
    )



    // creator.JSON = getSurvey
    // If you get JSON from your database then you can use creator.JSON property
    // creator.JSON = yourJSON;
    this.creator = creator;
  }
}
