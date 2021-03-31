// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

// SET_PINNED_FILTER
export const setPinnedFilter = (pinned = false) => ({
  type: "SET_PINNED_FILTER",
  pinned,
});

// SET_COURSE_FILTER
export const setCourseFilter = (text = "") => ({
  type: "SET_COURSE_FILTER",
  text,
});

//SET_TYPE_FILTER
export const setTypeFilter = (text = "") => ({
  type: "SET_TYPE_FILTER",
  text,
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

// SORT_BY_TYPE
export const sortByType = () => ({
  type: "SORT_BY_TYPE",
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});
