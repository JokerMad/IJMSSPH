import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Dropdown,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Clientdash.css";
import { jwtDecode } from "jwt-decode";
import { eraseCookie, getCookie } from "../../function";

const ClientNav = () => {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(getCookie('token'));
  const decodedToken = token ? jwtDecode(token) : null;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Ensures smooth scrolling
    });
    setShow(false);
  };
const handleLogOut=()=>{
  eraseCookie('token')
  window.location.reload();
}
  return (
    <>
      <Navbar
        expand="lg"
        bg="white"
        variant="white"
        className=" jab_clientdash_nav border-bottom "
      >
        <Container fluid className="mx-lg-3 mx-0">
          <Navbar.Brand href="/">International journal of Medical science studies and Public Health.  </Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} />
          <Navbar.Collapse id="basic-navbar-nav" className="d-lg-block ">
            <Nav className="me-auto"></Nav>

            <Nav>
              <Nav.Link
                to="/"
                as={Link}
                className="mx-3 jab_client_articletable"
                onClick={handleScrollToTop}
              >
                Visit Website
              </Nav.Link>

              <Dropdown>
                <Dropdown.Toggle as={Button} className="base_background_color">
                  {decodedToken.user.email}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="/settings">Settings</Dropdown.Item> */}
                  <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Uncomment if implementing a mobile-specific navigation */}
      {/* <NavMobile show={show} handleClose={handleClose} handleScrollToTop={handleScrollToTop} /> */}
    </>
  );
};

export default ClientNav;
