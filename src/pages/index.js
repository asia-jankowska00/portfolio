import React, { useContext } from "react"
import { ProjectsContext } from "../ProjectsContext"

import { Link } from "gatsby"

import ProjectThumbnail from "../components/ProjectThumbnail"
import Layout from "../components/Layout"

import ScrollAnimation from "react-animate-on-scroll"

import "../styles/main.scss"

const Homepage = () => {
  const data = useContext(ProjectsContext)
  let projects
  if (data) {
    projects = data.projects
  }

  return (
    <React.Fragment>
      <Layout isHomepage={true} title="Home">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <section className="padding-x-medium mt-25 padding-y-large blurb show-on-scroll">
            <h1 className="text-center">&lt;The developer you need /&gt;</h1>
            <h4 className="text-center subtitle ">
              "Always leave a place better than you found it."
            </h4>
            <div className="flex">
              <img
                className="blurb-image hide-small hide-medium"
                src="../images/svg/icon-webdev.svg"
                alt=""
              />
              <div className="flex blurb-content">
                <p className="padding-y-extra-small">
                  Technology is making the world a better place. I strive to
                  make my contribution to these improvements by{" "}
                  <strong>creating digital solutions</strong> that will help
                  people on a daily basis.
                </p>
                <p className="mb-4">
                  As a developer, I’m <strong>curiously inventive</strong>,{" "}
                  <strong>relentlessly devoted</strong>, and most importantly,{" "}
                  <strong>addicted to learning</strong>. Every day, I try to
                  become a little better at what I do than I was the day before.
                </p>
                <h4 className="subtitle">
                  So, what can I do, you ask? Here are some examples:
                </h4>
                <ul className="font-secondary">
                  <li>
                    <p>
                      Overhaul your <strong>landing page</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      Develop a <strong>static website</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      Create a <strong>React</strong> component library
                    </p>
                  </li>
                  <li>
                    <p>
                      Translate design into <strong>code</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      Set up a <strong>full-stack</strong> platform or
                      application
                    </p>
                  </li>
                  <li>
                    <p>
                      Integrate a <strong>database</strong> or an{" "}
                      <strong>API</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      Come up with <strong>design</strong> solutions
                    </p>
                  </li>
                  <li>
                    <p>…and more</p>
                  </li>
                </ul>
                <div className="flex blurb-links">
                  <Link to="/skills">
                    <h4 className="gradient-underline-hover padding-y-extra-small">
                      my skills <i className="fas fa-long-arrow-alt-right"></i>
                    </h4>
                  </Link>
                  <Link to="/values">
                    <h4 className="gradient-underline-hover padding-y-extra-small">
                      my values <i className="fas fa-long-arrow-alt-right"></i>
                    </h4>
                  </Link>
                  <Link to="/story">
                    <h4 className="gradient-underline-hover padding-y-extra-small">
                      my story <i className="fas fa-long-arrow-alt-right"></i>
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <section className="padding-x-small padding-y-medium mb-25 flex homepage-cases show-on-scroll">
            <h1 className="text-center">&lt;Projects /&gt;</h1>
            <h4 className="subtitle text-center">things I've worked on</h4>
            <Link className="gradient-button" to="/projects">
              <h4>
                see all projects <i className="fas fa-long-arrow-alt-right"></i>
              </h4>
            </Link>
            <div className="flex cases-showcase">
              {projects
                ? projects.map(project => {
                    if (project.homepageDisplay === true) {
                      return (
                        <ProjectThumbnail
                          projectPath={project.projectPath}
                          project={project}
                        ></ProjectThumbnail>
                      )
                    }
                  })
                : null}
            </div>
          </section>
        </ScrollAnimation>
      </Layout>
    </React.Fragment>
  )
}

export default Homepage
