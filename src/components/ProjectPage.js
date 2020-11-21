import React, { useContext } from "react"
import { Link } from "gatsby"

import { ProjectsContext } from "../ProjectsContext"
import Layout from "./Layout"

import ScrollAnimation from "react-animate-on-scroll"

import "../styles/main.scss"

const ProjectPage = props => {
  const data = useContext(ProjectsContext)
  let projects
  console.log(process.env.GATSBY_URL)

  const projectPath = props.projectPath
  const projectImagesPath = `${process.env.GATSBY_URL}/images/projects/`

  let currentProject

  if (data) {
    projects = data.projects
    currentProject = projects.filter(project => {
      return project.projectPath === projectPath
    })[0]
  }

  return (
    <Layout title="Projects" textToType="< Projects />">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-extra-small cases show-on-scroll">
          <Link to="/projects">
            <h4 className="subtitle">
              <i className="fas fa-long-arrow-alt-left"></i> Back to projects
            </h4>
          </Link>
          <h1 className="text-center">
            {currentProject ? currentProject.name : null}
          </h1>
        </section>
      </ScrollAnimation>
      {console.log(currentProject)}

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-medium flex cases show-on-scroll">
          <div className="cases-info">
            <h1>Description</h1>

            <p className="text-dark">
              {currentProject ? currentProject.longDescriptionFP : null}
            </p>
            <p className="text-dark">
              {currentProject ? currentProject.longDescriptionSP : null}
            </p>

            <p>
              {currentProject
                ? currentProject.technologies.map((tech, index) => {
                    return (
                      <React.Fragment key={index}>
                        {"#"}
                        <strong>{`${tech}, `}</strong>
                      </React.Fragment>
                    )
                  })
                : null}
            </p>

            <h6 className="text-dark">My roles:</h6>
            <ul className="text-dark">
              {currentProject
                ? currentProject.roles.map((role, index) => {
                    return (
                      <li key={index}>
                        <p>{role}</p>
                      </li>
                    )
                  })
                : null}
            </ul>
          </div>
          <div className="cases-image">
            <img
              src={`${projectImagesPath}${
                currentProject ? currentProject.displayImage : null
              }`}
              alt=""
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="case-view-buttons padding-x-large padding-y-small flex text-dark show-on-scroll">
          <a
            href={currentProject ? currentProject.linkGithub : null}
            className="gradient-button mb-4"
          >
            <h4>
              View on GitHub <i className="fa fa-github" aria-hidden="true"></i>
            </h4>
          </a>
          <a
            href={currentProject ? currentProject.linkLive : null}
            className="gradient-button  mb-4"
          >
            <h4>
              View live <i className="fas fa-long-arrow-alt-right"></i>
            </h4>
          </a>
        </div>
      </ScrollAnimation>

      <div className="divider hide-large hide-extra-large"></div>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-medium flex cases show-on-scroll">
          <div className="cases-image">
            <img
              src={`${projectImagesPath}${
                currentProject ? currentProject.sectionOneImage : null
              }`}
              alt=""
            />
          </div>
          <div className="cases-info">
            <h1>{currentProject ? currentProject.sectionOneTitle : null}</h1>
            <p className="text-dark">
              {currentProject ? currentProject.sectionOneBodyFP : null}
            </p>
            <p className="text-dark">
              {currentProject ? currentProject.sectionOneBodySP : null}
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <div className="divider hide-large hide-extra-large"></div>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-medium flex cases show-on-scroll">
          <div className="cases-info">
            <h1>{currentProject ? currentProject.sectionTwoTitle : null}</h1>
            <p className="text-dark">
              {currentProject ? currentProject.sectionTwoBodyFP : null}
            </p>
            <p className="text-dark">
              {currentProject ? currentProject.sectionTwoBodySP : null}
            </p>
          </div>
          <div className="cases-image">
            <img
              src={`${projectImagesPath}${
                currentProject ? currentProject.sectionTwoImage : null
              }`}
              alt=""
            />
          </div>
        </section>
      </ScrollAnimation>

      <div className="divider hide-large hide-extra-large"></div>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-medium flex cases show-on-scroll">
          <div className="cases-image">
            <img
              src={`${projectImagesPath}${
                currentProject ? currentProject.sectionThreeImage : null
              }`}
              alt=""
            />
          </div>
          <div className="cases-info">
            <h1>{currentProject ? currentProject.sectionThreeTitle : null}</h1>
            <p className="text-dark">
              {currentProject ? currentProject.sectionThreeBodyFP : null}
            </p>
            <p className="text-dark">
              {currentProject ? currentProject.sectionThreeBodySP : null}
            </p>
          </div>
        </section>
      </ScrollAnimation>
    </Layout>
  )
}

export default ProjectPage
