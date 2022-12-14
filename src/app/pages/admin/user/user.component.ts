import { IUsers } from './../../../model/user.model';
import { UsersService } from './../../../services/users/users.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
  constructor(
    private userService:UsersService,
    private modalService: BsModalService
  ){}
  modalRef?: BsModalRef;
    public listUsers:IUsers[] | IUsers;
    public detailsUsers:IUsers
    public listTitle:string[]  = ['ID','Username', 'Roles']

    ngOnInit(){
      this.getUsers();
    }

    getUsers(){
      return this.userService.getManyUser.subscribe(res => this.listUsers = res.data)
    }

    getOneUser(id:string){
      return this.userService.getOneUser(id).subscribe(res => this.detailsUsers = res.data)
    }

    openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    }
}
