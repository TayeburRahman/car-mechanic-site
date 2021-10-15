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
          <Navbar.Brand as={Link} to="#home">
            Car Meachanis
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#survices">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#experts">
              Experts
            </Nav.Link>
            {user?.email ? (
              <Button onClick={logOut} className="m-2" variant="light">Log out</Button>
            ) : (
              <Button  as={Link} to="/login" onClick={logOut} variant="light">Login</Button>
              )}
              <Navbar.Text>
                Signed in as: <a href="/login">{user.displayName}</a>
              </Navbar.Text>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
