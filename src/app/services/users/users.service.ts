import { IUsers } from './../../model/user.model';
import { IResponse } from './../../model/res.model';
import { Observable, startWith, map } from 'rxjs';
import { ConfigurationUrl } from 'app/config/api.config';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private toastService: ToastrService
  ) { }

  private domain = ConfigurationUrl.host;
  private urlSample:string = this.domain + `${ConfigurationUrl.list.user}`;
  public users:any;

  private getUsers():Observable<IResponse< IUsers[] | IUsers>>{
    this.users =  this.http.get<IResponse<IUsers[] | IUsers>>(this.urlSample).pipe(map(res => res));
    this.users.subscribe((next:IResponse<IUsers[] | IUsers>) => {
      if(next.status === 200){
        localStorage['users'] = JSON.stringify(next.data)
        return this.toastService.success("Get the users success")
      }
      return  this.toastService.error("Cannot get the users data") && null;
    })
    return this.users.pipe(startWith(JSON.parse(localStorage['users' || '[]'])))
  }

  public get getManyUser(){
    return this.getUsers();
  }

  private getUser(id:string):Observable<IResponse< IUsers>>{
    this.users =  this.http.get<IResponse<IUsers>>(this.urlSample+`/${id}`).pipe(map(res => res));
    this.users.subscribe((next:IResponse<IUsers>) => {
      if(next.status === 200){
        localStorage['users'] = JSON.stringify(next.data)
        return this.toastService.success(`Get user id: ${id} success`)
      }
      return  this.toastService.error("Cannot get the users data") && null;
    })
    return this.users.pipe(startWith(JSON.parse(localStorage['users' || '[]'])))
  }

  public getOneUser(id:string){
    return this.getUser(id);
  }

 }
