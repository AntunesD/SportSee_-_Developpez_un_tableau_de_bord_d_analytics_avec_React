# Sportsee - Tableau de bord d'application sportive

(Ce projet est un projet fictif d'un parcours d'OpenClassrooms)

Sportsee est une application de tableau de bord sportif permettant aux utilisateurs de visualiser différentes informations sur leurs activités physiques. Le projet est développé en utilisant React.js avec l'utilisation de Sass pour le stylisme et Recharts pour la visualisation des graphiques.

## Maquette Figma

La maquette Figma du projet peut être consultée [ici](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1).


## Utilisation

Avant de commencer, assurez-vous d'avoir deux terminaux ouverts.

### Backend

1. Ouvrez un terminal.
2. Accédez au dossier backend en utilisant la commande `cd sportsee-back`.
3. Lisez attentivement le README du dossier backend pour configurer et démarrer le serveur.

### Frontend

1. Ouvrez un autre terminal.
2. Accédez au dossier principal du projet en utilisant la commande `cd sportsee-front`.
3. Installez les dépendances en exécutant `npm install`.
4. Une fois les dépendances installées, lancez l'application en utilisant `npm start`.

Assurez-vous que les dépendances de développement, telles que Node.js et npm, sont installées sur votre système.

## Structure des principal élément du front du Projet

```
sportsee-front/
│
└── src/
    ├── components/
    │   ├── Activity/
    │   │   └── Activity.js
    │   ├── Average/
    │   │   └── Average.js
    │   ├── Performance/
    │   │   └── Performance.js
    │   └── Score/
    │       └── Score.js
    │
    └── services/
        └── CallApi/
            ├── GetId.js
            ├── GetActivity.js
            ├── GetAverage.js
            └── GetPerformance.js

```

## Recharts

Recharts est une bibliothèque JavaScript largement utilisée pour la création de graphiques réactifs et interactifs dans les applications React. Ci-dessous, vous trouverez une brève explication des différents graphiques utilisés dans les composants de Sportsee, ainsi qu'un lien vers la documentation officielle de Recharts pour plus d'informations :

- [Documentation Recharts](https://recharts.org/)

### Graphiques Utilisés

1. **BarChart** : Ce graphique est utilisé pour visualiser l'activité quotidienne de l'utilisateur, affichant des informations telles que le poids et les calories brûlées. L'axe des abscisses correspond aux jours du mois courant, et un tooltip apparaît au survol.

2. **LineChart** : Utilisé pour afficher la durée moyenne des sessions, ce graphique présente la durée moyenne des sessions sur l'axe des abscisses, avec un tooltip affichant des détails supplémentaires au survol.

3. **RadarChart** : Ce graphique est utilisé pour représenter le type d'activités réalisées par l'utilisateur sous forme de radar chart. Chaque axe du radar représente un type d'activité, et la zone couverte par le radar indique la fréquence ou l'intensité de chaque activité.

4. **PieChart** : Utilisé pour afficher le score moyen de l'utilisateur, ce graphique circulaire présente une vue fractionnée du pourcentage accompli par rapport à l'objectif fixé. Le cercle représente le taux d'accomplissement de l'objectif pour une période donnée.

Pour plus de détails sur la façon d'utiliser ces graphiques avec Recharts, veuillez consulter la documentation officielle de Recharts.

## Call API

Le dossier `CallApi` contient plusieurs fichiers JavaScript, chacun exportant une fonction permettant d'effectuer une requête fetch vers une adresse spécifique de l'API. Ces fonctions sont conçues pour récupérer des données spécifiques de l'utilisateur en fonction de son identifiant. L'unique paramètre requis pour ces fonctions est l'ID de l'utilisateur.

Voici une brève description de chaque fichier et de son utilisation :

- **GetId.js** : Cette fonction récupère des informations générales sur l'utilisateur en utilisant la route `/user/:id`.

- **GetActivity.js** : Utilise la route `/user/:id/activity` pour obtenir des détails sur l'activité quotidienne de l'utilisateur, tels que le poids et les calories brûlées.

- **GetAverage.js** : Récupère la durée moyenne des sessions de l'utilisateur en utilisant la route `/user/:id/average-sessions`.

- **GetPerformance.js** : Cette fonction récupère les types d'activités réalisées par l'utilisateur en utilisant la route `/user/:id/performance`.

- **GetNutrition.js** : Utilise la route `/user/:id/activity` pour obtenir des informations sur les calories, protéines, glucides et lipides consommés par l'utilisateur.

Chaque fonction exportée est conçue pour être utilisée avec l'ID de l'utilisateur comme seul paramètre, facilitant ainsi l'intégration et la récupération des données spécifiques de l'utilisateur depuis l'API.

## Contributeur

Antunes David