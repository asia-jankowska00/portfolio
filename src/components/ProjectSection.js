import React from "react"
import { Link } from "gatsby"

import ScrollAnimation from "react-animate-on-scroll"

const ProjectSection = props => {
  const project = props.project

  const projectImagesPath = "assets/images/projects/"
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      {props.alignment === "left" ? (
        <section className="padding-x-large padding-y-medium flex projects cases show-on-scroll">
          <div className="cases-image">
            <Link to={`projects/${project.projectPath}`}>
              {/* <img src={`${projectImagesPath}${project.displayImage}`} alt="" /> */}
            </Link>
          </div>
          <div className="cases-info">
            <h2>{project.name}</h2>
            <h4 className="subtitle">{project.subtitle}</h4>
            <p>
              {project.technologies.map((tech, index) => {
                return (
                  <React.Fragment key={index}>
                    <strong>
                      {"#"}
                      {`${tech}, `}
                    </strong>
                  </React.Fragment>
                )
              })}
            </p>
            <h6 className="text-dark">My roles:</h6>
            <ul className="text-dark">
              {project.roles.map((role, index) => {
                return (
                  <li key={index}>
                    <p>{role}</p>
                  </li>
                )
              })}
            </ul>
            <Link
              className="gradient-button"
              to={`projects/${project.projectPath}`}
            >
              <h4 className="">
                view project <i className="fas fa-long-arrow-alt-right"></i>
              </h4>
            </Link>
          </div>
        </section>
      ) : (
        <section className="padding-x-large padding-y-medium flex projects cases show-on-scroll">
          <div className="cases-info">
            <h2>{project.name}</h2>
            <h4 className="subtitle">{project.subtitle}</h4>
            <p>
              {project.technologies.map(tech => {
                return (
                  <React.Fragment>
                    <strong>
                      {"#"}
                      {`${tech}, `}
                    </strong>
                  </React.Fragment>
                )
              })}
            </p>
            <h6 className="text-dark">My roles:</h6>
            <ul className="text-dark">
              {project.roles.map(role => {
                return (
                  <li>
                    <p>{role}</p>
                  </li>
                )
              })}
            </ul>
            <Link
              className="gradient-button"
              to={`projects/${project.projectPath}`}
            >
              <h4 className="">
                view project <i className="fas fa-long-arrow-alt-right"></i>
              </h4>
            </Link>
          </div>
          <div className="cases-image">
            <Link to={`projects/${project.projectPath}`}>
              {/* {project.displayImage ? (
                <img
                  src={`${projectImagesPath}${project.displayImage}`}
                  alt=""
                />
              ) : null} */}
            </Link>
          </div>
        </section>
      )}
    </ScrollAnimation>
  )
}

export default ProjectSection
