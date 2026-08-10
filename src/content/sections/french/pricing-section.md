---
enable: true
title: "Choisissez le cloud sécurisé **adapté à vos besoins**"
priceComparisonTitle: "Détails des formules"
description: "Découvrez nos formules tarifaires et choisissez celle qui correspond le mieux aux besoins de votre entreprise."
caption: "Tableau comparatif des tarifs Parsec Cloud"

list:
  # Business plan
  - enable: true
    featured: true
    badge:
      enable: true
      label: Saas
    name: Business
    description: Idéal pour les entreprises qui se lancent dans le cloud sécurisé.

    price:
      - billing: Par mois / utilisateur
        prependValue:
        value: "25"
        appendValue: €
        tax: HT

    button:
      enable: true
      tag: "a"
      label: Choisir cette formule
      url: "https://sign.parsec.cloud/"
      rel: "noopener noreferrer"
      target: "_blank"
      variant: "fill"
      hoverEffect: "text-flip"

    mainFeaturesList:
      - value: Certification CSPN
        isEnabled: true
      - value: Stockage cloud souverain (100 Go offert)
        isEnabled: true
      - value: Chiffrement de bout en bout & Zero-Knowledge
        isEnabled: true
      - value: Espaces de travail collaboratifs étanches
        isEnabled: true
      - value: Utilisateurs externes (invités) illimités
        isEnabled: true

  # Govermnent plan
  - enable: true
    featured: false
    badge:
      enable: true
      label: Saas dédié
    name: Administration
    description: Parfait pour les ETI et les administrations ayant des besoins de chiffrement des données.

    price:
      - billing:
        value: Sur-mesure

    button:
      enable: true
      label: Demander un devis
      url: /contact/?plan=government
      rel:
      target:
      hoverEffect: "text-flip"

    mainFeaturesList:
      - value: Tout ce qui est inclus dans Business
        isEnabled: true
      - value: Hébergement SaaS dédié & Stockage sur-mesure
        isEnabled: true
      - value: Autorité de Séquestre
        isEnabled: true
      - value: Fédération d'identité (SSO OIDC)
        isEnabled: true
      - value: Possibilité d’alignement des directives (NIS2, DORA)
        isEnabled: true

  # Integrator plan
  - enable: true
    featured: false
    badge:
      enable: true
      label: On-premise
    name: Intégrateur
    description: Idéal pour les intégrateurs qui souhaitent ajouter Parsec à leur éco-système.

    price:
      - billing:
        value: Sur-mesure

    button:
      enable: true
      label: Demander un devis
      url: /contact/?plan=integrator
      rel:
      target:
      hoverEffect: "text-flip"

    mainFeaturesList:
      - value: Déploiement On-Premise (Docker / Linux)
        isEnabled: true
      - value: Chiffrement de bout en bout & Zero-Knowledge
        isEnabled: true
      - value: Interface en ligne de commande (CLI)
        isEnabled: true
      - value: Support SmartCard (PKI) & OpenBao
        isEnabled: true
      - value: Adaptation marque blanche
        isEnabled: true

comparison:
  - label: Infrastructure & Déploiement
    list:
      - value: Type d'hébergement
        included:
          - "Saas (mutualisé)"
          - "On premise / Saas (dédié)"
          - "On premise (auto-hébergé)"
      - value: Hébergement SecNumCloud
        included:
          - true
          - "Selon le type d'hébergement"
          - "Selon le type d'hébergement"
      - value: Localisation des serveurs
        included:
          - "France"
          - "Selon le type d'hébergement"
          - "Selon le type d'hébergement"

  - label: Utilisateurs et stockage
    list:
      - value: Nombre d'utilisateurs
        included:
          - "Illimité"
          - "Défini selon le contrat"
          - "Défini selon le contrat"
      - value: Nombre d'utilisateurs externes (invités)
        included:
          - "Illimité"
          - "Défini selon le contrat"
          - "Défini selon le contrat"
      - value: Stockage illimité
        included:
          - true
          - false
          - false
      - value: Volume de stockage inclus par défaut
        included:
          - "100 Go"
          - "Sur-mesure"
          - "Sur-mesure"
      - value: Stockage métadonnées
        included:
          - "PostgreSQL mutualisée"
          - "Sur-mesure"
          - "Sur-mesure"

  - label: Sécurité & Cryptographie
    list:
      - value: Chiffrement bout-en-bout
        included:
          - true
          - true
          - true
      - value: Architecture Zero-Knowledge
        included:
          - true
          - true
          - true
      - value: Fichier de récupération (Recovery)
        included:
          - true
          - true
          - true
      - value: Autorité de Séquestre
        included:
          - false
          - true
          - true
      - value: Journaux d'activité (Logs)
        included:
          - true
          - true
          - true

  - label: Conformité
    list:
      - value: Alignement directives NIS2 / DORA / CRA
        included:
          - true
          - _Sur devis supplémentaire_
          - _Sur devis supplémentaire_
      - value: Certification CSPN
        included:
          - true
          - true
          - true

  - label: Accès et Identité
    list:
      - value: Enrôlement sécurisé des terminaux
        included:
          - true
          - true
          - true
      - value: Double authentification (MFA)
        included:
          - true
          - true
          - true
      - value: Fournisseur d'identité OIDC (SSO)
        included:
          - false
          - true
          - true
      - value: Gestion des secrets (OpenBao/Vault)
        included:
          - false
          - true
          - true
      - value: Support SmartCard (PKI)
        included:
          - false
          - true
          - true

  - label: Automatisation & Support
    list:
      - value: Interface ligne de commande (CLI)
        included:
          - true
          - true
          - true
      - value: Support technique
        included:
          - true
          - true
          - true
---
