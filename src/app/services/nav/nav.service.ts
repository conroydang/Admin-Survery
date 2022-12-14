import { Menu } from './../../model/nav.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }
  menuItems:Menu[] = [
    {
      title:'Home', type: 'link', path:'/'
    },
    {
      title:'Survey', type: 'link', path:'/survey', active: false
    },
    {
      title:'Sign in', type: 'link', path:'/login', active: false
    },
    {
      title:'Sign up', type: 'link', path:'/register', active: false
    },
    {
      title:'Donate', type: 'link', path:'/donate', active: false
    },
    {title:'Contact us', type: 'link', path:'/contact', active: false}
  ];
}
