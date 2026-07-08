import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const ApcPolicy = () => {
  return (
    <Container>
    <h2 className="display-6 fw-bold my-4">
    APC Reimbursement policy
    </h2>
    <hr />
   
      <p className="joab-common-para my-2 ">
      No refund or credit will be offered in the following circumstances:
      </p>
      <ul>
        <li>
          <span>Article retraction: </span>Green Publication has provided publishing services leading to the official publication of the article. The later retraction of the article due to scientific misconduct does not result in the reimbursement of the APC.
        </li>
        <li>
          <span> Delays in editorial decisions or author changes: </span> Editorial decisions or author changes are part of the publishing process and are not eligible for APC reimbursement.
        </li>
        <li>
          <span>Circumstances beyond our control: </span> This may include situations where for example Green Publication is limited from fulfilling our obligations in for example natural disasters or wars.
        </li>
      </ul>

  </Container>
  );
};

export default ApcPolicy;
