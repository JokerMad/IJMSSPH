import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../../common_comp/Layout/Layout";
import { Link } from "react-router-dom";

function Journalinfo() {
  return (
    <>
     <Layout>
     <Container className="my-5 px-3" >
     <h1 className="text-center my-5 fw-bold">Journal Information</h1>
     <Row className="g-5">
   
            <Col lg={10} md={10} sm={12} className="mx-auto">
          
              <p className="joab-common-para mb-4">
              The journal delivers essential scientific information in concise at-a-glance article formats (HTML and PDF). The journal provides (bio)analytical chemists with a platform for the publication of different scientific communications including; original research, review, editorial, expert opinion, application notes on the latest relevant developments, and improvements in the bioanalysis field.
              </p>
              <ul className="joab-common-para mb-4">
                <li className="mb-2"><span className="fw-bold">Abbrv:</span> J. Appl. Bioanal / <span className="fw-bold">eISSN:</span> 2405-710X</li>
                <li className="mb-2"><span className="fw-bold">Indexed in</span> Scopus, CAS Abstracts, DOAJ</li>
                <li className="mb-2"><span className="fw-bold">Journal Member of Committee on Publication Ethics (COPE):</span> (#15373)
                </li>
                <li className="mb-2"><span className="fw-bold">Scilit</span>: <Link to="https://www.scilit.net/sources/61631"> https://www.scilit.net/wcg/container_group/61631</Link>
                </li>
                <li className="mb-2"><span className="fw-bold">Frequency</span>: Continuous
                </li>
                <li className="mb-2"><span className="fw-bold">NLM ID</span>: 101709346 / <span className="fw-bold">OCLC</span>: 898200290
                </li>
                <li className="mb-2"><span className="fw-bold">Sherpa RoMEO</span>: <Link to="https://openpolicyfinder.jisc.ac.uk/id/publication/29870">https://v2.sherpa.ac.uk/id/publication/29870</Link> 
                </li>
                <li className="mb-2"><span className="fw-bold">Editorial Office </span>:   
                <a href="mailto:editor@journalofappliedbioanalysis.com"
                >(editor@journalofappliedbioanalysis.com)</a>

                </li>
              </ul>

              <h2 className=" fw-bold mb-4">Article Types   </h2>
              <p className="joab-common-para mb-3">
              Articles published include editorial, critical review, research, opinion, expert communication, rapid communication, and letters-to-the-editor. Manuscripts should properly present statistical treatment of the observed results. Relevant literature references should be cited by applying the journal reference style. Manuscripts will be submitted to a double-blind peer-review process by independent experts in the field of the manuscript’s subject.
              </p>
              
            

              
        
            </Col>

          </Row>
      </Container>
     </Layout>
    </>
  );
}

export default Journalinfo;
