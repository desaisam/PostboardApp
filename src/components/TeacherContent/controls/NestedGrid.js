import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MediaCard from "./MediaCard";
import ManagePost from "../ManagePosts";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid(props) {
  const classes = useStyles();
  const [comp, setComp] = useState("");
  const [course, setCourse] = useState("");
  const { setComp2 } = props;
  const handleClick = () => {
    setComp("Edit");
  };
  return (
    <div>
      {comp === "Edit" && <ManagePost setComp={setComp} course={course} />}
      {comp === "" && (
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
                <MediaCard
                  name="Algebra 001"
                  setComp={setComp}
                  setCourse={setCourse}
                  imgaeLoc={process.env.PUBLIC_URL + "/Algebra.jpg"}
                  setComp2={setComp2}
                ></MediaCard>
              </Grid>
              <Grid item xs={4}>
                <MediaCard
                  name="History 021"
                  setComp={setComp}
                  setCourse={setCourse}
                  imgaeLoc={process.env.PUBLIC_URL + "/history.jpg"}
                  setComp2={setComp2}
                ></MediaCard>
              </Grid>
              <Grid item xs={4}>
                <MediaCard
                  name="Physics 004"
                  setComp={setComp}
                  setCourse={setCourse}
                  imgaeLoc={process.env.PUBLIC_URL + "/physics.jpg"}
                  setComp2={setComp2}
                ></MediaCard>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
                <MediaCard
                  name="English 002"
                  setComp={setComp}
                  setCourse={setCourse}
                  imgaeLoc={process.env.PUBLIC_URL + "/english.jpg"}
                  setComp2={setComp2}
                ></MediaCard>
              </Grid>
              <Grid item xs={4}>
                <MediaCard
                  name="Geometry 001"
                  setComp={setComp}
                  setCourse={setCourse}
                  imgaeLoc={process.env.PUBLIC_URL + "/geometry.jpg"}
                  setComp2={setComp2}
                ></MediaCard>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}
