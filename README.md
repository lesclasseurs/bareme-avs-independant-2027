# Barème AVS/AI/APG 2027 des indépendants (données + calcul)

Le barème dégressif des cotisations AVS/AI/APG des indépendants, valable dès le 1er janvier 2027, en JSON et CSV, avec une fonction de calcul en JavaScript (sans dépendance).

- [`bareme.json`](bareme.json), [`bareme.csv`](bareme.csv) : 18 classes de revenu et taux total.
- [`cotisation.mjs`](cotisation.mjs) : calcul de la cotisation mensuelle, trimestrielle et annuelle.

```
node cotisation.mjs 50000
# revenu retenu 50000, taux 7.84 %, 326.60 CHF/mois, 979.80 CHF/trimestre, 3919.20 CHF/an
```

Règles appliquées : revenu arrondi aux 100 CHF inférieurs ; le taux de la classe s'applique à tout le revenu (pas par tranche) ; sous 10 300 CHF, cotisation minimale de 541 CHF par an ; dès 61 500 CHF, 10 %.

Ne comprend pas les frais d'administration de la caisse de compensation, ni l'intérêt du capital propre à déduire du revenu. Valeurs à vérifier auprès de votre caisse. Modèle d'information, pas un conseil fiscal.

Source : OFAS, Tables des cotisations AVS/AI/APG, indépendants et personnes sans activité lucrative, document 318.117.50, valable dès le 1er janvier 2027.

Calculateur en ligne : https://lesclasseurs.ch/cotisations-avs-independant-2027-calculateur.html

Licence : MIT. Contact : contact@lesclasseurs.ch
