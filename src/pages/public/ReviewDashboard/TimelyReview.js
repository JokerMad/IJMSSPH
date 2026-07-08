import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TimelyReview = () => {
  return (
    <Container>
      <h2 className="display-6 fw-bold my-4">Timely Review Reports</h2>
      <hr />

      <p className="joab-common-para my-4">
        BSP aims to provide an efficient, high-quality and
        within-acceptable-time publishing service to authors and to the
        scientific community. We ask reviewers to assist by providing review
        reports in a timely manner. Please contact the editorial office if you
        require an extension to the review deadline.
      </p>
    </Container>
  );
};

export default TimelyReview;
