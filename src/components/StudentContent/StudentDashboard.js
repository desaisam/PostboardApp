import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import SideBar from "../Sidebar/SideBarMenu";
import "../../styles/styles.scss";
import { GlobalAppContext } from "../../index.js";
import DashboardList from "./DashboardList";
import configureStore from "../../store/configureStore";
import DashboardListFilters from "./DashboardListFilters";
import { addAssignment } from "../../actions/assignments";
import moment from "moment";

const StudentDashboard = () => {
  const [toggled, setToggled] = useState(true);
  const [hasBackground, setHasBackground] = useState(true);
  let style = toggled ? "toggled" : "";
  style += hasBackground ? " sidebar-bg" : "";

  return (
    <Router>
      <GlobalAppContext.Provider
        value={{ toggled, setToggled, hasBackground, setHasBackground }}
      >
        {" "}
        <div className={"page-wrapper default-theme bg1 " + style}>
          <SideBar />
        </div>
        <div className="content-container">
          <DashboardListFilters />
          <DashboardList />
        </div>
      </GlobalAppContext.Provider>
    </Router>
  );
};

export default StudentDashboard;
