import React  from "react";
import { Alert, Col, Form, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import './resisrer.css'

const Register = () => {
  // Registration user Account in usFirebase STP.9.4 end
  const {handleEmailChang,handlePasswordChang, handleRegistration, error,handleFastNameChang,handleSecondNameChang}=useAuth()
 

  return (
    <div>
      <div className="row mt-5 mb-5"> 
    <h3>Places Registration Your Account</h3>
        <div className="col-md-4 col-sm-12"></div>
        <div className="col-md-6 col-sm-12">
          <Form className="resister-from p-4">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={handleEmailChang} type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onBlur={handlePasswordChang} type="password" placeholder="Password" required />
            </Form.Group>
            <Row className="resister-name">
            <Col>
              <Form.Control 
              onChange={handleFastNameChang}
              placeholder="First name"   />
            </Col>
            <Col>
              <Form.Control 
              onChange={handleSecondNameChang}
              placeholder="Last name" />
            </Col>
            </Row>
            <p className="mt-3">Already Resister <a href="/login" className="text-danger">Go-to-Login</a> </p>
            <button onClick={handleRegistration} className="btn btn-success"> Submit</button>
            {
                error?   <Alert className="mt-3" variant="warning">
                {error}
              </Alert> : <p></p>
                
            }
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
