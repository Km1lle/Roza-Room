---
title: Exemple de tutoriel
subtitle: Faire clignoter une LED
description: Un tutoriel de démonstration, à copier pour en écrire un nouveau.
difficulty: 1
time: 1
tags:
  - électronique
---

## Matériel

- Une carte ESP32
- Une LED et une résistance de 220 Ω

## Étape 1 : Câbler la LED

Relier la LED à la broche 2 à travers la résistance.

## Étape 2 : Téléverser le programme

```cpp
void setup() {
  pinMode(2, OUTPUT);
}

void loop() {
  digitalWrite(2, HIGH);
  delay(500);
  digitalWrite(2, LOW);
  delay(500);
}
```
