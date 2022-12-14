import { Router } from '@angular/router';
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
    private toastrService: ToastrService,
    private router:Router
  ) { }
  public Auth:any;


  private login(body:IAuth):Observable<IResponse<IRoles>>{
    this.Auth = this.http.post<IResponse<IRoles>>(services.login, body).pipe(map(res =>res))
    this.Auth.subscribe((next:IResponse<IRoles>) =>  {
      console.log(next);

      if(next.status === 200)
      {
        localStorage['auth'] = JSON.stringify(next.data.token)
        if(next.data.roles[0] === "admin"){
        this.router.navigate(['/admin/dashboard']);
        return this.toastrService.success('Sign in to Admin success')
        }
        if(next.data.roles[0] === "user"){
          this.router.navigate(['/']);
          return this.toastrService.success('Sign in to User success')
        }
      }
      return this.toastrService.error("Cannot sign-in because the username or password are wrong") && null;
    })
    return this.Auth.pipe(startWith(JSON.parse(localStorage['auth' || '[]'])))
  }

  private register(body:IAuth):Observable<IResponse<IRoles>>{
    this.Auth = this.http.post<IRoles>(services.signup, body).pipe(map(res =>res))
    this.Auth.subscribe((next:IResponse<IRoles>) =>  {
      if(next.status === 200) {
        this.toastrService.success('Sign up success')
        return next.data
      };
      return this.toastrService.error("Cannot sign-up because the username is exists") && null;
    })
    return this.Auth;
  }

  public resAuth(body):Observable<IResponse<IRoles>>{
   return this.login(body)
  }

  public resRegister(body):Observable<IResponse<IRoles >>{
    return this.register(body);
  }

  private valid(field:string,form:FormGroup):string {
    if(form.get(field)?.invalid  && form.get(field)?.touched){
      return 'is-invalid'
    }else if (!form.get(field)?.invalid  && form.get(field)?.touched && form.get(field)?.dirty){
      return 'is-valid'
    }else {
      return ''
    }
   }

   public isValid(field:string, form:FormGroup) {
    return this.valid(field, form);
   }
}
