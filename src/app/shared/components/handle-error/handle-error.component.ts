import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-handle-error',
  templateUrl: './handle-error.component.html',
  styleUrls: ['./handle-error.component.css']
})
export class HandleErrorComponent implements OnInit {

  constructor() { }

  @Input('control') control:any;
  @Input('controlName') controlName:any;

  ngOnInit(): void {
  }

  get message(){
    for(let err in this.control.errors){
      if(this.control.dirty || this.control.touched ){
        return this.getErrorMessage(err,this.control.errors[err]);
      }
    }
  }

  getErrorMessage(err:string,value:any){
  let message:any = {
      'required' :`Bắt buộc phải nhập ${this.controlName}!`,
      'minlength':`Chiều dài của ${this.controlName} tối thiểu phải có ${value.requiredLength} kí tự`,
      'maxlength':`Chiều dài của ${this.controlName} lớn nhất là ${value.requiredLength} kí tự`,
      'invalidEmail':`${this.controlName} không hợp lệ, đảm bảo ${this.controlName} phải có @ và .com`,
      'validMediumPassword':`${this.controlName} trung bình`,
      'validWeakPassword':`${this.controlName} quá yếu`,
      'invalidConfirmPassword':`${this.controlName} không khớp`,
      'invalidPhoneNumber':`${this.controlName} phải là số dương`,
      'invalidAlphabet':`${this.controlName} cần phải là chữ trong bãng chữ alphabet`,
      'invalidNumberic':`${this.controlName} phải là số nguyên dương`
    }
    return message[err]
  }

}
