import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Confidential = () => {
  return (
    <Container>
      <h2 className="display-6 fw-bold my-4">Confidentiality and Anonymity
      </h2>
      <hr />

      <p className="joab-common-para my-4">
      BSP journals operate only double-blind peer review. Reviewers should not reveal their identity to the authors, either in their comments or in peer-review reports submitted to the journal.
      </p>

      <p className="joab-common-para ">Review reports are considered confidential and will only be disclosed with the explicit permission of the reviewer.</p>

     
    </Container>
  );
};

export default Confidential;
