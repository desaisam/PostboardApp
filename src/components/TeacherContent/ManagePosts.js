import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  setTypeFilter,
  setCourseFilter,
  sortByDate,
  sortByType,
  setStartDate,
  setEndDate,
} from "../../actions/filters";
import "../../styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import Select from "react-select";
import DashboardListForTeachers from "./DashboardListForTeachers";
import { Box, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function EditPost(props) {
  const history = useHistory();
  const { course, setComp, comp } = props;

  const handleBack = () => {
    setComp("");
  };
  // console.log(`COurse Name ${course}`);
  const defaultOptions = [
    { value: "date", label: "Date", color: "#00B8D9" },
    { value: "type", label: "Type", color: "#00B8D9" },
  ];

  const groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const groupBadgeStyles = {
    backgroundColor: "#EBECF0",
    borderRadius: "2em",
    color: "#172B4D",
    display: "inline-block",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: "1",
    minWidth: 1,
    padding: "0.16666666666667em 0.5em",
    textAlign: "center",
  };
  const formatGroupLabel = (data) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );

  const assignmentTypes = [
    { value: "notes", label: "Notes", color: "#00B8D9" },
    { value: "announcement", label: "Announcement", color: "#0052CC" },
    { value: "homework", label: "Homework", color: "#5243AA" },
    { value: "quiz", label: "Quiz", color: "#FF5630" },
    { value: "test", label: "Test", color: "#FF8B00" },
    { value: "project", label: "Project", color: "#FFC400" },
  ];

  const courseOptions = [
    { value: "algebra", label: "Algebra", color: "#00B8D9" },
    { value: "history", label: "History", color: "#0052CC" },
    { value: "physics", label: "Physics", color: "#5243AA" },
    { value: "english", label: "English", color: "#FF5630" },
    { value: "geometry", label: "Geometry", color: "#FF8B00" },
  ];

  const groupedOptions = [
    {
      label: "Default Options",
      options: defaultOptions,
    },
    {
      label: "Assignment Type",
      options: assignmentTypes,
    },
    {
      label: "Course",
      options: courseOptions,
    },
  ];
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
