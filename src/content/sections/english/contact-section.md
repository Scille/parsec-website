---
enable: true # Control the visibility of this section across all pages where it is used
title: "**Have questions?** Send us a message"
description: |
  If you have any questions, please feel free to send us a message; we’ll do our best to reply within two working days.

  If the request is <u>urgent</u>, you can reach us via the communication channels below.

contactInfo:
  enable: true
  title: Our contact information
  list:
    - icon: "EnvelopeIcon"
    - icon: "PhoneIcon"
    - icon: "MapPinIcon"

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
  emailSubject: "New inquiry - Parsec Cloud"
  autoResponse: "Thanks for reaching out! We've received your message and will get back to you within two working days."
  submitButton:
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
      name: "Company name" # This is crucial. Its indicate under which name you want to receive this field data
      id: "company"
      required: false
      halfWidth: true
      defaultValue: ""
    - label: "Number of employees"
      placeholder: "Number of employees"
      name: "Number of employees" # This is crucial. Its indicate under which name you want to receive this field data
      id: "employee"
      required: false
      halfWidth: true
      dropdown:
        type: "select"
        items:
          - label: "1 - 10"
            value: "1 - 10"
            selected: false
          - label: "11 - 50"
            value: "11 - 50"
            selected: false
          - label: "51 - 200"
            value: "51 - 200"
            selected: false
          - label: "more than 200"
            value: "more than 200"
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
      name: "Subject" # This is crucial. Its indicate under which name you want to receive this field data
      id: "subject"
      required: false
      halfWidth: false
      dropdown:
        type: "select"
        items:
          - label: "Pricing information"
            value: "Pricing"
            selected: false
          - label: "I'd like a demo"
            value: "Demo"
            selected: false
          - label: "More information on Parsec Cloud"
            value: "Information"
            selected: false
          - label: "Other inquiry"
            value: "Other"
            selected: false
    - label: "Tell us more about your request!"
      tag: "textarea"
      defaultValue: ""
      rows: "8"
      placeholder: "How can we help you"
      name: "Message" # This is crucial. Its indicate under which name you want to receive this field data
      required: true
      halfWidth: false
    - label: "I agree to the [terms & conditions](/terms-and-conditions/) and [privacy policy](/privacy-policy/)." # only valid for type="checkbox" & type === "radio"
      id: "privacy-policy"
      name: "Privacy consent" # This is crucial. Its indicate under which name you want to receive this field data
      value: "Consent" # Value that will be submit (applicable for type="checkbox" & type === "radio")
      checked: false # only valid for type="checkbox" & type === "radio"
      required: true
      type: "checkbox"
      halfWidth: false
      defaultValue: ""
    - note: success # info | warning | success | deprecated | hint
      parentClass: "hidden" # kept hidden: only used as the content source for the post-submit thank-you panel
      content: "We have received your message! We'll get back to you as soon as possible."
---
