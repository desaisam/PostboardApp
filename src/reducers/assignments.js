// assignments Reducer

const assignmentsReducerDefaultState = [];

export default (state = assignmentsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_ASSIGNMENT":
      console.log("Adding");
      return [...state, action.assignment];
    case "REMOVE_ASSIGNMENT":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_ASSIGNMENT":
      return state.map((assignment) => {
        if (assignment.id === action.id) {
          return {
            ...assignment,
            ...action.updates,
          };
        } else {
          return assignment;
        }
      });
    default:
      return state;
  }
};
