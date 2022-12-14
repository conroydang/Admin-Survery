import { NavService } from './../../../services/nav/nav.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../layouts/survey-layout/survey-layout.component.css','./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private NavService: NavService
  ) { }

  public menu:any;
  ngOnInit(): void {
   this.menu =  this.NavService.menuItems;

  }

}
