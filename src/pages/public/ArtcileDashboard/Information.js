import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


const Information = () => {
  return (
    <Container>
    <h2 className="display-6 fw-bold my-4">General Information on Article Processing Charges (APC)</h2>
    <hr />
    <p className="joab-common-para my-4">
    As with any other Gold open-access journal, Green Publication Publishing operates its journals through a processing and handling fee (Article Processing Charges) received from authors. The fee utilizes in meeting the maintenance charges of the respective journal. Green Publication publishes his <Link to="https://okkoramen.com" className="text-black fw-bold">Gold open-access journals</Link> under the  <Link to="https://creativecommons.org/licenses/by/4.0/" className="text-black fw-bold">Creative Commons (CC-BY)</Link>   license. This allows the scientific community and the general public unlimited access to these articles. But also to reuse the content freely on the condition that proper attribution is given to the original authors.
    </p>
    <p className="joab-common-para mb-3">
    To cover the cost of providing a high-quality publishing service and free access to all articles, authors pay a one-time APC. The APC must be paid for manuscripts accepted after the peer-review process is completed and the article is officially accepted for publication.
    </p>
    <p className="joab-common-para mb-3">
    There are no charges for rejected articles, no submission charges, and no additional charges based on the article length, number of figures or supplementary data. Green Publication published editorial articles (i.e. Editorials, Corrections, Additions, Retractions, Letters, Comments, etc.) without APC and are thus free of charge for authors.
    </p>


  </Container>
  );
};

export default Information;
