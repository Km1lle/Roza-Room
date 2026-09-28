---
title: Électronique
subtitle: Projet exemple
description: Architecture, composants et câblage.
order: 2
---

## Architecture

```mermaid
graph LR
  Batterie --> Regulateur[Régulateur 5 V]
  Regulateur --> MCU[ESP32]
  MCU --> Driver[Driver moteurs]
  Driver --> Moteurs
```

## Composants

| Composant | Référence | Quantité |
| --- | --- | --- |
| Microcontrôleur | ESP32-S3 | 1 |

## Câblage

{% include message.html status="is-warning" title="Attention" message="Noter ici les pièges : polarités, tensions, etc." %}
