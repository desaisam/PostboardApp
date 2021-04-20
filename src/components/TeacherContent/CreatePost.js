import {
  Button,
  Grid,
  makeStyles,
  Snackbar,
  TextField,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Select from "../../components/TeacherContent/controls/Select";
import Input from "../../components/TeacherContent/controls/Input";
import { useForm, Form } from "./userForm";
import * as teacherService from "./services/teacherService";
import DatePicker from "./controls/DatePicker";
import TextBox from "./controls/TextBox";
import { CustomButton } from "./controls/CustomButton";
import SelectMultiple from "./controls/SelectMultiple";
import { connect } from "react-redux";
import { addAssignment } from "../../actions/assignments";
import MuiAlert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { useHistory } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const initialFieldValues = {
  id: 0,
  type: "",
  title: "",
  postTo: "",
  title: "",
  files: "",
  text: "Enter any notes here...",
  description: "",
  dueDate: new Date(),
};
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1.5),
  },
  label: {
    textTransform: "none",
  },
}));

export function CreatePost(props) {
  const { values, setValues, handleInputChange } = useForm(initialFieldValues);
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openReset, setOpenReset] = React.useState(false);
  const handleReset = () => {
    setOpenReset(true);
  };

  const handleYes = () => {
    setOpenReset(false);
  };
  const handleNo = () => {
    setOpenReset(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Form>
      {console.log(props)}
      <Grid container>
        <Grid item xs={6}>
          <Select
            variant="outlined"
            label="Type"
            name="type"
            onChange={handleInputChange}
            values={values.type}
            options={teacherService.getTypeCollection()}
          />
          <Input
            name="type"
            variant="outlined"
            label="Title"
            name="type"
            values={values.title}
            onChange={handleInputChange}
          ></Input>

          {/* <Input
            variant="outlined"
            label="Files"
            name="postto"
            values={values.postTo}
            onChange={handleInputChange}
          ></Input> */}
          <TextBox
            variant="outlined"
            label="Description"
            name="description"
            values={values.text}
            onChange={handleInputChange}
          ></TextBox>
        </Grid>
        <Grid item xs={6}>
          <SelectMultiple />
          <DatePicker
            name="dueDate"
            label="Due Date"
            values={values.dueDate}
            onChange={handleInputChange}
          ></DatePicker>
        </Grid>
      </Grid>
      <Grid container justify="flex-end">
        <div>
          <Button
            variant="contained"
            component="label"
            classes={{ root: classes.root, label: classes.label }}
            color="primary"
            size="large"
          >
            Upload File
            <input type="file" hidden />
          </Button>

          <CustomButton
            text="Reset"
            color="default"
            onClick={handleReset}
          ></CustomButton>
          <Dialog
            open={openReset}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to Reset ?
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

          <CustomButton type="submit" text="Submit" onClick={handleClick} />
          <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Sucessfully Created the post !
            </Alert>
          </Snackbar>
        </div>
      </Grid>
    </Form>
  );
}

const mapStateToProps = (state) => ({
  assignment: state,
});

const mapDispatchToProps = (dispatch) => ({
  addAssignment: (
    course,
    type,
    title,
    dueDate,
    dueTime,
    isPinned,
    assignedTo
  ) =>
    dispatch(
      addAssignment(course, type, title, dueDate, dueTime, isPinned, assignedTo)
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
