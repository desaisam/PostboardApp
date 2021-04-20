import React from "react";
import "../../styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import DashboardListForTeachers from "./DashboardListForTeachers";
import { Button } from "@material-ui/core";

export default function EditPost(props) {
  const { course, setComp, comp } = props;

  const handleBack = () => {
    setComp("");
  };
  console.log(`Course Name in Manage Posts ${course}`);

  return (
    <div>
      <Button
        flex="top"
        variant="contained"
        color="primary"
        onClick={handleBack}
      >
        Back
      </Button>
      <div className="container full-width ">
        <div className="input-group__item ">
          <div className="content-box">
            <DashboardListForTeachers
              courseName={course}
              comp={comp}
            ></DashboardListForTeachers>
          </div>
        </div>
      </div>
    </div>
  );
}
