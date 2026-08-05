---
enable: true
title: "**Une question ?** <br /> Envoyez-nous un message"
description: |
  Pour toute question, n’hésitez pas à nous envoyer un message, nous nous engageons à répondre dans un délai de 2 jours ouvrés.

  Si la demande est <u>urgente</u>, vous pouvez nous contacter via les canaux de communication ci-dessous.

contactInfo:
  enable: true
  title: "Nos coordonnées"
  list:
    - icon: "EnvelopeIcon"
    - icon: "PhoneIcon"
    - icon: "MapPinIcon"

needs:
  enable: true
  title: "Une demande **particulière** ?"
  list:
    - icon: "HandRaisedIcon"
      title: "Créer un partenariat"
      description: "Nous avons à coeur de travailler avec des partenaires de confiance."
      color: "brand"
      button:
        tag: "a"
        variant: "link"
        label: "partenariats@parsec.cloud"
        url: "mailto:partenariats@parsec.cloud"
    - icon: "CalendarIcon"
      title: "Demander une démo"
      description: "Notre CEO, Thierry Leblond, se fera un plaisir de vous expliquer le produit avec une démo."
      color: "extra-purple"
      button:
        tag: "a"
        variant: "fill"
        color: "white"
        label: "Réserver un créneau"
        url: "https://calendly.com/thierry-leblond-parsec/30min"
        target: "_blank"
    - icon: "ExclamationTriangleIcon"
      title: "Reporter un problème"
      description: "Vous avez rencontré un problème sur l'application ou simplement le site internet ?"
      color: "extra-orange"
      button:
        tag: "a"
        variant: "link"
        label: "support@parsec.cloud"
        url: "mailto:support@parsec.cloud"

form:
  emailSubject: "Nouvelle demande de renseignements - Parsec Cloud"
  submitButton:
    enable: true
    label: "Envoyer le message"
    hoverEffect: "text-flip"
    variant: "fill"

  inputs:
    - label: "Nom de l'entreprise"
      placeholder: "Nom de l'entreprise"
      name: "Nom complet"
      required: false
      halfWidth: true
      defaultValue: ""
    - label: "Nombre de collaborateurs"
      placeholder: "Nombre de collaborateurs"
      name: "employee"
      id: "employee"
      required: false
      halfWidth: true
      dropdown:
        type: "select"
        items:
          - label: "1 - 10"
            value: "small team"
            selected: false
          - label: "11 - 50"
            value: "medium team"
            selected: false
          - label: "51 - 200"
            value: "large team"
            selected: false
          - label: "plus de 200"
            value: "large team"
            selected: false
    - label: "Nom complet"
      placeholder: "John Doe"
      name: "Nom complet"
      required: true
      type: "text"
      halfWidth: true
      defaultValue: ""
    - label: "Adresse email"
      placeholder: "john@email.com"
      name: "Adresse email"
      required: true
      type: "email"
      halfWidth: true
      defaultValue: ""
    - label: "À quel sujet ?"
      placeholder: "Choix du sujet"
      name: "subject"
      id: "subject"
      required: false
      halfWidth: false
      dropdown:
        type: "select"
        items:
          - label: "Informations sur les tarifs"
            value: "Information"
            selected: false
          - label: "Je souhaite une démonstration"
            value: "Demonstration"
            selected: false
          - label: "En savoir plus sur Parsec Cloud"
            value: "En-savoir-plus"
            selected: false
          - label: "Autre demande"
            value: "Autre"
            selected: false
    - label: "Dîtes-nous en plus sur votre demande !"
      tag: "textarea"
      defaultValue: ""
      rows: "8"
      placeholder: "Comment pouvons-nous vous aider"
      name: "Message"
      required: true
      halfWidth: false
    - label: "J'accepte les [termes & conditions](/terms-and-conditions/) et la [politique de confidentialité](/privacy-policy/)."
      id: "privacy-policy"
      name: "Consentement vie privée"
      value: "Consentement"
      checked: false
      required: true
      type: "checkbox"
      halfWidth: false
      defaultValue: ""
    - note: success
      parentClass: "hidden text-sm message success"
      content: "Nous avons reçu votre message ! Nous vous répondrons aussi rapidement que possible."
    - note: deprecated
      parentClass: "hidden text-sm message error"
      content: "Une erreur est survenue ! veuillez utiliser ce mail - [contact@parsec.cloud](mailto:contact@parsec.cloud) pour soumettre une demande !"
---
