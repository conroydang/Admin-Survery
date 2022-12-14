// import { StylesManager } from 'survey-creator-core';
// import { Model } from 'survey-core';
// import { ISurvey, ISurveyPages } from './../../../model/survey.model';
// import { ActivatedRoute } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { AnswersService } from 'app/services/answers/answers.service';
import { QuestionsService } from 'app/services/questions/questions.service';
// import "./survey.component.css";
// import * as $ from "jquery";
// import * as analyst from 'survey-analytics'
// import "survey-core/defaultV2.min.css";
// StylesManager.applyTheme("defaultV2");

@Component({
    moduleId: module.id,
    selector: 'app-result',
    templateUrl: 'results-survey.component.html'
})

export class ResultsSurveyComponent implements OnInit {
  constructor(
    // private route : ActivatedRoute,
    private AnswersService: AnswersService,
    private QuestionsService:QuestionsService
    ){}
    // model : Model;

    public listQuestions:any;
    public listAnswers:any[];
    ngOnInit() {
    //   this.route.queryParams.subscribe(params => {
    //     this.QuestionsService.getOneQuestion(params.id).subscribe(
    //       res => {
    //         this.listQuestions = res.data
    //         this.AnswersService.getListANswers.subscribe(next => {this.listAnswers = next.data
    //         console.log(this.listAnswers);

    //         })
    //         // const survey = new Model(this.listAnswers);
    //         // var setDataToWidget = function (data) {
    //         //   var chartContainer:any = document.querySelector('#chartContainer');
    //         //   chartContainer.innerHTML = "";
    //         //   var visPanel = new analyst.VisualizationPanel(survey.getAllQuestions(), data, {
    //         //     labelTruncateLength: 27,
    //         //     allowChangeAnswersOrder: false,
    //         //     allowDynamicLayout: false
    //         //   });
    //         //   // visPanel.visualizers[0] = "pie";
    //         //   visPanel.showHeader = false;
    //         //   visPanel.render(chartContainer);
    //         //   $("#loadingIndicator").hide();
    //         // }
    //         // setDataToWidget(this.listAnswers)
    //       }
    //     )
    // });

    }

}
