import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from './../../../services/questions/questions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: ['./list-survey.component.css']
})
export class ListSurveyComponent implements OnInit {

  constructor(
    private QuestionsService:QuestionsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public listSurvey:any;
  ngOnInit(): void {
    this.QuestionsService.getManyQues.subscribe(res => this.listSurvey = res.data);
  }

  moveToSurvey(id:string) {
    return this.router.navigate([`/do-survey/${id}`])
  }

}
