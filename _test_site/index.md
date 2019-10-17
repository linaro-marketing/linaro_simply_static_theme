---
permalink: /
layout: page
title: The Linaro Simply Static Theme
description: >
    A lightweight foundation css framework Jekyll theme.
# header:
#     image: /assets/images/content/background-image1.jpg
#     class: darken test_background_class
#     title: The Linaro Simply Static Theme
#     inner_image: https://github.com/Linaro/website/raw/master/assets/images/content/linaro-logo.png
#     text: >
#         A lightweight foundation css framework Jekyll theme.
#     buttons:
#         - title: Learn More
#           url: /flow/
#           class: large
#         - title: View on Github
#           url: /learn/
#           class: large hollow
#           icon: icon-github-circled
header:
    slides:
        - title: Test
          text: >
            This page showcases the power of the flow.html Jekyll include provided in this theme.
          buttons:
            - title: Learn More
              url: /learn/
              class: button
          image: /assets/images/content/background-image1.jpg
        - title: Test
          text: >
            This page showcases the power of the flow.html Jekyll include provided in this theme.
          buttons:
            - title: Learn More
              url: /learn/
              class: button
          image: /assets/images/content/background-image2.png
        - title: Test
          text: >
            This page showcases the power of the flow.html Jekyll include provided in this theme.
          buttons:
            - title: Learn More
              url: /learn/
              class: button
          image: /assets/images/content/background-image3.jpg
schema:
  "@type": "Corporation"
  "name": "Linaro"
  "url": "https://www.linaro.org"
  "logo": "https://www.linaro.org/assets/images/content/linaro-logo.png"
  "contactPoint":
      "@type": "ContactPoint"
      "telephone": "01223 400060"
      "contactType": "customer service"
      "availableLanguage": "en"
  "sameAs":
      - "https://facebook.com/LinaroOrg"
      - "https://twitter.com/LinaroOrg"
      - "https://instagram.com/LinaroOrg"
      - "https://www.linkedin.com/company/1026961/"
      - "https://youtube.com/LinaroOrg"
      - "https://github.com/linaro"
      - "https://www.linaro.org"
flow:
    - row: container_row
      style: block_row
    #   background_image: /assets/images/content/background-image1.jpg
      sections:
        - format: "title"
          title_content:
            size: h2
            text: Block Row
        - format: block
          style: text-center text-white
          block_section_content:
            item_width: "3"
            blocks:
                - title:
                    size: "h3"
                    text: Block 1
                  url: /about/
                  inner_image:
                    icon: true
                    icon_name: fa fa-bullhorn
                  text_content:
                    text: See our photos from event.
                  buttons:
                    - title: More Details
                      url: /flow/
                      icon: fa fa-arrow-right
                      style: btn-primary
                - title:
                    size: "h3"
                    text: Block 2
                  url: /about/
                  inner_image:
                    path: /assets/images/content/js-logo.png
                    alt: JS logo
                  text_content:
                    text: See our photos from event.
                  buttons:
                    - title: More Details
                      url: /flow/
                      icon: fa fa-arrow-right
                      style: btn-primary
                - title:
                    size: "h3"
                    text: Block 3
                  url: /about/
                  text_content:
                    text: See our photos from event.
                  buttons:
                    - title: More Details
                      url: /flow/
                      icon: fa fa-arrow-right
                      style: btn-primary
                    - title: Read
                      url: /flow/
                      icon: fa fa-book
                      style: btn-primary
    - row: container_row
      style: block_row fixed boards_section
    #   background_image: /assets/images/content/background-image1.jpg
      background_svg: test_includes/boards_svg.html
      sections:
        - format: image
          class: "boards_image_section"
          image:
            path: /assets/images/content/js-logo.png
        - format: title
          class: "boards_title"
          title_content:
            size: h2
            text: Develop & Prototype on the Latest Arm Technology
        - format: block
          class: text-center text-white
          block_section_content:
            item_width: "4"
            blocks:
                -
                  url: /about/
                  background_image: /assets/images/content/background-image1.jpg
                  class: board_block
                  inner_image:
                    path: /assets/images/content/js-logo.png
                  text_content:
                    text: >
                        The 96boards Consumer Edition(CE) specification targets the mobile, embedded and digital home segments.
                  buttons:
                    - title: View Boards
                      url: /flow/
                      style: button
                      icon: fa fa-arrow-right
                -
                  url: /about/
                  background_image: /assets/images/content/background-image1.jpg
                  class: board_block
                  inner_image:
                    path: /assets/images/content/js-logo.png
                  text_content:
                    text: >
                        The 96boards Consumer Edition(CE) specification targets the mobile, embedded and digital home segments.
                  buttons:
                    - title: View Boards
                      url: /flow/
                      style: button
                      icon: fa fa-arrow-right
                -
                  url: /about/
                  background_image: /assets/images/content/background-image1.jpg
                  class: board_block
                  inner_image:
                    path: /assets/images/content/js-logo.png
                  text_content:
                    text: >
                        The 96boards Consumer Edition(CE) specification targets the mobile, embedded and digital home segments.
                  buttons:
                    - title: View Boards
                      url: /flow/
                      style: button
                      icon: fa fa-arrow-right
                -
                  url: /about/
                  background_image: /assets/images/content/background-image1.jpg
                  class: board_block
                  inner_image:
                    path: /assets/images/content/js-logo.png
                  text_content:
                    text: >
                        Explore a wide variety of mezzanines to expand on your development experience.
                  buttons:
                    - title: View Boards
                      url: /flow/
                      style: button
                      icon: fa fa-arrow-right
        - format: buttons
          class: text-center
          buttons_content:
            - title: Visit 96Boards.org
              url: /flow/
              style: button
---
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
