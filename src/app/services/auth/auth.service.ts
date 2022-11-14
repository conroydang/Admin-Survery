import { FormGroup } from '@angular/forms';
import { IAuth, IRoles } from './../../model/auth.model';
import {  IResponse } from './../../model/res.model';
import { map, Observable, startWith } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationUrl } from 'app/config/api.config';

const domain = ConfigurationUrl.host;
const services = {
  login: domain + ConfigurationUrl.list.auth.login,
  signup: domain + ConfigurationUrl.list.auth.signup
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private toastrService: ToastrService
  ) { }
  public Auth:any;


  private login(body:IAuth):Observable<IResponse<IAuth>>{
    this.Auth = this.http.post<Observable<IAuth>>(services.login, body).pipe(map(res =>res))
    this.Auth.subscribe((next:IResponse<IAuth>) =>  {
      if(next.status === 200)
      {
        localStorage['auth'] = JSON.stringify(next.list)
        return this.toastrService.success('Sign in success]')
      }
      return null;
    })
    return this.Auth.pipe(startWith(JSON.parse(localStorage['authInfor' || '[]'])))
  }

  private register(body:IAuth){
    this.Auth = this.http.post<Observable<IAuth>>(services.signup, body).pipe(map(res =>res))
    this.Auth.subscribe((next:IResponse<IAuth>) =>  {
      if(next.status === 200) {
        this.toastrService.success('Sign up success')
        return next
      };
      return null;
    })
    return this.Auth;
  }

  public resAuth(body:IAuth):Observable<IResponse<IAuth>>{
   return this.login(body)
  }

  public resRegister(body:IAuth):Observable<IResponse<IAuth>>{
    return this.register(body);
  }

  isValid(field:string,form:FormGroup):string {
    if(form.get(field)?.invalid  && form.get(field)?.touched){
      return 'is-invalid'
    }else if (!form.get(field)?.invalid  && form.get(field)?.touched && form.get(field)?.dirty){
      return 'is-valid'
    }else {
      return ''
    }
   }
}
