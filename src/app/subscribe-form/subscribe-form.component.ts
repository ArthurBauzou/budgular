import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { User } from '../classes';
import { UserService } from '../user.service'

function passConfirm(pass:string, pass2:string) :ValidatorFn {
  return(group:FormGroup): {[key:string]:any} => {
    const a = group.controls[pass]
    const b = group.controls[pass2]
    if (a.value !== b.value) {
      return {'differentPassword': true}
    }
  }
}


@Component({
  selector: 'subscribe',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {

  @Output() subscribeEvent:EventEmitter<any> = new EventEmitter()
  @Input() users:User[]
  subForm:FormGroup

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.subForm = fb.group({
      name: ['', [Validators.required, Validators.maxLength(24)]],
      pass: ['', [Validators.required, Validators.minLength(4)]],
      pass2: ''
    }, {validator: passConfirm('pass', 'pass2')})
    // cette ligne observe le formulaire et revoie son contenu à chaque fois qu'une valeur change. C'est un Observable.
    this.subForm.valueChanges.subscribe(data => this.subVerif(data))
  }

  subVerif(data?:any):void {
    if (!this.subForm) {return}
    const form = this.subForm

    for (const field in this.subErrors) {
      this.subErrors[field] = ''
      const control = form.get(field)

      if (control && control.touched && !control.valid) {
        const errMsg = this.validationMessages[field]
        for (const key in control.errors) {
          this.subErrors[field] += errMsg[key] +'\n'
        }
      }
    }
  }

  subErrors:object = {
    'name': '',
    'pass': ''
  }

  validationMessages:object = {
    'name': {
      'required': 'Vous devez entrer un nom',
      'maxlength': 'Votre nom ne peut éxceder 24 caractères'
    },
    'pass': {
      'required': 'Vous devez entrer un mot de passe',
      'minlength': 'Un mot de passe doit contenir au moins 4 caractères'
    },
    'pass2': {
      'differentPassword': 'Veuillez confirmer votre mot de passe'
    }
  }

  ngOnInit() {
  }

  onSubmit(data:any) : void {
    let newuser:any = data
    delete newuser.pass2
    console.log('submit test', newuser)
    this.userService
      .addUser(newuser)
      .then(() => this.subscribeEvent.emit(null))
  }

}
