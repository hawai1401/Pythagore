# Pythagore — Script JavaScript

Script console utilisant le théorème de Pythagore pour :

- calculer un côté manquant (`côté n°1`, `côté n°2`, ou `hypoténus`) ;
- ou vérifier si un triangle est rectangle.

---

## Utilisation

1. Remplir les paramètres dans `Paramètres.json` :

```json
{
  "Unité de mesure": "",

  "Mode": "",

  "Coté à trouver": "",

  "Côté n°1": "",
  "Côté n°2": "",
  "Hypoténuse": ""
}
```


2. Lancer le script :

```bash
node Pythagore.js
```

---

## Valeurs attendues

- `"Unité de mesure"` : ex. `"mètres"`, `"m"`, etc.
- `"Mode"` : `"normal"` ou `"vérification"`
- `"Coté à trouver"` :
  - `"cote1"`
  - `"cote2"`
  - `"hypoténus"`

- `"Côté n°1"`, `"Côté n°2"`, `"Hypoténus"` : nombre ou `""` si inconnu (non utilisé dans le mode courant)

---

## Fonctionnement

- En **mode `normal`**, le script calcule le côté demandé à partir des deux autres.
- En **mode `vérification`**, il teste si le triangle est rectangle.
- En cas de champ manquant ou invalide, le script s’arrête avec un message d’erreur.

---

## Licence

Aucune licence fournie. Tous droits réservés.
