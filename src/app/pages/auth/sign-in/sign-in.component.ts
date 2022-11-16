import { IAuth } from './../../../model/auth.model';
import { CustomValidations } from './../../../shared/validation/validHandle.valid';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../../../layouts/auth-layout/auth.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private fb:FormBuilder,
    private router:Router,

  ) { }
  loginForm: FormGroup=new FormGroup({});

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      txtEmail:this.fb.control('',[Validators.required,Validators.minLength(2),Validators.maxLength(50),CustomValidations.validEmail]),
      txtPassword:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)])
    })

  }

  login():void{

    let body:IAuth = {
      username:this.loginForm.get('txtUsername')?.value,
      password:this.loginForm.get('txtPassword')?.value
    }

    if(this.loginForm.invalid){
      return;
    }else {
      if (this.loginForm.valid){
        this.auth.resAuth(body).subscribe(
          res => {
            if(res.status === 200) {
              if(res.list.roles[0] === "admin"){
                return this.router.navigate(['/admin/dashboard']);
              }
              if(res.list.roles[0] === "user"){
                return this.router.navigate(['/user/dashboard']);
              }
            }
            return;

          },
          err => {
            if(err) return err;
          }
        )
      }

    }

  }

  isValid(text:string):string{
    return this.auth.isValid(text,this.loginForm)
  }

}
