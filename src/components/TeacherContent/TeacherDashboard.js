import { Paper, makeStyles, Box } from "@material-ui/core";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalAppContext } from "../..";
import SideBar from "../Sidebar/SideBarMenu";
import CreatePost from "./CreatePost";
import ManagePost from "./ManagePosts";
import PageHeader from "./PageHeader";

import "../../styles/styles.scss";
// import { ScrollArea } from "../../../node_modules/react-scrollbar";
import CreateIcon from "@material-ui/icons/Create";

import NestedGrid from "./controls/NestedGrid";
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  root: {
    "& > *": {
      margin: theme.spacing(5),
    },
  },
}));

const TeacherDashboard = (props) => {
  const [toggled, setToggled] = useState(true);
  const [hasBackground, setHasBackground] = useState(true);
  const [comp, setComp] = useState("");
  let style = toggled ? "toggled" : "";
  style += hasBackground ? " sidebar-bg" : "";
  const handleButtonEdit = () => {
    setComp("Edit");
  };

  const handleButtonCreate = () => {
    setComp("Create");
  };
  const classes = useStyles();
  return (
    <Router>
      <GlobalAppContext.Provider
        value={{ toggled, setToggled, hasBackground, setHasBackground }}
      >
        <div className={"page-wrapper default-theme bg1 " + style}>
          <SideBar />
        </div>

        <div className="content-container" float="">
          <div className="content-container__centered">
            <div className={classes.root}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleButtonCreate}
              >
                Create Post
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleButtonEdit}
              >
                Edit Post{"    "}
              </Button>
            </div>
          </div>

          {comp === "" && (
            <div>
              <NestedGrid></NestedGrid>
            </div>
          )}
          {comp === "Create" && (
            <div>
              <PageHeader
                title="Create Item"
                icon={<CreateIcon fontSize="small" />}
                setComp={setComp}
              />

              <Paper className={classes.pageContent}>{<CreatePost />}</Paper>
            </div>
          )}
          {comp === "Edit" && (
            <div>
              <PageHeader title="Manage Item" setComp={setComp} />
              <ManagePost></ManagePost>
            </div>
          )}
        </div>
      </GlobalAppContext.Provider>
    </Router>
  );
};

export default TeacherDashboard;
