import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Benifits = () => {
  return (
    <Container>
      <h2 className="display-6 fw-bold my-4">Benefits for Peer-reviewers</h2>
      <hr />

      <p className="joab-common-para my-4">
        Peer-review is an essential part of the publication process, ensuring
        that high-quality standards for published papers are being maintained.
        Reviewing is often an unrewarded task but we strive for recognition of
        the efforts of peer-reviewers.
      </p>

      <h5 className="fw-bold mb-3">
        Benefits when you review for our journals:
      </h5>

    

      <ul className="mb-3 joab-common-para">
        <li className="mb-2">
          Receive a discount voucher code entitling you to a reduction in the
          article processing charge (APC) of a future submission to any of our
          journals. Vouchers can be claimed after you register your review
          activities on the{" "}
          <Link to="https://www.reviewercredits.com/">ReviewerCredits.com</Link>{" "}
          website. Vouchers issued to specific individuals are not transferable
          and must be mentioned during the submission procedure. Please note
          reviewer vouchers must be applied before acceptance. Vouchers can no
          longer be applied once an APC invoice has been issued.
        </li>
        <li className="mb-2">
          Can build your profile on{" "}
          <Link to="https://www.reviewercredits.com/">ReviewerCredits.com</Link>{" "}
          and have your reviewing activity automatically added for participating
          journals.
        </li>
      </ul>
    
    </Container>
  );
};

export default Benifits;
