import { DataService } from './../../../services/data/data.service';
import { ActivatedRoute } from '@angular/router';
import { IResponse } from './../../../model/res.model';
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ISurvey, ISurveyPages } from './../../../model/survey.model';
import { QuestionsService } from './../../../services/questions/questions.service';
import { Model } from 'survey-core';
import { Component, OnInit } from '@angular/core';
import { AnswersService } from 'app/services/answers/answers.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor(
    private AnswersService: AnswersService,
    private surveyService: QuestionsService,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  survey: ISurvey | ISurvey[] | ISurveyPages<ISurvey | ISurvey[]>
  model: Model;
  listQuestions: ISurveyPages<ISurvey>
  listOriginQuestions: ISurveyPages<ISurvey>

  ngOnInit() {
    this.getDataCardbon()
    let customResults = {};
    this.route.params.subscribe(item => {
      this.surveyService.getOneQuestion(item.id).subscribe(res => {
        this.survey = res.data;
        const survey = new Model(this.survey)
        survey.showProgressBar = 'bottom';

        this.model = survey;
        survey.onComplete.add((response) => {
          // console.log(survey);
          survey.completedHtml = `
          <section class="css-1glgnmd">
          <a class="css-1h646ss" href="/calculator">← Back to calculator</a>
          <header class="css-51y40z"><div class="css-zmnrui">
          <img src="https://projectwren.imgix.net/calculator-icons.png?auto=format%2Ccompress&amp;q=35&amp;w=1000">
          </div>
          <h2 class="css-qxi2qz">Your household's carbon footprint is
          <span class="css-1vg6q84">${29.3}</span> of CO₂. tons per years  </span>
          `
          customResults = Object.assign({surveyId:res.data._id},response.data)
          this.AnswersService.postListAnswer(customResults).subscribe(res => res)
        })
      })
    })
  }

  getOneQues(id: string) {
    return this.surveyService.getOneQuestion(id)
  }

  resultSample:any

  getDataCardbon(){
    return this.dataService.getSample.subscribe(res => this.resultSample = res.data
    )
  }


}
