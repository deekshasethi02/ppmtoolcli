import React from "react";
import { Link } from "react-router-dom";

const UpdateProjectButton = props => {
  const newTo = {
    pathname: "/updateProject/" + props.project_task.projectIdentifier,
    id: props.project_task.id,
    projectName: props.project_task.projectName,
    projectIdentifier: props.project_task.projectIdentifier,
    description: props.project_task.description,
    start_date: props.project_task.start_date,
    end_date: props.project_task.end_date
  };

  return (
    <React.Fragment>
      <Link to={newTo} className="btn btn-lg btn-info">
        Update the Project Info
      </Link>
    </React.Fragment>
  );
};

export default UpdateProjectButton;
