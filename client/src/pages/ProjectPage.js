import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ProjectsContext } from "../ProjectsContext";
import Layout from "../components/Layout";

// import "../styles/pages/ProjectPage.scss";

const ProjectPage = (props) => {
  const data = useContext(ProjectsContext);
  const projects = data.projects;

  const projectPath = props.match.params.projectPath;
  const projectImagesPath = "../assets/images/projects/";

  let currentProject = projects.filter((project) => {
    return project.projectPath === projectPath;
  })[0];

  return (
    <Layout textToType="< Projects />">
      <section className="padding-x-large padding-y-extra-small cases show-on-scroll">
        <Link to="/projects">
          <h4 className="subtitle">
            <i className="fas fa-long-arrow-alt-left"></i> Back to projects
          </h4>
        </Link>
        <h1 className="text-center">{currentProject.name}</h1>
      </section>

      <section className="padding-x-large padding-y-medium flex cases show-on-scroll">
        <div className="cases-info">
          <h1>Description</h1>

          <p className="text-dark">{currentProject.longDescriptionFP}</p>
          <p className="text-dark">{currentProject.longDescriptionSP}</p>

          <p>
            {currentProject.technologies.map((tech, index) => {
              return (
                <React.Fragment key={index}>
                  {"#"}
                  <strong>{`${tech}, `}</strong>
                </React.Fragment>
              );
            })}
          </p>

          <h6 className="text-dark">My roles:</h6>
          <ul className="text-dark">
            {currentProject.roles.map((role, index) => {
              return (
                <li key={index}>
                  <p>{role}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="cases-image">
          <img
            src={`${projectImagesPath}${currentProject.displayImage}`}
            alt=""
          />
        </div>
      </section>

      <div className="case-view-buttons padding-x-large padding-y-small flex text-dark show-on-scroll">
        <a href={currentProject.linkGithub} className="gradient-button mb-4">
          <h4>
            View on GitHub <i className="fa fa-github" aria-hidden="true"></i>
          </h4>
        </a>
        <a href={currentProject.linkLive} className="gradient-button  mb-4">
          <h4>
            View live <i className="fas fa-long-arrow-alt-right"></i>
          </h4>
        </a>
      </div>

      <div className="divider hide-large hide-extra-large"></div>

      <section className="padding-x-large padding-y-medium flex cases show-on-scroll">
        <div className="cases-image">
          <img
            src={`${projectImagesPath}${currentProject.sectionOneImage}`}
            alt=""
          />
        </div>
        <div className="cases-info">
          <h1>{currentProject.sectionOneTitle}</h1>
          <p className="text-dark">{currentProject.sectionOneBodyFP}</p>
          <p className="text-dark">{currentProject.sectionOneBodySP}</p>
        </div>
      </section>

      <div className="divider hide-large hide-extra-large"></div>

      <section className="padding-x-large padding-y-medium flex cases show-on-scroll">
        <div className="cases-info">
          <h1>{currentProject.sectionTwoTitle}</h1>
          <p className="text-dark">{currentProject.sectionTwoBodyFP}</p>
          <p className="text-dark">{currentProject.sectionTwoBodySP}</p>
        </div>
        <div className="cases-image">
          <img
            src={`${projectImagesPath}${currentProject.sectionTwoImage}`}
            alt=""
          />
        </div>
      </section>

      <div className="divider hide-large hide-extra-large"></div>

      <section className="padding-x-large padding-y-medium flex cases show-on-scroll">
        <div className="cases-image">
          <img
            src={`${projectImagesPath}${currentProject.sectionThreeImage}`}
            alt=""
          />
        </div>
        <div className="cases-info">
          <h1>{currentProject.sectionThreeTitle}</h1>
          <p className="text-dark">{currentProject.sectionThreeBodyFP}</p>
          <p className="text-dark">{currentProject.sectionThreeBodySP}</p>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectPage;
