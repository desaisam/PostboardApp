import moment from "moment";

// Get visible assignments

export default (assignments, { text, sortBy, startDate, endDate }) => {
  return assignments
    .filter((assignment) => {
      const dueDateMoment = moment(assignment.dueDate);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(dueDateMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(dueDateMoment, "day")
        : true;
      const titleMatch = assignment.title
        .toLowerCase()
        .includes(text.toLowerCase());
      const typeMatch = assignment.type
        .toLowerCase()
        .includes(text.toLowerCase());
      const courseMatch = assignment.course
        .toLowerCase()
        .includes(text.toLowerCase());
      return (
        startDateMatch &&
        endDateMatch &&
        (titleMatch || typeMatch || courseMatch)
      );
    })
    .sort((a, b) => {
      if (b.pinned) {
        return 1;
      }
      if (a.pinned) {
        return -1;
      }
      if (sortBy === "date") {
        return a.dueDate > b.dueDate ? 1 : -1;
      } else if (sortBy === "type") {
        return a.type > b.type ? 1 : -1;
      } else {
        return 1;
      }
    });
};
