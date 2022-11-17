import { NotFoundComponent } from './not-found/not-found.component';
import { HandleErrorComponent } from './handle-error/handle-error.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterHomeComponent } from './footer-home/footer-home.component';



@NgModule({
  declarations: [
    HandleErrorComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
  NotFoundComponent,
  HandleErrorComponent,
  HeaderComponent,
  FooterHomeComponent
  ]
})
export class SharedModule { }
