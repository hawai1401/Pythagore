# Théorème de Pythagore – Interface Web (Javascript)

Ce projet est une interface web interactive permettant d'appliquer ou de vérifier le théorème de Pythagore.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## Fonctionnalités

- **Deux modes** :
  - **Normal** : calcule un côté manquant (côté ou hypoténuse)
  - **Vérification** : teste si un triangle est rectangle
- **Affichage visuel** des valeurs sur un triangle stylisé
- **Console intégrée** pour afficher le résultat
- **Interface responsive** (mobile & desktop)

---

## Structure

### `index.html`
Structure du formulaire, composants d'entrée, console de réponse et visualisation du triangle.

### `style.css`
Stylisation responsive avec design coloré et animations de boutons.

### `app.js`
Script gérant :
- la logique métier (calcul du côté manquant ou vérification)
- les entrées utilisateur
- l'affichage dynamique
- les erreurs critiques

---

## Lancement

Aucune dépendance ni installation requise.

1. Cloner le projet ou télécharger les fichiers
2. Ouvrir `index.html` dans un navigateur

---

## Exemple d'utilisation

### Mode "Normal"
- Choisir "Normal"
- Sélectionner le côté à trouver (`côté` ou `hypoténuse`)
- Entrer les deux autres longueurs
- Cliquer sur **Calculer**
- Résultat affiché en bas + mise à jour du triangle

### Mode "Vérification"
- Choisir "Vérification"
- Entrer les trois longueurs
- Cliquer sur **Calculer**
- Affiche si le triangle est rectangle ou non

---

## Dépendances externes

- [Google Fonts - Poppins, Roboto](https://fonts.google.com/)
- Aucun framework ni bibliothèque tierce

---

## Remarques

- Tous les champs ne sont pas requis en mode "normal", mais il faut **exactement 2 longueurs**
- En mode "vérification", les **3 longueurs doivent être définies**
- L’unité affichée est fixée à `mètres`, modifiable dans la variable `unite` du script JS

---

## Auteurs

- Interface & logique : hawai1401
- Technologies : HTML5 / CSS3 / Javascript ES6

---
