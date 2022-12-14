import { IResponse } from './../../model/res.model';
import { Observable, map, startWith } from 'rxjs';
import { ConfigurationUrl } from 'app/config/api.config';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  constructor(
    private http:HttpClient,
    private toastService:ToastrService
  ) { }
  private domain = ConfigurationUrl.host;
  private urlAnswers:string = this.domain + `${ConfigurationUrl.list.answers}`
  public AnswersServices:any;

  private postAnswers(body):Observable<IResponse<any>>{
    this.AnswersServices =  this.http.post<any>(this.urlAnswers, body).pipe(map(res => res));
    this.AnswersServices.subscribe((next:IResponse<any >) => {
     if(next.status === 200) {
       return this.toastService.success("Post answers success");
     }
     return this.toastService.error("Cannot post the answers") && null;
    });
    return this.AnswersServices
   }

   public postListAnswer(body){
     return this.postAnswers(body);
   }

   private getAnswers():Observable<IResponse<any>>{
    this.AnswersServices =  this.http.get<IResponse< any >>(this.urlAnswers).pipe(map(res => res));
    this.AnswersServices.subscribe((next:IResponse<any >) => {
     if(next.status === 200) {
      localStorage['answers'] = JSON.stringify(next.data)
       return this.toastService.success("get answers success");
     }
     return this.toastService.error("Cannot get the answers") && null;
    });
    return this.AnswersServices.pipe(startWith(JSON.parse(localStorage['answers' || '[]'])))
   }

   public get getListANswers(){
     return this.getAnswers();
   }
}
