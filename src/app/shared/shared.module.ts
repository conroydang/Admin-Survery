
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterHomeComponent } from './components/footer-home/footer-home.component';
import { HandleErrorComponent } from './components/handle-error/handle-error.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';




@NgModule({
  declarations: [
    HandleErrorComponent,
    NotFoundComponent,
    FooterHomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
  NotFoundComponent,
  HandleErrorComponent,
  FooterHomeComponent,
  HeaderComponent
  ]
})
export class SharedModule { }
