# CLAUDE.md

Site **Jekyll**, thème `bulma-clean-theme 1.3.1`, contenu en **français**, rédigé en Markdown.
Lancer en local : `bundle exec jekyll serve --livereload` (<http://localhost:4000>).

## Structure

| Contenu | Emplacement | Layout |
| --- | --- | --- |
| Accueil d'un projet | `_projects/<slug>/index.md` | `project` (automatique) |
| Section d'un projet | `_projects/<slug>/<section>.md` | `documentation` (automatique) |
| Documentation réutilisable | `_docs/<genre>/<page>.md` | `documentation` (automatique) |
| Journal de bord | `_posts/AAAA-MM-JJ-<titre>.md` | `post` (automatique) |

Les layouts sont attribués par les `defaults` de `_config.yml` : ne pas mettre de `layout:` dans ces fichiers.

Genres de `_docs/` (Diátaxis) : `tutorials/` (pas à pas), `how-to-guides/` (tâche précise), `concepts/` (théorie), `references/` (fiches). Le dossier suffit à classer la page sur `/docs/`, aucun champ `type` n'est nécessaire.

## Front matter

Modèles complets dans `_templates/` (dossier non publié). Points importants :

- **Projet** (`index.md`) : `permalink: /projects/<slug>/` obligatoire ; `status` parmi `idée`, `en cours`, `en pause`, `terminé` ; `started: AAAA-MM` sert au tri ; `docs:` liste les URLs de `_docs/` utilisées.
- **Section de projet** : `order:` fixe l'ordre dans la liste et la navigation précédent/suivant.
- **Journal** : `project: <slug>` rattache l'entrée au projet (même valeur que le nom du dossier) ; `<!--more-->` sépare le résumé du reste.
- Une valeur YAML contenant ` : ` doit être entre guillemets.

## Rédaction

- Le `title` du front matter fait le H1 (dans le hero) : le corps commence à `##`.
- Titres d'étapes : `## Étape 1 : Câbler l'écran`.
- Nommer le langage des blocs de code. Les blocs ` ```mermaid ` sont rendus en schéma.
- Encadré : `{% include message.html status="is-warning" title="Attention" message="..." %}` (`is-info`, `is-success`, `is-warning`, `is-danger`).
- Images : dans un sous-dossier du même nom que la page, noms en kebab-case descriptifs.

## Thème

- Ne jamais modifier le gem ; surcharger dans `_layouts/`, `_includes/` et `assets/css/app.scss`.
- Style « plan technique art déco », repris du logo : page claire sur papier quadrillé, bandes sombres (navbar, hero, pied de page) avec quadrillage, rayons et coins en double trait dorés. Titres en Josefin Sans (chargée dans `head-scripts.html`).
- Palette (variables en tête de `app.scss`, `force_theme: light`). Couleurs du logo : `$nuit` #0A2A2A (bandes sombres, texte), `$vert` #1F7A66 (liens, quadrillage), `$or` #D9B15C (ornements, filets), `$or-clair` #E9C56C (accents sur fond sombre). Dérivées : `$papier` #FAF4E6 (fond), `$carte` #FFFCF5, `$creme` #F4E8CF (texte sur sombre), `$vert-profond` #103B36 (code), `$bronze` #7D5E1C (petit texte doré sur fond clair : l'or du logo n'y est pas lisible).
- Ornements : mixins `quadrillage()` et `coins()` dans `app.scss` ; bandeau dans `_includes/hero.html` (surcharge du thème). Coloration du code dans `app.scss` ; couleurs Mermaid dans `footer-scripts.html`.
- Logo : `assets/img/logo.svg`, affiché dans la navbar et le pied de page ; `assets/img/favicon.png` (icône d'onglet, déclarée par `favicon:` dans `_config.yml`).
- Surcharges existantes : `header.html` (logo), `footer.html`, `hero.html` (bandeau art déco), `head.html` (version sur app.css contre le cache), `head-scripts.html` (police), `pagination.html` (traduction), `footer-scripts.html` (Mermaid), layout `post`.
- Includes maison : `cards.html` (grille de cartes), `status.html`, `message.html`, `project-context.html`.
