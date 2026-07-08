import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Rating = () => {
  return (
    <Container>
      <h2 className="display-6 fw-bold ">Rating the Manuscript</h2>
      <hr />

      <p className="joab-common-para my-4">
      Please rate the following aspects of the manuscript:
      </p>

  
      <ul className="mb-3 joab-common-para">
        <li className="mb-2">
        Originality/Novelty: Is the question original and well defined? Do the results provide an advance in current knowledge?
        </li>
        <li className="mb-2">
        Significance: Are the results interpreted appropriately? Are they significant? Are all conclusions justified and supported by the results? Are hypotheses and speculations carefully identified as such?
        </li>
        <li className="mb-2">
        Quality of Presentation: Is the article written in an appropriate way? Are the data and analyses presented appropriately? Are the highest standards for the presentation of the results used?
        </li>
        <li className="mb-2">
        Scientific Soundness: is the study correctly designed and technically sound? Are the analyses performed with the highest technical standards? Are the data robust enough to draw the conclusions? Are the methods, tools, software, and reagents described with sufficient details to allow another researcher to reproduce the results?
        </li>
        <li className="mb-2">Interest to the Readers: Are the conclusions interesting for the readership of the Journal? Will the paper attract a wide readership, or be of interest only to a limited number of people? (please see the Aims and Scope of the journal)</li>
        <li className="mb-2">
        Overall Merit: Is there an overall benefit to publishing this work? Does the work provide an advance towards the current knowledge? Do the authors have addressed an important long-standing question with smart experiments?
        </li>
        <li className="mb-2">
        English Level: Is the English language appropriate and understandable?
        </li>
        
       
      </ul>

      <p className="joab-common-para mb-4">
      Manuscripts submitted to Betasciencepress Publishing journals should meet the following standards of publication ethics:
      </p>

      <ul className="mb-4 joab-common-para">
        <li className="mb-2">
        Manuscripts should only report results that have not been submitted or published before, even in part.
        </li>
        <li className="mb-2">
        Manuscripts must be original and should not reuse text from another source without appropriate citation
        </li>
        <li className="mb-2">
        For biological studies, the studies reported should have been carried out in accordance with generally accepted ethical research standards.
        </li>

      </ul>
      <p className="joab-common-para mb-4">
      If peer-reviewers become aware of such scientific misconduct or fraud, plagiarism or any other unethical behavior related to the manuscript, they should raise these concerns with the in-house editor immediately.


      </p>
    </Container>
  );
};

export default Rating;
