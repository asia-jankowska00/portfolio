import React from "react"
import { Helmet } from "react-helmet"

const MyHelmet = props => {
  const title = props.title
  const metaDescription =
    "Hi! I'm Joanna and this is my front-end development portfolio. I specialize in web development and UI / UX design, developing mostly in React."
  const author = "Joanna Jankowska"

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
        dir: "ltr",
      }}
      title={title}
      titleTemplate={`%s | Front End Developer Portfolio - Joanna Jankowska`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          name: `og:url`,
          content: "https://asia-jankowska00.github.io/",
        },
        {
          name: `og:image`,
          content: "https://asia-jankowska00.github.io/images/banner_ad.jpg",
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    >
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicons/favicon-16x16.png"
      />

      <script
        src="https://kit.fontawesome.com/24893e2831.js"
        crossorigin="anonymous"
      ></script>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
    </Helmet>
  )
}

export default MyHelmet
