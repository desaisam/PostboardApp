import { v4 as uuid } from "uuid";

export const addAssignment = ({
  course = "",
  type = "",
  title = "",
  dueDate = 0,
  dueTime = 0,
  pinned = false,
  assignedTo = "",
} = {}) => ({
  type: "ADD_ASSIGNMENT",
  assignment: {
    id: uuid(),
    course,
    type,
    title,
    dueDate,
    dueTime,
    pinned,
    assignedTo,
  },
});

export const removeAssignment = (id = 123) => ({
  type: "REMOVE_ASSIGNMENT",
  id,
});

export const editAssignment = (id, updates, isPinned) => ({
  type: "EDIT_ASSIGNMENT",
  id,
  updates,
});

export const startEdit = (id, updates) => {
  return (dispatch, getState) => {
    dispatch(editAssignment(id, updates));
  };
};
