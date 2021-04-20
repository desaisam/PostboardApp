import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MediaCard from "./MediaCard";

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

  const { setComp, course, setCourse } = props;

  return (
    <div>
      {/* {comp === "Edit" && <ManagePost setComp={setComp} course={course} />} */}
      {
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
                <MediaCard
                  name="Algebra 001"
                  descr="Alegra section 001. Total 35 students enrolled."
                  setCourse={setCourse}
                  imgaeLoc={process.env.PUBLIC_URL + "/Algebra.jpg"}
                  setComp={setComp}
                  course={course}
                ></MediaCard>
              </Grid>
              <Grid item xs={4}>
                <MediaCard
                  name="History 021"
                  descr="History section 021. Total 25 students enrolled."
                  setCourse={setCourse}
                  imgaeLoc={process.env.PUBLIC_URL + "/history.jpg"}
                  setComp={setComp}
                ></MediaCard>
              </Grid>
              <Grid item xs={4}>
                <MediaCard
                  name="Physics 004"
                  descr="Physics section 004. Total 25 students enrolled."
                  setCourse={setCourse}
                  imgaeLoc={process.env.PUBLIC_URL + "/physics.jpg"}
                  setComp={setComp}
                ></MediaCard>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
                <MediaCard
                  name="English 002"
                  descr="English section 002. Total 15 students enrolled."
                  setCourse={setCourse}
                  imgaeLoc={process.env.PUBLIC_URL + "/english.jpg"}
                  setComp={setComp}
                ></MediaCard>
              </Grid>
              <Grid item xs={4}>
                <MediaCard
                  name="Geometry 001"
                  descr="English section 001. Total 45 students enrolled."
                  setCourse={setCourse}
                  imgaeLoc={process.env.PUBLIC_URL + "/geometry.jpg"}
                  setComp={setComp}
                ></MediaCard>
              </Grid>
            </Grid>
          </Grid>
        </div>
      }
    </div>
  );
}
