import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { User } from '../classes';
import { UserService } from '../user.service'


// deux fonctions de validation custom :
// vérifie que les deux valeurs dans les champs de password sont identiques
function passConfirm(pass:string, pass2:string) :ValidatorFn {
  return(group:FormGroup): {[key:string]:any} => {
    const a = group.controls[pass].value
    const b = group.controls[pass2].value
    if (a && b && a !== b) {
      return {'differentPassword': true}
    }
  }
}
// vérifie que le nom de l'utilisateur n'est pas déjà dans la liste
function nameNotInBase(namelist:string[]) :ValidatorFn {
  return(control: AbstractControl): {[key:string] :any} => {
    if (control.value) {
      const no:boolean = namelist.includes(control.value.toLowerCase())
      if (no) return {'alreadyInBase': true}
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
  usernames:string[] = [];
  subForm:FormGroup

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.subForm = fb.group({
      name: ['', [Validators.required, Validators.maxLength(24), nameNotInBase(this.usernames)]],
      pass: ['', [Validators.required, Validators.minLength(4)]],
      pass2: ''
    }, {validator: passConfirm('pass', 'pass2')})
    // cette ligne observe le formulaire et revoie son contenu à la fonction d'affichage des erreurs à chaque fois qu'une valeur change.
    this.subForm.valueChanges.subscribe(data => this.showErrors(data))

  }

  // crée une liste des noms d'utilisateurs
  createUsernames():void {
    this.userService.getUsers()
      .then(users => {
        for (let user of users) {
          this.usernames.push(user.name.toLowerCase())
        }
      })
  }

  // affiche les messages d'erreurs
  showErrors(data?:any):void {
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
      'maxlength': 'Votre nom ne peut éxceder 24 caractères',
      'alreadyInBase': 'Nom d\'utilisateur déjà pris'
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
    this.createUsernames();
  }

  // poste les données du formulaire, met à jour la liste des utilisateurs puis remet les valeurs du formulaire à zéro
  onSubmit(data:any) : void {
    let newuser:any = data
    delete newuser.pass2
    console.log('submit test', newuser)
    this.userService
      .addUser(newuser)
      .then(() => {
        this.usernames.push(newuser.name.toLowerCase())
        this.subscribeEvent.emit(null)
      })
  }

}
