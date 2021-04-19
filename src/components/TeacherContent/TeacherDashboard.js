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
      <div className={"page-wrapper default-theme bg1 " + style}>
        <SideBar />
      </div>

      <div className="content-container ">
        <div className="content-container__centered">
          <div className={classes.root}>
            {comp !== "Create" && comp !== "Edit" && (
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleButtonCreate}
              >
                Create Post
              </Button>
            )}
            {comp !== "Edit" && comp !== "Create" && (
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleButtonEdit}
              >
                Manage Posts{"    "}
              </Button>
            )}
          </div>
        </div>

        {comp === "" && (
          <div>
            <NestedGrid setComp2={setComp} />
          </div>
        )}
        {comp === "Create" && (
          <div>
            <PageHeader
              icon={<CreateIcon fontSize="small" />}
              setComp={setComp}
            />

            <Paper className={classes.pageContent}>{<CreatePost />}</Paper>
          </div>
        )}
        {comp === "Edit" && (
          <div>
            <PageHeader setComp={setComp} comp={comp} />
            <ManagePost setComp={setComp} comp={comp}></ManagePost>
          </div>
        )}
      </div>
    </Router>
  );
};

export default TeacherDashboard;
