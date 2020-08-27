import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/ProjectSection.scss";

const ProjectSection = (props) => {
  const project = props.project;

  const projectImagesPath = "assets/images/projects/";
  return (
    <React.Fragment>
      {props.alignment == "left" ? (
        <section className="padding-x-large padding-y-medium flex projects cases show-on-scroll">
          <div className="cases-image">
            <Link to={`projects/${project.projectPath}`}>
              <img src={`${projectImagesPath}${project.displayImage}`} alt="" />
            </Link>
          </div>
          <div className="cases-info">
            <h1>{project.name}</h1>
            <h4 className="subtitle">{project.subtitle}</h4>
            <h6 className="text-dark">My roles:</h6>
            <ul className="text-dark">
              {project.roles.map((role) => {
                return (
                  <li>
                    <p>{role}</p>
                  </li>
                );
              })}
            </ul>
            <Link to={`projects/${project.projectPath}`}>
              <h4 className="padding-y-extra-small gradient-underline-hover">
                view project <i className="fas fa-long-arrow-alt-right"></i>
              </h4>
            </Link>
          </div>
        </section>
      ) : (
        <section className="padding-x-large padding-y-medium flex projects cases show-on-scroll">
          <div className="cases-info">
            <h1>{project.name}</h1>
            <h4 className="subtitle">{project.subtitle}</h4>
            <h6 className="text-dark">My roles:</h6>
            <ul className="text-dark">
              {project.roles.map((role) => {
                return (
                  <li>
                    <p>{role}</p>
                  </li>
                );
              })}
            </ul>
            <Link to={`projects/${project.projectPath}`}>
              <h4 className="padding-y-extra-small gradient-underline-hover">
                view project <i className="fas fa-long-arrow-alt-right"></i>
              </h4>
            </Link>
          </div>
          <div className="cases-image">
            <Link to={`projects/${project.projectPath}`}>
              {project.displayImage ? (
                <img
                  src={`${projectImagesPath}${project.displayImage}`}
                  alt=""
                />
              ) : null}
            </Link>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default ProjectSection;
