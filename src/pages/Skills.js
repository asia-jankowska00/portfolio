import React from "react"
import Layout from "../components/Layout"
import ScrollAnimation from "react-animate-on-scroll"

import "../styles/main.scss"

const Skills = () => {
  return (
    <Layout title="Skills" textToType="< Skills />">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-small flex skills show-on-scroll">
          <div className="skills-icons">
            <h1>Front end</h1>
            <h4 className="subtitle">HTML, CSS, JavaScript, Typescript</h4>
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
              its most modern syntax. I understand the language on a deep level,
              which allows me to adapt quickly to existing codebases.
            </p>
            <p>
              I am also familiar with the JS superset{" "}
              <strong>TypeScript</strong>.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-small flex skills show-on-scroll">
          <div className="skills-icons">
            <h1>React</h1>
            <h4 className="subtitle">
              React, Redux, Context API, Hooks, styled-components, Material UI
            </h4>
          </div>
          <div className="skills-text">
            <p>
              <strong>React</strong> is currently my preferred front- end
              framework, and the one I specialize in.
            </p>
            <p>
              I like its component-based design which allows me to write
              reusable code for complex yet scalable interfaces. I have used
              most of it’s modern features like <strong>hooks</strong> or{" "}
              <strong>ContextAPI</strong>, and many different libraries built
              for React, such as <strong>Redux</strong>,
              <strong>styled-components</strong> and{" "}
              <strong>Material UI</strong>.
            </p>
            <p>
              I also have experience building static React websites using
              <strong>GatsbyJS</strong>.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-small flex skills show-on-scroll">
          <div className="skills-icons">
            <h1>Vue</h1>
            <h4 className="subtitle">Vue, Vuex, Vuetify</h4>
          </div>
          <div className="skills-text">
            <p>
              Recently I have also started experimenting and diving deeper into
              <strong>Vue</strong>.
            </p>
            <p>
              I find it’s syntax and development environment simple and easy to
              use, making it possible to bootstrap simple applications in a
              matter of minutes.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-small flex skills show-on-scroll">
          <div className="skills-icons">
            <h1>CSS frameworks</h1>
            <h4 className="subtitle">
              SCSS , Bootstrap, Tailwind, Materialize
            </h4>
          </div>
          <div className="skills-text">
            <p>
              I can use UI frameworks such as <strong>Bootstrap</strong> and{" "}
              <strong>Tailwind</strong> to complete projects faster, and use
              design systems that would ensure a consistent look of the
              interface, while keeping everything responsive.
            </p>
            <p>
              I often use <strong>SCSS</strong> in my projects to make custom
              styles more scalable and maintainable.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-small flex skills show-on-scroll">
          <div className="skills-icons">
            <h1>Back end</h1>
            <h4 className="subtitle">
              Node.js, Express, REST, NPM, Yarn, WebPack, JWT, GraphQL
            </h4>
          </div>
          <div className="skills-text">
            <p>
              I can work with code on the server-side, utilizing{" "}
              <strong>Node.js</strong>,<strong>Express</strong> in my
              development stack. This allows me to write the functional back end
              for my front end, allowing me to build dynamic full-stack
              applications.
            </p>
            <p>
              I can create <strong>RESTful APIs</strong> using Node and Express,
              and then consume them on the front-end using asynchronous code. I
              also have experience with using <strong>GraphQL</strong> for
              pulling data into an application.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-small flex skills show-on-scroll">
          <div className="skills-icons">
            <h1>Databases</h1>
            <h4 className="subtitle">SQL, NoSQL, MongoDB, MySQL, Firebase</h4>
          </div>
          <div className="skills-text">
            <p>
              I have worked with both SQL, and NoSQL databases, namely{" "}
              <strong>MSSQL</strong>,<strong>MongoDB</strong> and{" "}
              <strong>Firebase</strong>.
            </p>
            <p>
              I can work with complex data structures and query the database to
              retrieve and process data.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-small flex skills show-on-scroll">
          <div className="skills-icons">
            <h1>DevOps</h1>
            <h4 className="subtitle">Git & GitHub, Agile, Scrum, Kanban</h4>
          </div>
          <div className="skills-text">
            <p>
              I have experience using <strong>Git</strong> and{" "}
              <strong>GitHub</strong> for version control and collaboration,
              which allows me to fit right into a developer team and start
              collaborating.
            </p>
            <p>
              I know how to work in <strong>agile</strong> methodologies, such
              as <strong>Scrum</strong>. I know how to utilize digital tools
              like Kanban boards and communicators such as Microsoft Teams. I
              can work efficiently no matter where I am.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-small flex skills show-on-scroll">
          <div className="skills-icons">
            <h1>Design, UI & UX</h1>
            <h4 className="subtitle">
              Photoshop, Adobe Illustrator, Adobe Xd, Figma
            </h4>
          </div>
          <div className="skills-text">
            <p>
              I know the principles of <strong>visual design</strong>, and their
              application in interfaces. Due to my experience and knowledge, I
              can be completely independent in the design process.
            </p>
            <p>
              I’m no stranger to <strong>user experience</strong> design methods
              and I can assure that my solutions are user-centered. I know how
              to quickly evaluate and improve a design with usability
              heuristics.
            </p>
            <p>
              Extensive hobby use of <strong>Photoshop, Illustrator, XD</strong>{" "}
              and other software from the Adobe suite have given me unrivaled
              skills in each. I can utilize them to create stunning visuals,
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
