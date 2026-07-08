import React, { useState, useEffect } from "react";
import { Navbar, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import logo from "../../assests/logo1.jpeg";

const Header2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Set threshold to detect scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" sticky="top" className="jab_navbar2_common_bgcolor mb-0">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center w-100">
          {!isScrolled && (
            <Image
              src={logo}
              alt="Logo"
              className="jab_img_logo d-none d-md-block"
            />
          )}
          <h1
            className={`jab_logo_name  display-4 ${
              isScrolled ? "text-center mx-auto" : ""
            }`}
            style={{
              "transition": "all 0.3s ease", // Smooth transition
              "font-size": "33px"
            }}
          >
            International journal of Medical science studies and Public Health.
          </h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header2;
