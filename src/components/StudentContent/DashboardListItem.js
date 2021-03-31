import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import "../../styles/styles.scss";
import { setPinnedFilter } from "../../actions/filters";
import { editAssignment } from "../../actions/assignments";

export class DashboardListItem extends React.Component {
  constructor(props) {
    super(props);

    moment.locale("en", {
      calendar: {
        lastDay: "[Yesterday]",
        sameDay: "[Today]",
        nextDay: "[Tomorrow]",
        lastWeek: "[last] dddd",
        nextWeek: "dddd",
        sameElse: "L",
      },
    });
    // moment.locale();
    this.props = props;
    this.state = {
      id: this.props.id,
      course: this.props.course,
      dueDate: this.props.dueDate,
      dueTime: this.props.dueTime,
      title: this.props.title,
      type: this.props.type,
      pinned: this.props.pinned,
    };
  }

  pinAction = (e) => {
    this.setState({ pinned: !this.props.pinned }, () => {
      this.props.editAssignment(this.props.id, this.state);
    });
    this.props.setPinnedFilter(this.state);
  };

  render() {
    return (
      <div className="list-item">
        <div>
          {console.log(this.props)}
          <span>{moment(this.props.dueDate).calendar()}</span>
          <h3 className="list-item__title">{this.props.type}</h3>
          <span className="list-item__sub-title">{this.props.course}</span>
        </div>
        <div>{this.props.title}</div>
        <h3 className="list-item__data">
          <button className="button" onClick={this.pinAction}>
            <b>{this.state.pinned ? "Unpin" : "Pin"}</b>
          </button>
          {moment(this.props.dueTime).format("LT")}
        </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assignment: state,
});

const mapDispatchToProps = (dispatch) => ({
  editAssignment: (id, assignment) => dispatch(editAssignment(id, assignment)),
  setPinnedFilter: (pinned) => dispatch(setPinnedFilter(pinned)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardListItem);
