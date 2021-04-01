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
import { Box } from "@material-ui/core";

export default function EditPost(props) {
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
    <div className="container full-width ">
      <div className="input-group__item ">
        <input
          type="text"
          className="text-input"
          placeholder="Search assignments"
        />
        {/* <div className="input-group__item">
          <Select
            className="select"
            defaultValue={defaultOptions[0]}
            options={groupedOptions}
            formatGroupLabel={formatGroupLabel}
          />
        </div>
        <div className="input-group__item">
          <DateRangePicker showClearDates={true} numberOfMonths={1} />
        </div> */}
        <div className="content-box">
          <DashboardListForTeachers></DashboardListForTeachers>
        </div>
      </div>
    </div>
  );
}
