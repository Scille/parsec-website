---
enable: true
title: "Nos autres versions **disponibles**"
image: "/images/mockup-device.png"

versions:
  - os: "macos"
    label: "macOS"
    list:
      - title: "macOS - Apple Silicon"
        button:
          label: "Télécharger"
          url: "https://bms.parsec.cloud/versions/latest/macos_arm"
          data-umami-event: "download-button"
          data-umami-event-location: "download-versions-macos-arm"
      - title: "macOS - Intel processor"
        button:
          label: "Télécharger"
          url: "https://bms.parsec.cloud/versions/latest/macos"
          data-umami-event: "download-button"
          data-umami-event-location: "download-versions-macos-intel"

  - os: "linux"
    label: "Linux"
    list:
      - title: "Linux - Snap"
        codeFile: "linux-snap"

  - os: "windows"
    label: "Windows"
    list:
      - title: "Windows"
        button:
          label: "Télécharger"
          url: "https://bms.parsec.cloud/versions/latest/windows"
          data-umami-event: "download-button"
          data-umami-event-location: "download-versions-windows"
---
