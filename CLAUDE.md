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
- Palette (variables en tête de `app.scss`, thème clair forcé) : blanc, `$nuit` #001724 (navbar, texte), `$sarcelle` #15676D (principale, liens), `$creme` #FFEBD1 (fonds doux), `$orange` #FF7A00 (accents, jamais en texte sur blanc), `$brique` #79280E (survol, dates, danger). Les couleurs Mermaid sont dans `footer-scripts.html`.
- Surcharges existantes : `header.html`, `footer.html`, `pagination.html` (traduction), `footer-scripts.html` (Mermaid), layout `post`.
- Includes maison : `cards.html` (grille de cartes), `status.html`, `message.html`, `project-context.html`.
