 
import React from "react";
import { Button} from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import './Login.css'

const Login = () => {
  const {signinUsingGoogle} = useAuth();
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
      <div className="col-md-4">
      </div>
      <div className="col-md-6 p-4 form-login">
          <div className="mb-3 form text-left">
            <h3>Please Log In</h3>
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <Button onClick={hendlePasGoogleLogin} type="submit" className="btn btn-primary">
            Submit
          </Button>
         
      </div>
    </div>
  );
};

export default Login;
