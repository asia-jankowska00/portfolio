import React from "react"
import Layout from "../components/Layout"
import ScrollAnimation from "react-animate-on-scroll"

import "../styles/main.scss"

const NotFoundPage = () => {
  return (
    <Layout textToType="< Story />">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-small flex flex-column show-on-scroll">
          <h1 className="text-center">Oops, there is nothing here...</h1>
          <h2 className="text-center  text-huge subtitle"> 404 </h2>
        </section>
      </ScrollAnimation>
    </Layout>
  )
}

export default NotFoundPage
