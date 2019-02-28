import axios from "axios";

import { GET_ERRORS, GET_PROJECT_TASKS, DELETE_PROJECT_TASK } from "./types";

export const createProject = (project, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/web/projects", project);
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};  

export const getBacklog = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/web/projects/all");
  dispatch({
    type: GET_PROJECT_TASKS,
    payload: res.data
  });
};

export const deleteProjectTask = pt_id => async dispatch => {
  if (
    window.confirm(
      "You are deleting project" + pt_id + "this action cannot be undone"
    )
  ) {
    await axios.delete("http://localhost:8080/web/projects/" + pt_id);
    dispatch({
      type: DELETE_PROJECT_TASK,
      payload: pt_id
    });
  }
};

export const updateProject = (project, history) => async dispatch => {
  try {
    const res = await axios.put("http://localhost:8080/web/projects", project);
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};
