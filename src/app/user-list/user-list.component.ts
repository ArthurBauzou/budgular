import { Component, OnInit } from '@angular/core';

import { User } from '../classes'
import { UserService } from '../user.service'

@Component({
  selector: 'userlist',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userlist: User[]
  subscribeForm:boolean = false
  constructor(private userService: UserService) { }

  getUsers() :void {
    this.userService.getUsers()
      .then(users => {
        this.userlist = users
      })
  }

  ngOnInit() {
    this.getUsers()
  }

  switchSubForm():void {
    if (!this.subscribeForm) {
      this.subscribeForm = true;
    } else {
      this.subscribeForm = false;
    }
  }

}
