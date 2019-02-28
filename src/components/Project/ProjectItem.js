import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProjectTask, updateProject } from "../../actions/projectActions";
import UpdateProjectButton from "./UpdateProjectButton";

class ProjectItem extends Component {
  onDeleteClick(pt_id) {
    this.props.deleteProjectTask(pt_id);
  }
  render() {
    const { project_task } = this.props;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">
                REACT
                <p>pId : {project_task.projectIdentifier}</p>
              </span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{project_task.projectName}</h3>
              <p>{project_task.description}</p>
            </div>

            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <a href="#">
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1"> Project Board </i>
                    {this.props.AllProjects}
                  </li>
                </a>
                <a href="#">
                  <li className="list-group-item update">
                    <UpdateProjectButton project_task={project_task} />
                  </li>
                </a>
                <a href="">
                  <li className="list-group-item delete">
                    <i
                      className="fa fa-minus-circle pr-1"
                      onClick={this.onDeleteClick.bind(
                        this,
                        project_task.projectIdentifier
                      )}
                    >
                      Delete Project
                    </i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  deleteProjectTask: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteProjectTask }
)(ProjectItem);
