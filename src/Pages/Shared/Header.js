import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { HashLink } from "react-router-hash-link";
import { BsFillCartPlusFill } from "react-icons/bs";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container className="header-Container">
          <Navbar.Brand as={Link} to="#home" className="text-warning">
            Car Meachanis
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home" className="text-success">
              Home
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              to="/home#survices"
              className="text-success header-menu"
            >
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#experts" className="text-success">
              Experts
            </Nav.Link>
            <Nav.Link as={HashLink} to="/register" className="text-success">
              Register
            </Nav.Link>
            {user?.email ? (
              <Button onClick={logOut} className="m-2 me-5" variant="light">
                Log out
              </Button>
            ) : (
              <Button as={Link} to="/login" variant="light">
                Login
              </Button>
            )}
            <Navbar.Text>{user.displayName}</Navbar.Text>
            <Navbar.Brand className="header-cart d-flex">
            <h4 className="cart-icon">
                  <BsFillCartPlusFill />
                  <h6 className="cart-count">0</h6>
                </h4>
            </Navbar.Brand> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
