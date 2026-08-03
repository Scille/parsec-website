---
enable: true
title: "Nos autres versions **disponibles**"
image: "/images/mockup-device.png"

versions:
  - os: "macos"
    icon: "/images/icons/macos.svg"
    list:
      - title: "macOS - Apple Silicon"
        button:
          label: "Télécharger"
          url: "https://bms.parsec.cloud/versions/latest/macos_arm"
          variant: "outline"
          color: "neutral"
      - title: "macOS - Intel processor"
        button:
          label: "Télécharger"
          url: "https://bms.parsec.cloud/versions/latest/macos"
          variant: "outline"
          color: "neutral"

  - os: "linux"
    icon: "/images/icons/linux.svg"
    list:
      - title: "Linux - AppImage"
        button:
          label: "Télécharger"
          url: "https://bms.parsec.cloud/versions/latest/linux"
          variant: "outline"
          color: "neutral"
      - title: "Linux - Snap"
        icon: "/images/icons/linux.svg"
        code: "snap install parsec --channel=v3 --classic"

  - os: "windows"
    icon: "/images/icons/windows.svg"
    list:
      - title: "Windows"
        button:
          label: "Télécharger"
          url: "https://bms.parsec.cloud/versions/latest/windows"
          variant: "outline"
          color: "neutral"
---
