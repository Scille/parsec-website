---
enable: true
title: "Our other **available versions**"
image: "/images/mockup-device.png"

versions:
  - os: "macos"
    icon: "/images/icons/svg/macos.svg"
    list:
      - title: "macOS - Apple Silicon"
        button:
          label: "Download"
          url: "https://bms.parsec.cloud/versions/latest/macos_arm"
          variant: "link"
          color: "primary"
      - title: "macOS - Intel processor"
        button:
          label: "Download"
          url: "https://bms.parsec.cloud/versions/latest/macos"
          variant: "link"
          color: "primary"

  - os: "linux"
    icon: "/images/icons/svg/linux.svg"
    list:
      - title: "Linux - AppImage"
        button:
          label: "Download"
          url: "https://github.com/Scille/parsec-cloud/releases/latest"
          variant: "link"
          color: "primary"
      - title: "Linux - Snap"
        code: "snap install parsec --channel=v3 --classic"

  - os: "windows"
    icon: "/images/icons/svg/windows.svg"
    list:
      - title: "Windows"
        button:
          label: "Download"
          url: "https://bms.parsec.cloud/versions/latest/windows"
          variant: "link"
          color: "primary"
---
