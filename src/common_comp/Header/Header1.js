import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css'
import { useNavigate } from "react-router-dom";
import { eraseCookie, getCookie } from "../../function";
import { useAuth } from "../../hooks/useAuth";
import { jwtDecode } from "jwt-decode";

const Header1 = () => {
  const { isAuthenticated } = useAuth();
  const [token, setToken] = useState(getCookie('token'));
  const decodedToken = token ? jwtDecode(token) : null;
  const navigate = useNavigate()

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const Navigation = (path) => {
    navigate(path)

  }
  const handleLogOut = () => {
    eraseCookie('token')
    window.location.reload();
  }
  return (
    <>

      <Navbar
        expand="lg"
        // sticky="top" 
        className="jab_navbar1_common_bgcolor"

      >
        <Container fluid>
          <Navbar.Collapse id="basic-navbar-nav1">
            <Nav className="ms-auto d-flex align-items-center">

            </Nav>
          </Navbar.Collapse>
        </Container>
        {
          !isAuthenticated ?
            <>
              <Button
                className="jab_nav_btn mx-3"
                onClick={() => { handleScrollToTop(); Navigation('/auth/register') }}

              >
                Register
              </Button>
              <Button
                className="jab_nav_btn1"
                onClick={() => { handleScrollToTop(); Navigation('/auth/login') }}

              >
                Login 
              </Button>
            </> :
            <Dropdown>
              <Dropdown.Toggle as={Button} className="base_background_color">
                {decodedToken?.user?.email}
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropItem" >
                <Dropdown.Item href="/author/articles">Author Panel</Dropdown.Item>
                <Dropdown.Item href="/author/article-submission">Submit Article</Dropdown.Item>
                <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        }


      </Navbar>
    </>
  );
};

export default Header1;
