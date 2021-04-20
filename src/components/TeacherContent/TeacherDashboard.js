import { Paper, makeStyles, Box } from "@material-ui/core";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "../Sidebar/SideBarMenu";
import CreatePost from "./CreatePost";
import ManagePost from "./ManagePosts";
import PageHeader from "./PageHeader";
import "../../styles/styles.scss";
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
  const [course, setCourse] = useState("");
  let style = toggled ? "toggled" : "";
  style += hasBackground ? " sidebar-bg" : "";
  const handleButtonEdit = () => {
    setComp("ManagePosts");
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
            {comp !== "Create" &&
              comp !== "ManagePosts" &&
              comp !== "ManageClass" && (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleButtonCreate}
                >
                  Create Post
                </Button>
              )}
            {comp !== "ManagePosts" &&
              comp !== "Create" &&
              comp !== "ManageClass" && (
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
            <NestedGrid setComp={setComp} setCourse={setCourse} />
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
        {(comp === "ManagePosts" || comp == "ManageClass") && (
          <div>
            <PageHeader setComp={setComp} comp={comp} />
            <ManagePost
              setComp={setComp}
              comp={comp}
              course={course}
            ></ManagePost>
          </div>
        )}
      </div>
    </Router>
  );
};

export default TeacherDashboard;
