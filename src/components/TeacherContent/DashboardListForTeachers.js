import React from "react";
import { connect } from "react-redux";

import selectAssignments from "../../selectors/assignments";
import "../../styles/styles.scss";
import DashboardListItemForTeachers from "./DashboardListItemForTeachers";

const DashboardListForTeachers = (props) => (
  <div>
    <div className="list-header">
      <div className="show-for-mobile">Assignments</div>
      <div className="show-for-desktop">Assignment</div>
      <div className="show-for-desktop">Due Time</div>
    </div>
    <div className="list-body" style={{ overflowY: "scroll", height: "450px" }}>
      {props.assignments.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No Assignments</span>
        </div>
      ) : (
        props.assignments.map((assignment) => {
          console.log(`Course Name in Dashboard : ${props.comp}`);
          console.log(`Assigned to ${assignment.assignedTo}`);
          //assignment.assignedTo === props.courseName
          if (props.comp === "Edit") {
            return (
              <DashboardListItemForTeachers
                key={assignment.id}
                {...assignment}
              />
            );
          } else {
            if (assignment.assignedTo === props.courseName) {
              return (
                <DashboardListItemForTeachers
                  key={assignment.id}
                  {...assignment}
                />
              );
            }
          }
        })
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    assignments: selectAssignments(state.assignments, state.filters),
  };
};

export default connect(mapStateToProps)(DashboardListForTeachers);
