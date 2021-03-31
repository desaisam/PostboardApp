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
    <div className="list-body">
      {props.assignments.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No Assignments</span>
        </div>
      ) : (
        props.assignments.map((assignment) => {
          return (
            <DashboardListItemForTeachers key={assignment.id} {...assignment} />
          );
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