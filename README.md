# Lancer le projet #

Lancer le backend : npm run start:dev

Lancer le frontend : ng serve --open

Il est nécessaire de lancer les deux afin d'avoir un système opérationnel.


# Choix de conception backend #

Peu de choix de conception au niveau du backend ont été fait car le tutoriel a été suivi.

Afin d'avoir un aperçu global de la structure et des outils utilisés pour ce TP, vous pouvez consulter le pdf "CR_WEB.pdf" disponible à la racine du projet.

# Choix de conception frontend #

Le frontend est composé de composants interagissant entre eux.

La plupart des interactions s'effectuent directement dans les listes d'utilisateurs et d'associations, notamment la logique de la consultation et de la suppression. Les informations nécessaires à la navigation vers les fiches utilisateurs et associations sont notamment sauvegardées en tant que token dans le "token storage". Cela détermine la fiche à laquelle on accède.
On a donc une seule route avec un changement dynamique de l'information de la fiche.

## Barre des tâches ##

Au niveau de la barre des tâches, nous avons créé une page `Home` de façon à acceuillir l'utilisateur lors de sa connexion néanmoins celle ci n'a pas d'utilité particulière.
Nous avons également rajouté des raccourcis `Users` pour accéder à la table des utilisateurs, `Associations` pour avoir accès à la table des associations, `Profil` pour avoir accès à son profil ainsi qu'une barre de recherche `Search` pour la rendre accessible à tout moment.

`Table users` : nous avons choisi de séparer l'écran en deux parties, la première pour afficher la table d'utilisateurs et l'autre pour pouvoir en ajouter.

`Table association` : ici nous n'avons pu qu'afficher la table des associations.

Au niveau de ces deux tables, nous avons ajouté une colonne `Info` qui nous permet de cliquer pour chaque ligne sur un logo donnant des informations sur l'utilisateur ou l'association désigné.

`Barre de recherche`: elle permet de rechercher un utilisateur ou une association à partir de son `id`.

`Profil`: le profil permet de visualiser les informations de notre profil et de les modifier.

## Redirection et blocage ##

Lorsque l'utilisateur navigue sur une url innexate, il est automatiquement redirigé vers le `Home`. Cette formulation est implémentée dans `app-routing.module.ts`. Dans ce même fichier nous avons implémenté les routes pour chaque composant et inscrit si nous voulions que le lien se bloque lorsque l'utilisateur n'est pas connecté (via AuthGuard).


