import { ToastrService } from 'ngx-toastr';
import { ConfigurationUrl } from 'app/config/api.config';
import { ISurvey, ISurveyPages } from './../../model/survey.model';
import { IResponse } from './../../model/res.model';
import { Observable, map, startWith } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(
    private http:HttpClient,
    private toastService:ToastrService
  ) { }
  private domain = ConfigurationUrl.host;
  private urlQuestion:string = this.domain + `${ConfigurationUrl.list.questions}`
  public QuestionsService:any;

  private getQuestions():Observable<IResponse< ISurvey[] | ISurveyPages<ISurvey[] | ISurvey> | ISurvey>>{
   this.QuestionsService =  this.http.get<IResponse< ISurvey[] | ISurveyPages<ISurvey[] | ISurvey> | ISurvey >>(this.urlQuestion).pipe(map(res => res));
   this.QuestionsService.subscribe((next:IResponse<ISurvey[] | ISurveyPages<ISurvey[] | ISurvey> | ISurvey >) => {
    if(next.status === 200) {
      localStorage['questions'] = JSON.stringify(next.data)
      return this.toastService.success("Get survey success");
    }
    return this.toastService.error("Cannot get the survey") && null;
   });
   return this.QuestionsService.pipe(startWith(JSON.parse(localStorage['questions' || '[]'])))
  }

  public get getManyQues(){
    return this.getQuestions();
  }

  private getQuestion(id:string):Observable<IResponse<ISurvey>>{
    this.QuestionsService =  this.http.get<IResponse<ISurvey>>(this.urlQuestion+`/${id}`).pipe(map(res => res));
    this.QuestionsService.subscribe((next:IResponse<ISurvey>) => {
      if(next.status === 200) {
        localStorage['question'] = JSON.stringify(next.data)
      return this.toastService.success("Get survey success");
      }
      return this.toastService.error("Cannot get the survey") && null;
    })
    return this.QuestionsService.pipe(startWith(JSON.parse(localStorage['question' || '[]'])))
   }


   public getOneQuestion(id:string){
    return this.getQuestion(id)
   }

   private postQuestions(body:ISurvey | ISurvey[]):Observable<IResponse<ISurvey[] | ISurvey>>{
    this.QuestionsService =  this.http.post<IResponse<ISurvey[] | ISurvey>>(this.urlQuestion,body).pipe(map(response => response));
    this.QuestionsService.subscribe(next => {
      if(next.status === 200) return this.toastService.success("Create Questions Success");
      return  this.toastService.error("Cannot create the survey") && null;
    })
    return this.QuestionsService;
   }

   public createQuestions(body:ISurvey | ISurvey[] | any):Observable<IResponse<ISurvey[] | ISurvey>>{
    return this.postQuestions(body)
   }

   private putQuestions(id:string, body:ISurvey | ISurvey[]):Observable<IResponse<ISurvey[] | ISurvey>>{
    this.QuestionsService =  this.http.put<IResponse<ISurvey[] | ISurvey>>(this.urlQuestion + `/${id}`, body).pipe(map(res => res));
    this.QuestionsService.subscribe((next:IResponse<ISurvey>) => {
      if (next.status === 200) {
        return this.toastService.success("Updated Questions Success");
      }
      return  this.toastService.error("Cannot update the survey") && null;
    })
    return this.QuestionsService;
   }

   public putQuestion(id:string, body:ISurvey | ISurvey[]):Observable<IResponse<ISurvey[] | ISurvey>>{
    return this.putQuestions(id,body)
   }

   private deleteQuestion(id:string):Observable<IResponse<ISurvey[] | ISurvey>>{
    this.QuestionsService =  this.http.delete<IResponse<ISurvey[] | ISurvey>>(this.urlQuestion+`/${id}`).pipe(map(res => res));
    this.QuestionsService.subscribe(next => {
      if(next.status === 200) return this.toastService.success("Delete question success");
      return  this.toastService.error("Cannot delete the survey") && null;
    })
    return this.QuestionsService;
   }

   public deleteAnQuestion(id:string):Observable<IResponse<ISurvey[] | ISurvey>>{
    return this.deleteQuestion(id)
   }
}
