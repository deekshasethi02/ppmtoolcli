import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../actions/projectActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getBacklog();
  }
  render() {
    const { project_tasks } = this.props.project_tasks;

    let BoardContent;
    let AllProjects = [];

    const BoardAlgorithm = project_tasks => {
      if (project_tasks.length < 1) {
        return (
          <div className="alert alert-info text-center" role="alert">
            No projects on this board
          </div>
        );
      } else {
        const tasks = project_tasks.map(project_task => (
          <ProjectItem key={project_task.id} project_task={project_task} />
        ));

        for (let i = 0; i < tasks.length; i++) {
          AllProjects.push(tasks[i]);
        }

        return <React.Fragment>{AllProjects}</React.Fragment>;
      }
    };

    BoardContent = BoardAlgorithm(project_tasks);

    return (
      <div>
        <div className="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 text-center">Projects</h1>
                <br />
                <CreateProjectButton />
                <br />
                <hr />
                {BoardContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getBacklog: PropTypes.func.isRequired,
  project_tasks: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project_tasks: state.project_task
});

export default connect(
  mapStateToProps,
  { getBacklog }
)(Dashboard);
