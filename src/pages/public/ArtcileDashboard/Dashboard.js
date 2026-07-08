import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route } from "react-router-dom";
import Layout from '../../../common_comp/Layout/Layout'
import Information from "./Information";
import ArticleProcess from "./ArticleProcess";
import Discount from "./Discount";
import Whenapc from "./Whenapc";
import Howapc from "./HowApc";
import ApcPolicy from "./ApcPolicy";

const Dashboard = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Ensures smooth scrolling
    });

  };

  return (
    <>
<Layout >
<Container fluid  > 
        <Row  >
         
        <Col
              lg={3} sm={12}
              style={{
                position: "sticky",
                top: 130,
                left: 0,
                height: "75vh",
                borderRight: "1px solid #dee2e6",
                padding: "2rem",
                zIndex: "900",
                overflow: "hidden",
              }}
            >
            <Nav className="flex-column">
              <Nav.Link
                as={Link}
                to="/information/article-processing-charges/0-general-information-on-article-processing-charges-apc"
                className="joab_common_navlink"
                onClick={handleScrollToTop}
              >
              
            General Information on Article Processing Charges (APC)
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/information/article-processing-charges/1-article-processing-charges-apc"
                className="joab_common_navlink"
                onClick={handleScrollToTop}
              >
          
              Article Processing Charges (APC)
              </Nav.Link>
              
              <Nav.Link
                as={Link}
                to="/information/article-processing-charges/2-apc-discounts-and-waivers"
                className="joab_common_navlink"
                onClick={handleScrollToTop}
              >
              
            APC Discount and Waivers 
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/information/article-processing-charges/3-when-to-apply-for-an-apc-waiver"
                className="joab_common_navlink"
                onClick={handleScrollToTop}
              >
                
              When to apply for an APC Waiver
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/information/article-processing-charges/4-how-to-apply-for-an-apc-discountwaiver"
                className="joab_common_navlink"
                onClick={handleScrollToTop}
              >
               
              How to apply for an APC Discount/Waiver 
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/information/article-processing-charges/5-apc-reimbursement-policy"
                className="joab_common_navlink"
                onClick={handleScrollToTop}
              >
              
                APC Reimbursement policy
              </Nav.Link>
            </Nav>
          </Col>

          {/* Main Content Area */}
          <Col
              lg={8} sm={12}
              style={{
                padding: "2rem",
                // height: "100vh",
                // overflowY: "auto",
              }}
          >
            <Routes>
              <Route
                path="/0-general-information-on-article-processing-charges-apc"
                element={<Information />}
              />
              <Route path="/1-article-processing-charges-apc" element={<ArticleProcess />} />
              <Route path="/2-apc-discounts-and-waivers" element={<Discount />} />
              <Route path="/3-when-to-apply-for-an-apc-waiver" element={<Whenapc />} />
              <Route path="/4-how-to-apply-for-an-apc-discountwaiver" element={<Howapc />} />
              <Route path="/5-apc-reimbursement-policy" element={<ApcPolicy />} />
            </Routes>
          </Col>
        </Row>
      </Container>
</Layout>
   
    </>
  );
};

export default Dashboard;
