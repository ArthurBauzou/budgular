## Roadmap

Nous aurons principalement deux types d'objets : 
 - user (name, id, password)
 - transaction (id, title, value, date, type, user)

Le site doit commencer sur une page de login, depuis laquelle on peut créer un nouvel utilisateur.
Une fois loggé, on accède à la page de profil qui contient une liste des transactions afiliées à la personne concernée.
Depuis cette page on peut créer, supprimer et modifier les transctions.

Commençons par nous séparer les tâches basiquement. On fait une partie "api" qui va agir comme un webservice. Pour commencer on devrait faire en sorte que l'adresse localhost:3000/api/users revoie un json des utilisateurs.
De mon côté je vais faire une page d'accueil qui charge les utilisateurs et les affiche dans une liste, et un bouton "add user" qui fait apparaître un formulaire d'inscription. Ce formulaire va envoyer des données en post sur localhost/api/users pour l'inscription.
Si déjà on fait ça on est bien.

## Instructions pour lancer le site

1)  Installer [mongodb](https://www.mongodb.com/download-center)
    Optionnel : [RoboMongo](https://robomongo.org/) pour avoir un aperçu de la base mongo.
    Après l'instalation, penser à créer un dossier data/db à la racine du disque (sous windows en tous cas)
2)  Installer les dépendances avec `npm i`
3)  Construire le site avec `ng build`
4)  Lancer la base de donnée et lancer le site avec `node server.js`

## Notes de developpement

[Article sur les reactiveForms](https://scotch.io/tutorials/angular-2-form-validation)

