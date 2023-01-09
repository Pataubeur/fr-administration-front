# Lancer le projet #

Lancer le backend : npm run start:dev

Lancer le frontend : ng serve --open

Il est nécessaire de lancer les deux afin d'avoir un système opérationnel.

# Choix de conception backend #

Peu de choix de conception au niveau du backend ont été fait car le tutoriel a été suivi.

Afin de connaître des informations plus générales sur la logique de conception, vous pouvez consulter le pdf "CR_WEB.pdf" disponible à la racine du projet.

# Choix de conception frontend #

Le frontend est composé de composants interagissant entre eux.

La plupart des interactions s'effectuent directement dans les listes d'utilisateurs et d'associations, notamment la logique de la consultation et de la suppression. Les informations nécessaires à la navigation vers les fiches utilisateurs et associations sont notamment sauvegardées en tant que token dans le "token storage". Cela détermine la fiche à laquelle on accède.
On a donc une seule route avec un changement dynamique de l'information de la fiche.

Nous avons décidé d'intégrer la barre de recherche directement à la barre de navigation pour la rendre accessible à tout moment.