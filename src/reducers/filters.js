// Filters Reducer

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  pinned: false,
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_PINNED_FILTER":
      return {
        ...state,
        pinned: action.pinned,
      };
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SET_TYPE_FILTER":
      return {
        ...state,
        text: action.text,
        pinned: action.pinned,
      };
    case "SET_COURSE_FILTER":
      return {
        ...state,
        text: action.text,
        pinned: action.pinned,
      };
    case "SORT_BY_TYPE":
      return {
        ...state,
        sortBy: "type",
        pinned: action.pinned,
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
        pinned: action.pinned,
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
        pinned: action.pinned,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
        pinned: action.pinned,
      };
    default:
      return state;
  }
};
