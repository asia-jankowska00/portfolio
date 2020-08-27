import React from "react";
import { Link } from "react-router-dom";

const ProjectThumbnail = (props) => {
  return (
    <div className={`case ${props.caseClass}`}>
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
