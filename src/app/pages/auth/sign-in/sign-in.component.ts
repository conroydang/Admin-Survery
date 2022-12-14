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
    this.initForm();
  }

  initForm():void{
    this.loginForm = this.fb.group({
      txtUsername:this.fb.control('',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]),
      txtPassword:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)])
    })
  }

  login():void{

    let body = {
      username:this.loginForm.get('txtUsername')?.value,
      password:this.loginForm.get('txtPassword')?.value
    }

    if(this.loginForm.invalid){
      return;
    }else {
      if (this.loginForm.valid){
        this.auth.resAuth(body).subscribe(res => res)

      }
    }

  }

  valid(field:string):string{
    if(this.loginForm.get(field)?.invalid  && this.loginForm.get(field)?.touched){
      return 'is-invalid'
    }else if (!this.loginForm.get(field)?.invalid  && this.loginForm.get(field)?.touched && this.loginForm.get(field)?.dirty){
      return 'is-valid'
    }else {
      return ''
    }
  }

}
