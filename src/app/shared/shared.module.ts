import { NotFoundComponent } from './not-found/not-found.component';
import { HandleErrorComponent } from './handle-error/handle-error.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HandleErrorComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
