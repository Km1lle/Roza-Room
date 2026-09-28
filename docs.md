---
layout: default
title: Documentation
subtitle: Ce que j'ai appris, réutilisable d'un projet à l'autre
hero_height: is-small
permalink: /docs/
---

{%- comment -%}
  Chaque section liste les pages du sous-dossier correspondant de _docs/.
  Pour ajouter une section : créer le dossier et copier un bloc ci-dessous.
{%- endcomment -%}

<h2 class="title is-4 mt-6">Tutoriels</h2>

<p class="has-text-grey mb-4">Pas à pas, pour apprendre en faisant.</p>
{%- assign items = site.docs | where_exp: "d", "d.path contains '_docs/tutorials/'" | sort: "title" -%}
{% include cards.html items=items %}

<h2 class="title is-4 mt-6">Guides</h2>

<p class="has-text-grey mb-4">Comment faire une tâche précise.</p>
{%- assign items = site.docs | where_exp: "d", "d.path contains '_docs/how-to-guides/'" | sort: "title" -%}
{% include cards.html items=items %}

<h2 class="title is-4 mt-6">Concepts</h2>

<p class="has-text-grey mb-4">La théorie et les principes derrière.</p>
{%- assign items = site.docs | where_exp: "d", "d.path contains '_docs/concepts/'" | sort: "title" -%}
{% include cards.html items=items %}

<h2 class="title is-4 mt-6">Références</h2>

<p class="has-text-grey mb-4">Fiches composants, machines, logiciels.</p>
{%- assign items = site.docs | where_exp: "d", "d.path contains '_docs/references/'" | sort: "title" -%}
{% include cards.html items=items %}
