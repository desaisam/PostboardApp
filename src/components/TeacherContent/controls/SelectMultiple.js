import React from "react";
import ReactDOM from "react-dom";
import { Multiselect } from "multiselect-react-dropdown";
import "../controls/MultiSelect.css";
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class SelectMultiple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plainArray: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
      objectArray: [
        { key: "Alg 001", cat: "Algebra" },
        { key: "Alg 002", cat: "Algebra" },
        { key: "Alg 003", cat: "Algebra" },
        { key: "Sci 001", cat: "Science" },
        { key: "Sci 002", cat: "Science" },
        { key: "Hist 001", cat: "History" },
        { key: "Geo 001", cat: "Geometry" },
      ],
      selectedValues: [
        { key: "Option 1", cat: "Group 1" },
        { key: "Option 2", cat: "Group 1" },
      ],
    };
    this.style = {
      chips: {
        background: "red",
      },
      searchBox: {
        "margin-top": "10px",
        "margin-left": "10px",
        "min-height": "40px",
        width: "455px",
      },
      multiselectContainer: {
        height: "50px",
      },
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    this.selectedValues.push({ key: "Option 3", cat: "Group 1" });
  }

  render() {
    const { plainArray, objectArray, selectedValues } = this.state;
    return (
      <div className="App">
        <Multiselect
          options={objectArray}
          displayValue="key"
          groupBy="cat"
          showCheckbox={true}
          style={this.style}
          placeholder="Post To"
        />
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export default SelectMultiple;
