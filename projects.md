---
layout: default
title: Projets
subtitle: Tous mes projets, du plus récent au plus ancien
hero_height: is-small
permalink: /projects/
---

{%- assign projects = site.projects | where: "layout", "project" | sort: "started" | reverse -%}
{% include cards.html items=projects empty="Aucun projet pour l'instant." %}
