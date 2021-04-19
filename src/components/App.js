import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import configureStore from "../store/configureStore";
import { Provider } from "react-redux";
import { addAssignment } from "../actions/assignments";
import moment from "moment";
import Error from "./ErrorPage.js";
import HomePage from "./HomePage.js";
import StudentDashboard from "./StudentContent/StudentDashboard.js";
import TeacherDashboard from "./TeacherContent/TeacherDashboard.js";
import "./../styles/styles.scss";
class App extends Component {
  render() {
    const store = configureStore();

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

    store.dispatch(
      addAssignment({
        course: "Algebra",
        type: "Quiz",
        title: "Chapter 9 Quiz",
        assignedTo: "Algo001",
        dueDate: moment(),
        dueTime: moment().startOf("day").add(10, "hour"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "Algebra",
        type: "Homework",
        assignedTo: "Algo001",
        title: "Chapter 9 Problems",
        dueDate: moment().add(1, "days"),
        dueTime: moment().startOf("day").add(8, "hour"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "Geometry",
        type: "Quiz",
        assignedTo: "Geo001",
        title: "Chapter 14 Quiz",
        dueDate: moment().add(1, "days"),
        dueTime: moment().startOf("day").subtract(1, "minute"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "History",
        type: "Notes",
        assignedTo: "History 021",
        title: "Revolutionary War Notes",
        dueDate: moment().add(3, "days"),
        dueTime: moment().startOf("day").subtract(1, "minute"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "History",
        type: "Notes",
        assignedTo: "History 021",
        title: "Revolutionary War Notes",
        dueDate: moment().add(3, "days"),
        dueTime: moment().startOf("day").subtract(1, "minute"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "History",
        type: "Exam",
        assignedTo: "History 021",
        title: "French Revolution",
        dueDate: moment().add(10, "days"),
        dueTime: moment().startOf("day").subtract(1, "minute"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "History",
        type: "Notes",
        assignedTo: "History 021",
        title: "Revolutionary War Notes",
        dueDate: moment().add(15, "days"),
        dueTime: moment().startOf("day").subtract(1, "minute"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "History",
        type: "Quiz",
        assignedTo: "History 021",
        title: "Egyptian Civilasation",
        dueDate: moment().add(3, "days"),
        dueTime: moment().startOf("day").subtract(1, "minute"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "History",
        type: "Test",
        assignedTo: "History 021",
        title: "Revolutionary War Test",
        dueDate: moment().add(5, "days"),
        dueTime: moment().startOf("day").subtract(1, "minute"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "Physics",
        type: "Homework",
        assignedTo: "Sci001",
        title: "Velocity Problems",
        dueDate: moment().add(8, "days"),
        dueTime: moment().startOf("day"),
        pinned: false,
      })
    );

    store.dispatch(
      addAssignment({
        course: "Physics",
        type: "Homework",
        assignedTo: "Physics 004",
        title: "Velocity Problems",
        dueDate: moment().add(8, "days"),
        dueTime: moment().startOf("day"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "Physics",
        type: "Homework",
        assignedTo: "Physics 004",
        title: "Gravitation Problems",
        dueDate: moment().add(10, "days"),
        dueTime: moment().startOf("day"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "Physics",
        type: "Quiz",
        assignedTo: "Physics 004",
        title: "Thermodynaics Quiz",
        dueDate: moment().add(10, "days"),
        dueTime: moment().startOf("day"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "Physics",
        type: "Test",
        assignedTo: "Physics 004",
        title: "Velocity Test",
        dueDate: moment().add(12, "days"),
        dueTime: moment().startOf("day").add(12, "hour"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "Geometry",
        type: "Homework",
        assignedTo: "Geometry 001",
        title: "Triangle Homework",
        dueDate: moment().add(12, "days"),
        dueTime: moment().startOf("day").add(12, "hour"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "Geometry",
        type: "Homework",
        assignedTo: "Geometry 001",
        title: "Circle Homework",
        dueDate: moment().add(19, "days"),
        dueTime: moment().startOf("day").add(12, "hour"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "Algebra",
        type: "Homework",
        assignedTo: "Algebra 001",
        title: "Exponentials Problems",
        dueDate: moment().add(13, "days"),
        dueTime: moment().startOf("day").add(8, "hour"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "English",
        type: "Quiz",
        assignedTo: "English 002",
        title: "Nouns and Verbs",
        dueDate: moment().add(13, "days"),
        dueTime: moment().startOf("day").add(8, "hour"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "English",
        type: "Homework",
        assignedTo: "English 002",
        title: "Subject verb agreement",
        dueDate: moment().add(13, "days"),
        dueTime: moment().startOf("day").add(8, "hour"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "English",
        type: "Notes",
        assignedTo: "English 002",
        title: "William Wordsworth's works",
        dueDate: moment().add(0, "days"),
        dueTime: moment().startOf("day").add(8, "hour"),
        pinned: false,
      })
    );
    store.dispatch(
      addAssignment({
        course: "English",
        type: "Notes",
        assignedTo: "English 002",
        title: "Merchent of Venice",
        dueDate: moment().add(13, "days"),
        dueTime: moment().startOf("day").add(8, "hour"),
        pinned: false,
      })
    );

    return (
      <BrowserRouter>
        <div>
          <Provider store={store}>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/student" component={StudentDashboard} />
              <Route path="/teacher" component={TeacherDashboard} />
              <Route component={Error} />
            </Switch>
          </Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
