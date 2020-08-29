import React from "react";
import { Link } from "react-router-dom";

const ProjectThumbnail = (props) => {
  const project = props.project;
  return (
    <div
      className={`case `}
      style={{
        backgroundImage: `url(../../assets/images/projects/${project.displayImage})`,
      }}
      // background-image={`url(../../assets/images/projects/svalegaarden/svalegaarden-all-devices.png)`}
    >
      <div className="case-hover">
        <Link to={`/projects/${props.projectPath}`}>
          <h4>
            View project <i className="fas fa-long-arrow-alt-right"></i>
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
