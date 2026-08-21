---
title: "Essayer **une expérience sécurisée** sur desktop et le web"
description: "Stockez et gérez vos données en toute sécurité, avec un accès rapide et une protection renforcée sur votre système."
image: "/images/product-for-hero-logged-en.svg"

downloadClient:
  enable: true
  title: "Desktop"
  dropdown:
    label: ""
    placeholder: ""
    name: ""
    id: "os-parsec-client"
    type: "select"
    items:
      - label: "Windows"
        icon: "/images/icons/windows.svg"
        value: "windows"
        selected: true
        url: "https://bms.parsec.cloud/versions/latest/windows"
      - label: "macOS (Apple Silicon)"
        icon: "/images/icons/macos.svg"
        value: "macosSilicon"
        selected: false
        url: "https://bms.parsec.cloud/versions/latest/macos_arm"
      - label: "macOS (processeur Intel)"
        icon: "/images/icons/macos.svg"
        value: "macosIntel"
        selected: false
        url: "https://bms.parsec.cloud/versions/latest/macos"
      - label: "Linux (Snap)"
        icon: "/images/icons/linux.svg"
        value: "linux"
        selected: false
        source: "linux-snap"
  button:
    label: "Télécharger"
    variant: "fill"
    color: "primary"
    hoverEffect: "text-flip"
    data-umami-event: "download-button"
    data-umami-event-location: "download-hero"

goOnWeb:
  enable: true
  title: "Web"
  button:
    tag: "a"
    label: "Continuer sur le web"
    url: "https://app.parsec.cloud/"
    variant: "outline"
    color: "primary"
    iconRight: "ArrowRightIcon"
    hoverEffect: "text-flip"
    data-umami-event: "web-app-button"
    data-umami-event-location: "download-hero"

moreButton:
  enable: true
  label: "Voir les autres versions"
  url: "/download#versions"
  variant: "link"
  color: "neutral"
  hoverEffect: "text-flip"
  iconRight: "ArrowDownIcon"
---
