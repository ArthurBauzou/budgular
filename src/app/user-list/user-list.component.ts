import { Component, OnInit } from '@angular/core';

import { User } from '../classes'
import { UserService } from '../user.service'

@Component({
  selector: 'userlist',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  selectedUser:User
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
    this.selectedUser = null
    if (!this.subscribeForm) {
      this.subscribeForm = true
    } else {
      this.subscribeForm = false
    }
  }

  selectUser(user:User):void {
    console.log(user)
    this.selectedUser = user
    this.subscribeForm = false
    console.log(this.selectedUser)
  }

  subscribeEvent() {
    this.subscribeForm = false
    this.getUsers()
  }

}
