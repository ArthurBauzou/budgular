import { Component, OnInit } from '@angular/core';

import { User } from '../classes'
import { UserService } from '../user.service'
// import { FormGroup } from '@angular/forms'

@Component({
  selector: 'userlist',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  selectedUser:User
  userlist: User[]
  subscribeForm:boolean = false
  loginPass:string = ''
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
    this.loginPass = ''
    this.selectedUser = user
    this.subscribeForm = false
  }

  subscribeEvent() {
    this.getUsers()
    this.subscribeForm = false
  }

  login(data:any) :void{
    console.log(data)
    console.log (this.loginPass)
    this.userService
      .login(data)
      .then(res => {})
  }
}
