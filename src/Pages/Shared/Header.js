import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container className="">
          <Navbar.Brand as={Link} to="#home" className="text-warning">
            Car Meachanis
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home" className="text-success">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#survices" className="text-success">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#experts" className="text-success">
              Experts
            </Nav.Link>
            <Nav.Link as={HashLink} to="/register" className="text-success">
              Register
            </Nav.Link>
            {user?.email ? (
              <Button onClick={logOut} className="m-2" variant="light">Log out</Button>
            ) : (
              <Button  as={Link} to="/login" variant="light">Login</Button>
              )}
              <Navbar.Text>
                {user.displayName} 
              </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
