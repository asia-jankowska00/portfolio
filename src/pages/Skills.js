import React from "react"
import Layout from "../components/Layout"
import ScrollAnimation from "react-animate-on-scroll"

import "../styles/main.scss"

const Skills = () => {
  return (
    <Layout textToType="< Skills />">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-small flex skills show-on-scroll">
          <div className="skills-icons">
            <h1>HTML, CSS, JavaScript</h1>
          </div>
          <div className="skills-text">
            <p>
              I speak fluent <strong>HTML</strong> and <strong>CSS</strong>,
              after having written thousands of lines of both. This allows me to
              create solutions that are responsive, cross-browser and meet
              accessibility standards.
            </p>
            <p>
              I know the ins and outs of <strong>JavaScript</strong>, including
              its most modern syntax. It is the programming language I
              specialize in, being able to write both functional and
              object-oriented code. I understand the language on a deep level,
              which allows me to adapt quickly to existing codebases.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-small flex skills show-on-scroll">
          <div className="skills-icons">
            <h1>React, jQuery, Bootstrap, Tailwind</h1>
          </div>
          <div className="skills-text">
            <p>
              I have worked with <strong>front end frameworks</strong>, most
              notably
              <strong>React</strong>, allowing me to easily and quickly create
              complex, robust and scalable interfaces.
            </p>
            <p>
              I can use UI frameworks such as <strong>Bootstrap</strong> and
              <strong>Tailwind</strong> to complete projects faster, and use
              design systems that would ensure a consistent look of the
              interface, while keeping everything responsive.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-small flex skills show-on-scroll">
          <div className="skills-icons">
            <h1>Git, Scrum, Agile</h1>
          </div>
          <div className="skills-text">
            <p>
              I have experience using <strong>Git</strong> and
              <strong>GitHub</strong> for version control and collaboration,
              which allows me to fit right into a developer team and start
              collaborating.
            </p>
            <p>
              I know how to work in <strong>agile</strong> methodologies, such
              as
              <strong>Scrum</strong>. I know how to utilize digital tools like
              Kanban boards and communicators such as Microsoft Teams to aid me
              in teamwork.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-small flex skills show-on-scroll">
          <div className="skills-icons">
            <h1>
              Design,
              <br />
              UI, UX
            </h1>
          </div>
          <div className="skills-text">
            <p>
              I know the principles of <strong>visual design</strong>, and their
              application in interfaces.
            </p>
            <p>
              I’m no stranger to <strong>user experience design</strong> methods
              and I can assure that my solutions are first of all user-friendly.
            </p>
            <p>
              I know how to quickly evaluate, approve or improve a design with
              <strong>usability</strong> heuristics.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-small flex skills show-on-scroll">
          <div className="skills-icons">
            <h1>Photoshop, Illustrator, Adobe Xd</h1>
          </div>
          <div className="skills-text">
            <p>
              Extensive hobby use of
              <strong>Photoshop, Illustrator, XD</strong> and other software
              from the Adobe suite have given me unrivaled skills in each.
            </p>
            <p>
              I can utilize them to create stunning <strong>visuals</strong>,
              edit photos to best fit their purpose and design small interface
              elements like icons or logos.
            </p>
          </div>
        </section>
      </ScrollAnimation>
    </Layout>
  )
}

export default Skills
