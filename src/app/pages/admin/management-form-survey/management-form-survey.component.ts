import { Router } from '@angular/router';
import { ISurvey, ISurveyPages } from './../../../model/survey.model';
import { QuestionsService } from 'app/services/questions/questions.service';
import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr";


@Component({
    selector: 'notifications-cmp',
    moduleId: module.id,
    templateUrl: 'management-form-survey.component.html'
})

export class ManagementFormSurveyComponent{
  constructor(
    private QuestionsService: QuestionsService,
    private router: Router
  ) {}

  public listTitle:string[] = ['Name of Title', 'The Action']
  public listSurvey:ISurvey | ISurvey[] | ISurveyPages<ISurvey | ISurvey[]>
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getSurvey();
  }

  getSurvey(){
    return this.QuestionsService.getManyQues.subscribe(res => {
        this.listSurvey = res.data
        console.log(this.listSurvey);

    })
  }

  showResults(id:string){
    return this.router.navigate([`admin/survey/result/${id}`])
  }

  editItem(id:string){
    return this.router.navigate([`admin/survey/edit/${id}`])
  }

  deleteItem(id:string){
    this.QuestionsService.deleteAnQuestion(id).subscribe(res => res.status === 200? this.getSurvey(): null)
  }
}
