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

const defaultOptions = [
  { value: "date", label: "No Filter", color: "#00B8D9" },
];

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

export const groupedOptions = [
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

class DashboardListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.value === "date") {
      this.props.sortByDate();
      this.props.setCourseFilter();
    } else if (e.value === "type") {
      this.props.sortByType();
    } else if (e.value === "algebra") {
      this.props.setCourseFilter(e.value);
    } else if (e.value === "history") {
      this.props.setCourseFilter(e.value);
    } else if (e.value === "physics") {
      this.props.setCourseFilter(e.value);
    } else if (e.value === "geometry") {
      this.props.setCourseFilter(e.value);
    } else if (e.value === "english") {
      this.props.setCourseFilter(e.value);
    } else if (e.value === "notes") {
      this.props.setTypeFilter(e.value);
    } else if (e.value === "announcement") {
      this.props.setTypeFilter(e.value);
    } else if (e.value === "homework") {
      this.props.setTypeFilter(e.value);
    } else if (e.value === "quiz") {
      this.props.setTypeFilter(e.value);
    } else if (e.value === "project") {
      this.props.setTypeFilter(e.value);
    } else if (e.value === "test") {
      this.props.setTypeFilter(e.value);
    }
  };

  render() {
    return (
      <div className="input-group">
        <div className="input-group__item">
          <input
            type="text"
            className="text-input"
            placeholder="Search assignments"
            value={this.props.filters.text}
            onChange={this.onTextChange}
          />
        </div>
        <div className="input-group__item">
          <Select
            className="select"
            placeholder="Filter"
            defaultValue={defaultOptions[0]}
            options={groupedOptions}
            formatGroupLabel={formatGroupLabel}
            onChange={this.onSortChange}
          />
        </div>
        <div className="input-group__item">
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setPinnedFilter: (pinned) => dispatch(setTextFilter(pinned)),
  setCourseFilter: (text) => dispatch(setCourseFilter(text)),
  setTypeFilter: (text) => dispatch(setTypeFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByType: () => dispatch(sortByType()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardListFilters);
