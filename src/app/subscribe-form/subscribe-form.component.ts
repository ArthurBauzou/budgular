import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { User } from '../classes';
import { UserService } from '../user.service'


@Component({
  selector: 'subscribe',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {

  subForm:FormGroup

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
      this.subForm = fb.group({
        name: 'testname',
        pass: 'testpass',
        pass2: 'testpass2'
      })
    }

  ngOnInit() {
  }

  onSubmit(value:any) : void {
    console.log('submit test', value)
  }

}
