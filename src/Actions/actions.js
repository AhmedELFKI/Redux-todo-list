import {
  ADD,
  DELETE,
  UPDATE_TASK_DATA,
  UPDATE_TASK_STATE,
  UPDATE_VISIBILITY_FILTER,
  EDIT_VISIBILITY_FILTER,
} from "../Constants/constants";

function addAction(newAction) {
  return {
    type: ADD,
    payload: newAction,
  };
}

function deleteAction(actionID) {
  return {
    type: DELETE,
    payload: actionID,
  };
}

function updateTaskAction(taskToUpdate) {
  return {
    type: UPDATE_TASK_DATA,
    payload: taskToUpdate,
  };
}

function updateTaskStateAction(actionID) {
  return {
    type: UPDATE_TASK_STATE,
    payload: actionID,
  };
}

function updateVisibilityFilterAction(newVisibilityFilterState) {
  return {
    type: UPDATE_VISIBILITY_FILTER,
    payload: newVisibilityFilterState,
  };
}

function updateEditModalVisibilityFilterAction(id) {
  return {
    type: EDIT_MODAL_VISIBILITY_FILTER,
    payload: id,
  };
}

export {
  addAction,
  deleteAction,
  updateTaskAction,
  updateTaskStateAction,
  updateVisibilityFilterAction,
  updateEditModalVisibilityFilterAction,
};
