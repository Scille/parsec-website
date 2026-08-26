---
enable: true
title: "Choose the secure cloud **adapted to your needs**"
priceComparisonTitle: "Plan details"
description: "Discover our pricing plans and choose the one that best suits your organization's needs."
caption: "Comparative table of Parsec Cloud plans"

list:
  # Business plan
  - enable: true
    featured: true
    badge:
      enable: true
      label: Saas
    name: Business
    description: Ideal for businesses taking their first steps into the secure cloud.

    price:
      - billing: Per month / user
        prependValue:
        value: "25"
        appendValue: €
        tax: Excl. VAT

    button:
      enable: true
      tag: "a"
      label: Choose this plan
      url: "https://sign.parsec.cloud/"
      rel: "noopener noreferrer"
      target: "_blank"
      variant: "fill"
      hoverEffect: "text-flip"
      data-umami-event: "pricing-cta"
      data-umami-event-location: "business"

    mainFeaturesList:
      - value: CSPN Certification
        isEnabled: true
      - value: Sovereign cloud storage (100GB included)
        isEnabled: true
      - value: End-to-end encryption & Zero-Knowledge
        isEnabled: true
      - value: Isolated collaborative workspaces
        isEnabled: true
      - value: Unlimited external users (guests)
        isEnabled: true

  # Administration plan
  - enable: true
    featured: false
    badge:
      enable: true
      label: Dedicated SaaS
    name: Administration
    description: Perfect for mid-sized companies and public administrations with data encryption needs.

    price:
      - billing:
        value: Custom

    button:
      enable: true
      label: Request a quote
      url: /contact/?plan=administration
      rel:
      target:
      hoverEffect: "text-flip"
      data-umami-event: "pricing-cta"
      data-umami-event-location: "administration"

    mainFeaturesList:
      - value: Everything included in Business
        isEnabled: true
      - value: Dedicated SaaS hosting & custom storage
        isEnabled: true
      - value: Escrow Authority
        isEnabled: true
      - value: Identity federation (SSO OIDC)
        isEnabled: true
      - value: Possible alignment with regulatory directives (NIS2, DORA)
        isEnabled: true

  # Integrator plan
  - enable: true
    featured: false
    badge:
      enable: true
      label: On-premise
    name: Integrator
    description: Ideal for integrators looking to add Parsec to their ecosystem.

    price:
      - billing:
        value: Custom

    button:
      enable: true
      label: Request a quote
      url: /contact/?plan=integrator
      rel:
      target:
      hoverEffect: "text-flip"
      data-umami-event: "pricing-cta"
      data-umami-event-location: "integrator"

    mainFeaturesList:
      - value: On-premise deployment (Docker / Linux)
        isEnabled: true
      - value: End-to-end encryption & Zero-Knowledge
        isEnabled: true
      - value: Command-line interface (CLI)
        isEnabled: true
      - value: SmartCard support (PKI) & OpenBao
        isEnabled: true
      - value: White-label customization
        isEnabled: true

comparison:
  - label: Infrastructure & Deployment
    list:
      - value: Hosting type
        included:
          - "SaaS (shared)"
          - "On-premise / SaaS (dedicated)"
          - "On-premise (self-hosted)"
      - value: SecNumCloud hosting
        included:
          - true
          - "Depending on hosting type"
          - "Depending on hosting type"
      - value: Server location
        included:
          - "France"
          - "Depending on hosting type"
          - "Depending on hosting type"

  - label: Users and storage
    list:
      - value: Number of users
        included:
          - "Unlimited"
          - "Defined per contract"
          - "Defined per contract"
      - value: Number of external users (guests)
        included:
          - "Unlimited"
          - "Defined per contract"
          - "Defined per contract"
      - value: Unlimited storage
        included:
          - true
          - false
          - false
      - value: Default storage volume included
        included:
          - "100GB"
          - "Custom"
          - "Custom"
      - value: Metadata storage
        included:
          - "Shared PostgreSQL"
          - "Custom"
          - "Custom"

  - label: Security & Cryptography
    list:
      - value: End-to-end encryption
        included:
          - true
          - true
          - true
      - value: Zero-Knowledge architecture
        included:
          - true
          - true
          - true
      - value: Recovery file
        included:
          - true
          - true
          - true
      - value: Escrow Authority
        included:
          - false
          - true
          - true
      - value: Activity logs
        included:
          - true
          - true
          - true

  - label: Compliance
    list:
      - value: NIS2 / DORA / CRA directive alignment
        included:
          - true
          - _Additional quote required_
          - _Additional quote required_
      - value: CSPN Certification
        included:
          - true
          - true
          - true

  - label: Access and Identity
    list:
      - value: Secure device enrollment
        included:
          - true
          - true
          - true
      - value: Two-factor authentication (MFA)
        included:
          - true
          - true
          - true
      - value: OIDC identity provider (SSO)
        included:
          - false
          - true
          - true
      - value: Secrets management (OpenBao/Vault)
        included:
          - false
          - true
          - true
      - value: SmartCard support (PKI)
        included:
          - false
          - true
          - true

  - label: Automation & Support
    list:
      - value: Command-line interface (CLI)
        included:
          - true
          - true
          - true
      - value: Technical support
        included:
          - true
          - true
          - true
---
