---
enable: true # Control the visibility of this section across all pages where it is used
title: "**Have questions?** <br /> Send us a message"
description: |
  If you have any questions, please feel free to send us a message; we’ll do our best to reply within two working days.

  If the request is <u>urgent</u>, you can reach us via the communication channels below.

contactInfo:
  enable: true
  title: Our contact information
  list:
    - icon: "EnvelopeIcon"
      label: contact@parsec.cloud
      link: mailto:contact@parsec.cloud
    - icon: "PhoneIcon"
      label: +33 7 82 07 85 07
      link: tel:+33782078507
    - icon: "MapPinIcon"
      label: 1 Rue de la Paix, <br /> 75002 Paris, France

needs:
  enable: true
  title: "Got a **specific** request?"
  list:
    - icon: "HandRaisedIcon"
      title: "Build a partnership"
      description: "We're committed to working with trusted partners."
      color: "brand"
      button:
        tag: "a"
        variant: "link"
        label: "partenariats@parsec.cloud"
        url: "mailto:partenariats@parsec.cloud"
    - icon: "CalendarIcon"
      title: "Request a demo"
      description: "Our CEO, Thierry Leblond, would be happy to walk you through the product with a demo."
      color: "extra-purple"
      button:
        tag: "a"
        variant: "fill"
        color: "white"
        label: "Book an appointment"
        url: "https://calendly.com/thierry-leblond-parsec/30min"
        target: "_blank"
        hoverEffect: "text-flip"
    - icon: "ExclamationTriangleIcon"
      title: "Report an issue"
      description: "Ran into a problem with the app or the website?"
      color: "extra-orange"
      button:
        tag: "a"
        variant: "link"
        label: "support@parsec.cloud"
        url: "mailto:support@parsec.cloud"

# Check config.toml file for form action related settings
form:
  emailSubject: "New Inquiry - Parsec Cloud"
  submitButton:
    # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
    enable: true
    label: "Send message"
    hoverEffect: "text-flip"
    variant: "fill"

  # This note will show at the end of form
  # note: |
  #   Your data is safe with us. We respect your privacy and never share your information. <br /> Read our [Privacy Policy](/privacy-policy/).
  inputs:
    - label: "Company name"
      placeholder: "Company name"
      name: "company" # This is crucial. Its indicate under which name you want to receive this field data
      required: false
      halfWidth: true
      defaultValue: ""
    - label: "Number of employees"
      placeholder: "Number of employees"
      name: "employee" # This is crucial. Its indicate under which name you want to receive this field data
      id: "employee"
      required: false
      halfWidth: true
      dropdown:
        type: "select"
        items:
          - label: "1 - 25"
            value: "small team"
            selected: false
          - label: "26 - 100"
            value: "medium team"
            selected: false
          - label: "101 - 200"
            value: "large team"
            selected: false
          - label: "more than 200"
            value: "large team"
            selected: false
    - label: "Full Name"
      placeholder: "John Doe"
      name: "Full Name" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      type: "text"
      halfWidth: true
      defaultValue: ""
    - label: "Email Address"
      placeholder: "john@email.com"
      name: "Email Address" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      type: "email"
      halfWidth: true
      defaultValue: ""
    - label: "What is this about?"
      placeholder: "Choose a subject"
      name: "subject" # This is crucial. Its indicate under which name you want to receive this field data
      id: "subject"
      required: false
      halfWidth: false
      dropdown:
        type: "select"
        items:
          - label: "Pricing Information"
            value: "Pricing Information"
            selected: false
          - label: "I'd Like a Demo"
            value: "Demo"
            selected: false
          - label: "More Information on Parsec Cloud"
            value: "More Information"
            selected: false
          - label: "Other Inquiry"
            value: "Other Inquiry"
            selected: false
    - label: "Tell us more about your request!"
      tag: "textarea"
      defaultValue: ""
      rows: "8"
      placeholder: "How can we help you"
      name: "Message" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      halfWidth: false
    - label: "I agree to the terms and conditions and [privacy policy](/contact/)." # only valid for type="checkbox" & type === "radio"
      id: "privacy-policy"
      name: "Privacy Consent" # This is crucial. Its indicate under which name you want to receive this field data
      value: "Consent" # Value that will be submit (applicable for type="checkbox" & type === "radio")
      checked: false # only valid for type="checkbox" & type === "radio"
      required: true
      type: "checkbox"
      halfWidth: false
      defaultValue: ""
    - note: success # info | warning | success | deprecated | hint
      parentClass: "hidden text-sm message success"
      content: "We have received your message! We'll get back to you as soon as possible."
    - note: deprecated # info | warning | success | deprecated | hint
      parentClass: "hidden text-sm message error"
      content: "Something went wrong! Please use this email - [contact@parsec.cloud](mailto:contact@parsec.cloud) to submit a request!"
---
