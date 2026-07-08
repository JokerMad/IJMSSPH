import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContactUs.css";
import Layout from "../../../common_comp/Layout/Layout";
import bg from "../../../assests/bg.png";

const ContactUs = () => {
  return (
    <Layout>
      <div
        className="contact-bg"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={9} className="contact-content">
              <h1 className="contact-title text-center">Contact Us</h1>

              {/* Founder Section */}
              <div className="contact-section">
                <h4>Founder & Director</h4>
                <p><strong>Dr. Roshan Bhaladhare</strong></p>
                <p>Founder & Director, Medico-Healthcare International</p>
                <p>
                  Editor-in-Chief,<br />
                  International journal of Medical science studies and Public Health.
                </p>
              </div>

              <hr />

              {/* Consultants Section */}
              <div className="contact-section">
                <h4>Consultants & Academic Advisors</h4>

                <p>
                  <strong>Dr. Prof. Dnyanesh Madhukar Belekar</strong><br />
                  Dean, Post Graduate Institute of Medical Sciences (PGIMS)<br />
                  Navi Mumbai Municipal Corporation, India<br />
                  📧 dnyanesh1475@gmail.com
                </p>

                <p>
                  <strong>Dr. Sangram Jadhav</strong><br />
                  Surgeon, Professor, Administrator & Entrepreneur<br />
                  Expert – Medical Education<br />
                  📧 drsangramjadhav@gmail.com
                </p>

                <p>
                  <strong>Dr. Shrikrishna Dhale</strong><br />
                  Faculty, Symbiosis International (Deemed University), Pune<br />
                  Head – Healthcare Pharmacology<br />
                  📧 shrikrishna.dhale@sihs.edu.in
                </p>

                <p>
                  <strong>Dr. Mangesh Jabade</strong><br />
                  Assistant Professor, Symbiosis College of Nursing (SCON)<br />
                  Expert – DNB Education<br />
                  📧 mangesh@scon.edu.in
                </p>
              </div>

              <hr />

              {/* Editorial Team */}
              {/* <div className="contact-section">
                <p>
                  <strong>Vaishvi Gupta</strong><br />
                  Founder – academic sphere publication<br />
                  Associate Consultant – Medico-Healthcare International<br />
                  Associate Editor – International journal of Medical science studies and Public Health.<br />
                  📧 vaishvi.3104@gmail.com
                </p>

                <p>
                  <strong>Harshit Chaturvedi</strong><br />
                  Co-founder – academic sphere publication<br />
                  Associate Consultant – Medico-Healthcare International<br />
                  Associate Editor – International journal of Medical science studies and Public Health.<br />
                  📧 Harshitchaturvedi07@gmail.com 
                </p>
              </div> */}

              <hr />

              {/* Contact Info */}
              <div className="contact-section">
                <h4>Contact Information</h4>
                <p><strong>Medico-Healthcare International</strong></p>
                <p>📍 India</p>
                <p>📧 Email: roshanbhaladhare3@gmail.com</p>
                <p>📞 Contact: +91 9834735221, +91 97637 04974</p>
              </div>

            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default ContactUs;
