# Budgular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Roadmap

Ce projet utilise MongoDb et express en plus d'angular. https://robomongo.org/ pour avoir un aperçu de la base mongo.
Les exemples sont sur https://github.com/skalv.

Nous aurons principalement deux types d'objets : 
 - user (name, id, pssword)
 - transaction (title, id, value, type, user)

Le site doit commencer sur une page de login, depuis laquelle on peut créer un nouvel utilisateur.
Une fois loggé, on accède à la page de profil qui contient une liste des transactions afiliées à la personne concernée.
Depuis cette page on peut créer, supprimer et modifier les transctions.

Commençons par nous séparer les tâches basiquement. On fait une partie "api" qui va agir comme un webservice. Pour commencer on devrait faire en sorte que l'adresse localhost:3000/api/users revoie un json des utilisateurs.
De mon côté je vais faire une page d'accueil qui charge les utilisateurs et les affiche dans une liste, et un bouton "add user" qui fait apparaître un formulaire d'inscription. Ce formulaire va envoyer des données en post sur localhost/api/users pour l'inscription.
Si déjà on fait ça on est bien.

//Test commit 1.0