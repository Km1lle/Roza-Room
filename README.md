# Roza-Room

Documentation et journal de bord de mes projets personnels. Site [Jekyll](https://jekyllrb.com) avec le thème [Bulma Clean Theme](https://github.com/chrisrhymes/bulma-clean-theme), structure inspirée de [doc.makerspace-amiens.fr](https://github.com/Makerspace-Amiens/doc.makerspace-amiens.fr).

## Lancer le site en local

Prérequis : Ruby 3.x avec le DevKit ([RubyInstaller](https://rubyinstaller.org) sous Windows) et `make` (sous Windows : `winget install ezwinports.make`).

```bash
make install   # une fois : installe les dépendances
make serve     # lance le site avec rechargement automatique
```

Autres commandes : `make build` (construit le site dans `_site/`), `make clean` (supprime le site généré et les caches).

Le site est alors disponible sur <http://localhost:4000>.

## Organisation

| Dossier | Contenu | URL |
| --- | --- | --- |
| `_projects/<slug>/` | Un dossier par projet : `index.md` + une page par section | `/projects/<slug>/` |
| `_docs/materiel/` | Ressources : machines, outils, composants | `/docs/materiel/...` |
| `_docs/logiciels/` | Ressources : CAO, trancheurs… | `/docs/logiciels/...` |
| `_docs/guides/` | Ressources : tutoriels, méthodes | `/docs/guides/...` |
| `_docs/references-externes/` | Ressources : liens et docs trouvés ailleurs | `/docs/references-externes/...` |
| `_posts/` | Journal de bord (`AAAA-MM-JJ-titre.md`) | `/journal/...` |
| `esquisses/_posts/` | Esquisses : idées et petits projets sans fin prévue, aussi listées dans le journal | `/esquisses/...` |
| `_templates/` | Modèles vierges à copier (non publiés) | |

## Ajouter du contenu

- **Nouveau projet** : créer `_projects/<slug>/index.md` à partir de `_templates/projet-index.md`.
- **Nouvelle section de projet** : créer `_projects/<slug>/<section>.md` à partir de `_templates/projet-section.md`.
- **Nouvelle page de doc** : créer le fichier dans le bon sous-dossier de `_docs/` à partir de `_templates/doc.md`.
- **Nouvelle esquisse** : créer `esquisses/_posts/AAAA-MM-JJ-titre.md` à partir de `_templates/esquisse.md`.
- **Nouvelle entrée de journal** : créer `_posts/AAAA-MM-JJ-titre.md` à partir de `_templates/journal.md`.

Les listes (projets, sections, documentation, journal) se mettent à jour toutes seules.

## Mise en ligne

Le workflow `.github/workflows/pages.yml` publie le site sur GitHub Pages à chaque push sur `main`.
Dans les paramètres du dépôt GitHub : **Settings > Pages > Source : GitHub Actions**.
