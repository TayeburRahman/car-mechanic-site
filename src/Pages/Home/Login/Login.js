 
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  // user Reset Password STP.13.1 end
  //rgtr user email-password login Stp.11.2 end
  const {
    signinUsingGoogle,
    handleEmailChang,
    handlePasswordChang,
    toggoleLogin,
    handleRegistration,
    handelResetPassword
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";
  const hendlePasGoogleLogin = () => {
    signinUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-6 p-5 mb-5 form-login">
        <div className="mb-3 form text-left">
          <h3>Please Log In</h3>
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleEmailChang}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onBlur={handlePasswordChang}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            onChange={toggoleLogin}
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
          <a onClick={handelResetPassword} className="text-danger ps-3" href=""> I_forgot_my_password</a>
        </div>
        <Button
          onClick={handleRegistration}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </Button>
        <Button
          onClick={hendlePasGoogleLogin}
          type="submit"
          className="btn ms-4 btn-primary"
        >
          Google LogIn
        </Button>
      </div>
    </div>
  );
};

export default Login;
