import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React from "react";

export default function DatePicker(props) {
  const { name, label, value, onChange } = props;
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        inputVariant="outlined"
        label={label}
        name={name}
        value={selectedDate}
        format="MM/dd/yyyy"
        onChange={handleDateChange}
      ></KeyboardDatePicker>
      <KeyboardTimePicker
        inputVariant="outlined"
        label="Due Time"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change time",
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
