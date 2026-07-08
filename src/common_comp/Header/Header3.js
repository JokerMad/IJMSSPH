import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import top from "../../assests/top.png";

const Header3 = () => {
  const [show, setShow] = useState(false);
  const [searchText, setSearchText] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  // Handle search on Enter key press
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (searchText && e.key === "Enter") {
      // Navigate to the search results page with the query as a URL parameter
      navigate(`/search/${searchText}`);
      setSearchText("");
    }
  };

  // Handle key press for "Enter" key to trigger form submission
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e); // Call the handleSubmit function on Enter key
    }
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Ensures smooth scrolling
    });
    setShow(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        bg="white"
        variant="white"
        className="jab_navbar3_common_bgcolor  border-bottom"
      >
        <Container >
          <Navbar.Toggle onClick={handleShow} />
          <Navbar.Collapse id="basic-navbar-nav" className="d-lg-block ">
            <Nav className="me-auto">
              <Nav.Link
                to="/"
                as={Link}
                className="mx-2 "
                onClick={handleScrollToTop}
              >
                Home
              </Nav.Link>
              <NavDropdown
                title="About"
                id="basic-nav-dropdown-resources"
                className="mx-2"
              >
                <NavDropdown.Item
                  to="/about/Aim-and-scope"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Aim and Scope
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/about/Editorial-Board"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Editorial Board
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/about/Abstracting-and-Indexing"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Abstracting and Indexing
                </NavDropdown.Item>
                {/* <NavDropdown.Item to="/about/Editorial-Board" as={Link} onClick={handleScrollToTop}>
                Funding of APCs and BPCs
                </NavDropdown.Item> */}
                <NavDropdown.Item
                  to="/about/Article-Processing-Charge"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Article Processing Charge (APC)
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/about/Publication-Frequency"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Publication Frequency
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/about/Journal-Insights"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Journal Insights
                </NavDropdown.Item>
              </NavDropdown>

              {/* 
              <Nav.Link to=
                "/information/article-processing-charges/0-general-information-on-article-processing-charges-apc"
                as={Link} className="mx-2 " onClick={handleScrollToTop}>
                Article Processing Charges
              </Nav.Link> */}

              <NavDropdown
                title="Archives"
                id="basic-nav-dropdown-resources"
                className="mx-2"
              >
                <NavDropdown.Item
                  to="/current-issue"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Current Issue
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/issue-archive"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  All Archive
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="For Authors"
                id="basic-nav-dropdown-forauthor"
                className="mx-2"
              >
                <NavDropdown.Item
                  to="/information/for-authors/copyright-policy"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Copyright Policy
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/information/for-authors/publication-ethics"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Publication Ethics
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/information/for-authors/ai-policies"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  AI Policies
                </NavDropdown.Item>
                {/* ai-policies */}
                <NavDropdown.Item
                  to="/information/for-authors/guide-for-editor"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Guide for Editor
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/information/for-authors/guide-for-reviewer"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Guide for Reviewer
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/information/for-authors/open-access-archiving"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Open Access Archiving
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/information/for-authors/review-rocess"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Review Process
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/information/for-authors/plagiarism-policy"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Plagiarism Policy
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Special Issues"
                id="basic-nav-dropdown-forreviews"
                className="mx-2"
              >
                <NavDropdown.Item
                  to="/special-issues/About-Special-Issues"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  About Special Issues
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/special-issues/Propose-Special-Issue"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Propose Special Issue
                </NavDropdown.Item>
                <NavDropdown.Item
                  to="/special-issues/Open-Special-Issues"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Open Special Issues
                </NavDropdown.Item>

                <NavDropdown.Item
                  to="/special-issues/Published-Special-Issues"
                  as={Link}
                  onClick={handleScrollToTop}
                >
                  Published Special Issues
                </NavDropdown.Item>
              </NavDropdown>
            <Nav.Link
              to="/International-Services"
              as={Link}
              className="mx-2"
              onClick={handleScrollToTop}
            >
              International Services
            </Nav.Link>
            </Nav>
            <Nav>
              {/* Search Bar */}
              <Form className="d-flex my-1 mx-1" onSubmit={handleSubmit}>
                {" "}
                {/* Handle submit here */}
                <FormControl
                  type="search"
                  placeholder="Search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyPress={handleKeyPress} // Handle Enter key press
                  className="py-0 jab_searchbar"
                  aria-label="Search"
                />
              </Form>

              <Nav.Link
                to="/submit-article"
                as={Link}
                className=""
                onClick={handleScrollToTop}
              >
                Submit article
                <img src={top} alt="icon" width={15} className="mx-2" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Uncomment if implementing a mobile-specific navigation */}
      {/* <NavMobile show={show} handleClose={handleClose} handleScrollToTop={handleScrollToTop} /> */}
    </>
  );
};

export default Header3;
