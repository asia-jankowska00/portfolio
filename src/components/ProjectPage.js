import React, { useContext } from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

import { ProjectsContext } from "../ProjectsContext"
import Layout from "./Layout"

import ScrollAnimation from "react-animate-on-scroll"

import "../styles/main.scss"

const ProjectPage = props => {
  const data = useContext(ProjectsContext)
  let projects

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

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-medium flex cases show-on-scroll">
          <div className="cases-info">
            <h2>Description</h2>

            <p className="text-dark">
              {currentProject ? parse(currentProject.longDescriptionFP) : null}
            </p>
            <p className="text-dark">
              {currentProject ? parse(currentProject.longDescriptionSP) : null}
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
            {currentProject ? (
              <img
                src={`${projectImagesPath}${currentProject.displayImage}`}
                alt=""
              />
            ) : null}
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="case-view-buttons padding-x-large padding-y-small flex text-dark show-on-scroll">
          <a
            href={currentProject ? currentProject.linkGithub : null}
            target="_blank"
            className="gradient-button mb-4"
          >
            <h4>
              View code <i className="fa fa-github" aria-hidden="true"></i>
            </h4>
          </a>
          <a
            href={currentProject ? currentProject.linkLive : null}
            target="_blank"
            className="gradient-button  mb-4"
          >
            <h4>
              View online <i class="fas fa-external-link-alt"></i>
            </h4>
          </a>
          {currentProject && currentProject.linkDesign ? (
            <a
              href={currentProject ? currentProject.linkDesign : null}
              target="_blank"
              className="gradient-button mb-4"
            >
              <h4>
                View design <i class="fas fa-palette"></i>
              </h4>
            </a>
          ) : null}
        </div>
        <div className="case-view-buttons padding-x-large padding-y-extra-small flex text-dark show-on-scroll">
          {currentProject.name === "Budget Planner" ? (
            <a className="gradient-button disabled mb-4">
              <h4>
                Get on Play store <i class="fab fa-google-play"></i>
              </h4>
            </a>
          ) : null}
             {currentProject.name === "Budget Planner" ? (
            <a className="gradient-button disabled mb-4">
              <h4>
                Get on Apple store <i class="fab fa-apple"></i>
              </h4>
            </a>
          ) : null}
        </div>
      </ScrollAnimation>

      <div className="divider hide-large hide-extra-large"></div>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-medium flex cases show-on-scroll">
          <div className="cases-image">
            {currentProject ? (
              <img
                src={`${projectImagesPath}${currentProject.sectionOneImage}`}
                alt=""
              />
            ) : null}
          </div>
          <div className="cases-info">
            <h2>{currentProject ? currentProject.sectionOneTitle : null}</h2>
            <p className="text-dark">
              {currentProject ? parse(currentProject.sectionOneBodyFP) : null}
            </p>
            <p className="text-dark">
              {currentProject ? parse(currentProject.sectionOneBodySP) : null}
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <div className="divider hide-large hide-extra-large"></div>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-medium flex cases show-on-scroll">
          <div className="cases-info">
            <h2>{currentProject ? currentProject.sectionTwoTitle : null}</h2>
            <p className="text-dark">
              {currentProject ? parse(currentProject.sectionTwoBodyFP) : null}
            </p>
            <p className="text-dark">
              {currentProject ? parse(currentProject.sectionTwoBodySP) : null}
            </p>
          </div>
          <div className="cases-image">
            {currentProject ? (
              <img
                src={`${projectImagesPath}${currentProject.sectionTwoImage}`}
                alt=""
              />
            ) : null}
          </div>
        </section>
      </ScrollAnimation>

      <div className="divider hide-large hide-extra-large"></div>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-medium flex cases show-on-scroll">
          <div className="cases-image">
            {currentProject ? (
              <img
                src={`${projectImagesPath}${currentProject.sectionThreeImage}`}
                alt=""
              />
            ) : null}
          </div>
          <div className="cases-info">
            <h2>{currentProject ? currentProject.sectionThreeTitle : null}</h2>
            <p className="text-dark">
              {currentProject ? parse(currentProject.sectionThreeBodyFP) : null}
            </p>
            <p className="text-dark">
              {currentProject ? parse(currentProject.sectionThreeBodySP) : null}
            </p>
          </div>
        </section>
      </ScrollAnimation>
    </Layout>
  )
}

export default ProjectPage
