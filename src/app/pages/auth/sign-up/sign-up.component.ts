import { IAuth } from '../../../model/auth.model';
import { CustomValidations } from '../../../shared/validation/validHandle.valid';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../../../layouts/auth-layout/auth.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private auth:AuthService,
    private router:Router
  ) { }
  registerForm:FormGroup =new FormGroup({});
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = this.fb.group({
      txtPassword:this.fb.control('',[Validators.minLength(5),Validators.maxLength(50),Validators.required,CustomValidations.validPassword]),
      txtConfirmPassword:this.fb.control('',[Validators.minLength(5),Validators.maxLength(50),Validators.required,CustomValidations.validPassword]),
      txtUsername:this.fb.control('',[Validators.minLength(5),Validators.maxLength(50),Validators.required,CustomValidations.validEmail]),
      rdCheckbox:this.fb.control(false,[Validators.requiredTrue])
    },{validator:CustomValidations.matchPassword})
  }

  isValid(field:string): string {
    if(this.registerForm.get(field)?.invalid  && this.registerForm.get(field)?.touched){
      return 'is-invalid'
    }else if (!this.registerForm.get(field)?.invalid  && this.registerForm.get(field)?.touched && this.registerForm.get(field)?.dirty){
      return 'is-valid'
    }else {
      return ''
    }
  }

  signUp(){
    let body:IAuth = {
      username:this.registerForm.get('txtUsername')?.value,
      password:this.registerForm.get('txtPassword')?.value,
    }
    if(this.registerForm.invalid){
      return;
    }else {
      if (this.registerForm.valid){
        this.auth.resRegister(body).subscribe(
          res => {
            if(res.status===200){
              this.router.navigate(['/auth/login']);
            }
            else{
             return;
            }
          },
          err => {
            if(err){
             return err;
            }
          }
        )
      }

    }
  }

}
