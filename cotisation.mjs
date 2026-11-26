// Cotisation AVS/AI/APG d'un indépendant, barème 2027 (hors frais d'administration de la caisse).
// Usage : node cotisation.mjs 55000
import fs from 'node:fs';
const B = JSON.parse(fs.readFileSync(new URL('./bareme.json', import.meta.url), 'utf8'));

export function cotisation(revenu) {
  const r = Math.floor(revenu / 100) * 100;            // arrondi aux 100 CHF inférieurs
  if (r < B.revenu_minimal) return { revenu_retenu: r, taux_pct: null, mois: 45.10, trimestre: 135.30, annee: B.cotisation_minimale_annuelle_chf };
  let taux = B.classes[0].taux_pct;
  for (const c of B.classes) if (r >= c.revenu_des) taux = c.taux_pct;
  const milli = Math.round(taux * 1000);                 // taux en millièmes de %
  const mois = r >= B.revenu_taux_plein ? Math.floor((milli * r + 60000) / 120000) / 10
                                        : Math.floor(milli * r / 120000) / 10;
  return { revenu_retenu: r, taux_pct: taux, mois, trimestre: Math.round(mois * 3 * 100) / 100, annee: Math.round(mois * 12 * 100) / 100 };
}

if (process.argv[2] !== undefined && import.meta.url === `file://${process.argv[1]}`) {
  console.log(cotisation(Number(process.argv[2])));
}
