import React from "react";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PeerReview = () => {
  return (
    <Container>
      <h2 className="display-6 fw-bold my-4">Peer-review Report
      </h2>
      <hr />

      <p className="joab-common-para my-4">
      Peer-review reports should contain:</p>

  
      <ul className="mb-3 joab-common-para">
        <li className="mb-2">
      <span className="fw-bold">  A brief summary</span> (one short paragraph) outlining the aim of the paper and its main contributions.
        </li>
        <li className="mb-2">
       <span className="fw-bold"> Broad comments</span> highlighting areas of strength and weakness. These comments should be specific enough for authors to be able to respond.
        </li>
        <li className="mb-2">
     <span className="fw-bold">   Specific comments</span> referring to line numbers, tables or figures. Reviewers need not comment on formatting issues that do not obscure the meaning of the paper, as these will be addressed by editors.
        </li>
        
    
        
       
      </ul>
      <p className="joab-common-para fw-bold text-muted mb-4 ">
      More specific information about to what ethical behavior reviewers should adhere can be found in the COPE ethical guidelines for peer-reviewers or contact the editorial office/editor-in-chief.
      </p>

      <p className="joab-common-para mb-4 ">
      Download the COPE guidelines on ethical peer-review
      </p>
      <Button className="jab_commonbtn">Download</Button>

      
    </Container>
  );
};

export default PeerReview;
