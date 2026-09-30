---
layout: default
title: Roza-Room
subtitle: Documentation et journal de bord de mes projets personnels
hero_height: is-medium
---

{%- assign projects = site.projects | where: "layout", "project" | sort: "started" | reverse -%}

<div class="columns is-multiline mb-6">
    <div class="column is-3-desktop is-6-tablet">
        <a class="box doc-card" href="{{ '/projects/' | relative_url }}">
            <p class="title is-5"><span class="icon mr-2"><i class="fas fa-folder-open"></i></span>Projets</p>
            <p class="has-text-grey">La documentation de chaque projet : mécanique, électronique, logiciel.</p>
        </a>
    </div>
    <div class="column is-3-desktop is-6-tablet">
        <a class="box doc-card" href="{{ '/esquisses/' | relative_url }}">
            <p class="title is-5"><span class="icon mr-2"><i class="fas fa-pencil-ruler"></i></span>Esquisses</p>
            <p class="has-text-grey">Idées, essais et petits projets, sans ligne d'arrivée.</p>
        </a>
    </div>
    <div class="column is-3-desktop is-6-tablet">
        <a class="box doc-card" href="{{ '/journal/' | relative_url }}">
            <p class="title is-5"><span class="icon mr-2"><i class="fas fa-pen"></i></span>Journal de bord</p>
            <p class="has-text-grey">Les avancées, les essais et les ratés, au fil de l'eau.</p>
        </a>
    </div>
    <div class="column is-3-desktop is-6-tablet">
        <a class="box doc-card" href="{{ '/docs/' | relative_url }}">
            <p class="title is-5"><span class="icon mr-2"><i class="fas fa-book"></i></span>Ressources</p>
            <p class="has-text-grey">Matériel, logiciels, guides et références externes.</p>
        </a>
    </div>
</div>

<h2 class="title is-4 mt-6">Projets récents</h2>

{% include cards.html items=projects %}

<h2 class="title is-4 mt-6">Dernières entrées du journal</h2>

<ul class="journal-list">
{%- for post in site.posts limit: 5 -%}
    <li>
        <span class="has-text-grey">{{ post.date | date: "%d/%m/%Y" }}</span>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
{%- endfor -%}
</ul>
