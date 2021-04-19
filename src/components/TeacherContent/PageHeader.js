import React from "react";
import {
  Paper,
  Card,
  Typography,
  makeStyles,
  Button,
  Box,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  pageHeader: {
    padding: theme.spacing(3),
    display: "flex",
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(2),
  },
  pageTitle: {
    paddingLeft: theme.spacing(10),
    display: "flex",
    "& .MuiTypography-subtitle2": {
      opacity: "1",
    },
  },
}));

export default function PageHeader(props) {
  const classes = useStyles();
  const { title, setComp, comp } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleYes = () => {
    console.log(props);
    setOpen(false);
    setComp("");
  };
  const handleNo = () => {
    setOpen(false);
  };
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        {comp !== "Edit" && (
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Close
          </Button>
        )}
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to close ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleNo} color="primary">
              NO
            </Button>
            <Button onClick={handleYes} color="primary" autoFocus>
              YES
            </Button>
          </DialogActions>
        </Dialog>
        <div className="content-box2">{title}</div>
      </div>
    </Paper>
  );
}
