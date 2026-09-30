---
layout: default
title: Ressources
subtitle: Ce que j'ai appris, réutilisable d'un projet à l'autre
hero_height: is-small
permalink: /docs/
---

{%- comment -%}
  Chaque section liste les pages du sous-dossier correspondant de _docs/.
  Pour ajouter une section : créer le dossier et copier un bloc ci-dessous.
{%- endcomment -%}

<h2 class="title is-4 mt-6">Matériel</h2>

<p class="has-text-grey mb-4">Machines, outils et composants.</p>
{%- assign items = site.docs | where_exp: "d", "d.path contains '_docs/materiel/'" | sort: "title" -%}
{% include cards.html items=items %}

<h2 class="title is-4 mt-6">Logiciels</h2>

<p class="has-text-grey mb-4">CAO, trancheurs et autres outils logiciels.</p>
{%- assign items = site.docs | where_exp: "d", "d.path contains '_docs/logiciels/'" | sort: "title" -%}
{% include cards.html items=items %}

<h2 class="title is-4 mt-6">Guides</h2>

<p class="has-text-grey mb-4">Tutoriels et méthodes, pas à pas.</p>
{%- assign items = site.docs | where_exp: "d", "d.path contains '_docs/guides/'" | sort: "title" -%}
{% include cards.html items=items %}

<h2 class="title is-4 mt-6">Références externes</h2>

<p class="has-text-grey mb-4">Sites, documentations et ressources utiles trouvés ailleurs.</p>
{%- assign items = site.docs | where_exp: "d", "d.path contains '_docs/references-externes/'" | sort: "title" -%}
{% include cards.html items=items %}
