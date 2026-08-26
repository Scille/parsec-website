---
title: "Try **a secure experience** on desktop and web"
description: "Store and manage your data securely, with fast access and enhanced protection on your system."
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
      - label: "macOS (Intel processor)"
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
    label: "Download"
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
    label: "Continue on this browser"
    url: "https://app.parsec.cloud/"
    variant: "outline"
    color: "primary"
    iconRight: "ArrowRightIcon"
    hoverEffect: "text-flip"
    data-umami-event: "web-app-button"
    data-umami-event-location: "download-hero"
  info: "Not available on Safari."

moreButton:
  enable: true
  label: "See other versions"
  url: "/download#versions"
  variant: "link"
  color: "neutral"
  hoverEffect: "text-flip"
  iconRight: "ArrowDownIcon"
---
