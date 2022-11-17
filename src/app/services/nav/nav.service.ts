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
      title:'Trang Chủ', type: 'link', path:'/'
    },
    {
      title:'Khảo sát', type: 'sub', path:'/', active: false, children: [
        {
          path:"/do-survey", title: 'Làm khảo sát', type: 'link'
        },
        {
          path:"/result", title: 'Kết quả khảo sát', type: 'link'
        },
      ]
    },
    {
      title:'Đăng nhập', type: 'link', path:'/login', active: false
    },
    {
      title:'Đăng kí', type: 'link', path:'/register', active: false
    },
    {
      title:'Donate', type: 'link', path:'/donate', active: false
    },
    {title:'Liên hệ', type: 'link', path:'/contact', active: false}
  ];
  items = new BehaviorSubject<Menu[]>(this.menuItems);
}
