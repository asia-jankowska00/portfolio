import React from "react"
import Layout from "../components/Layout"
import ScrollAnimation from "react-animate-on-scroll"

import "../styles/main.scss"

const Story = () => {
  return (
    <Layout title="Story" textToType="< Story />">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-large story flex show-on-scroll">
          <div className="story-image"></div>
          <div className="story-text">
            <p>
              My name is Joanna. I’m a front end developer. I come from Poland
              and I'm currently residing in <strong>Aalborg, DK.</strong>
            </p>
            <p>
              I’m studying <strong>Multimedia Design</strong> at UCN, with the
              goal to finish with a Bachelor’s degree in{" "}
              <strong>Web Development</strong>.
            </p>
            <p>
              Since starting my adventure with coding I have been pursuing it
              relentlessly. I am always tracking the news, taking up courses on
              various emerging technologies, and keeping my skills sharp and
              up-to-date.
            </p>
            <p>
              On the side I take up <strong>drawing and painting</strong>, which
              I’ve been doing since I could hold a pencil. Both of those hobbies
              have equipped me with an incredibly sharp aesthetic sense and a
              healthy level of perfectionism.
            </p>
            <p>
              I have assembled an additional portfolio, showing my digital art
              skills:
            </p>

            <h5 className="padding-y-extra-small gradient-underline-hover portfolio-link mb-4">
              <a href="https://noxaunu.artstation.com/">
                Digital art portfolio{" "}
                <i className="fas fa-external-link-alt"></i>
              </a>
            </h5>

            <h4>Completed courses</h4>

            <h6 className="padding-y-extra-small">
              <a
                href="https://www.udemy.com/certificate/UC-ea3477eb-c732-47f0-bf4f-9472737a1c6c/"
                target="_blank"
                rel="noreferrer"
                className=" gradient-underline-hover "
              >
                The Web Developer Bootcamp{" "}
                <i className="fas fa-external-link-alt"></i>
              </a>
            </h6>
            <h6>
              <a
                href="https://www.udemy.com/certificate/UC-3b9932ac-61b7-420a-a287-2dd79e75c421/"
                target="_blank"
                rel="noreferrer"
                className=" gradient-underline-hover "
              >
                JavaScript: Understanding the Weird Parts{" "}
                <i className="fas fa-external-link-alt"></i>
              </a>
            </h6>
          </div>
        </section>
      </ScrollAnimation>
    </Layout>
  )
}

export default Story
