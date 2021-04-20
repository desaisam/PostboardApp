import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./../styles/styles.scss";
import "./../styles/components/Login.css";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

const contentStyle = {
  maxWidth: "600px",
  width: "90%",
};

const LoginPopup = () => {
  const history = useHistory();
  return (
    <div className="box-layout__box-login">
      <div className="box-layout__login">
        <h1 className="box-layout__title">Postboard</h1>
        <p>Welcome, are you a Student or a Teacher?</p>
        <Popup
          trigger={<button className="button">Student</button>}
          modal
          contentStyle={contentStyle}
        >
          {(close) => (
            <div className="modal">
              <a className="close" onClick={close}>
                &times;
              </a>
              <div className="header">Student Login</div>
              <div className="content">
                <form onSubmit={() => history.push("/student")}>
                  <label className="loginform">
                    Username:
                    <input type="text" />
                  </label>
                  <label className="loginform">
                    Password:
                    <input type="password" />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          )}
        </Popup>
        <Popup
          trigger={<button className="button">Teacher</button>}
          modal
          contentStyle={contentStyle}
        >
          {(close) => (
            <div className="modal">
              <a className="close" onClick={close}>
                &times;
              </a>
              <div className="header">Teacher Login</div>
              <div className="content">
                <form onSubmit={() => history.push("/teacher")}>
                  <label className="loginform">
                    Username:
                    <input type="text" />
                  </label>
                  <label className="loginform">
                    Password:
                    <input type="password" />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};
export default withRouter(LoginPopup);
