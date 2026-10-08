# PortfolioBelonneMN

Portfolio de **Belonne Mitombe**, photographe à Kinshasa. Site statique (HTML/CSS/JS sans framework), généré par un petit script Python.

## Structure

```
src/pages/        contenu de chaque page (HTML + métadonnées SEO en 1re ligne)
src/partials/     en-tête et pied de page partagés
docs/data/        projects.json et clients.json (contenu éditable)
docs/js/          modules ES : main, gallery, dialogs, contact, pdf
docs/css/         style.css
docs/img/         images WebP optimisées
build.py          génère les pages HTML dans docs/ (+ sitemap.xml, robots.txt)
```

## Modifier le contenu

- Projets / photos / témoignages : éditer `docs/data/*.json`.
- Textes des pages : éditer `src/pages/*.html`.
- Coordonnées (e-mail, téléphone, réseaux) : constantes `S` en haut de `build.py`.

Puis lancer `python3 build.py`. Ajouter un projet dans `projects.json` crée automatiquement sa page `projet-XX.html`.

## Prévisualiser et publier

```bash
cd docs && python3 -m http.server 8000   # http://localhost:8000
```

GitHub Pages : Settings → Pages → Branch `main`, dossier **/docs**.

## À compléter

- Descriptions des projets (vides pour l'instant) et textes de `mentions-legales.html`.
- Remplacer les témoignages d'exemple (John/Jane Doe) par de vrais avis.
- Confirmer l'adresse e-mail publique.
