import React, { useContext } from "react";
import { GlobalAppContext } from "./../../index.js";

function IndexContent() {
  const { toggled, setToggled, hasBackground, setHasBackground } = useContext(
    GlobalAppContext
  );

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="form-group col-md-12">
          <h2> Student Dashboard</h2>
          <hr />
          <p>Filler Text</p>
          <hr />
          <button
            href="#/"
            class="btn btn-outline-secondary mr-1"
            onClick={() => setToggled(!toggled)}
          >
            Toggle Sidebar
          </button>
          <button
            href="#/"
            class="btn btn-secondary"
            onClick={() => setHasBackground(!hasBackground)}
          >
            Toggle Background Image
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndexContent;
