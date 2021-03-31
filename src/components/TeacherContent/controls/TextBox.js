import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  TextField,
} from "@material-ui/core";
import React from "react";

export default function TextBox(props) {
  const { name, label, values, onChange } = props;

  return (
    <TextField
      id="outlined-multiline-static"
      label={label}
      multiline
      rows={5}
      defaultValue={values}
      variant="outlined"
      onChange={onChange}
    />
  );
}
