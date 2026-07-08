import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const ArticleProcess = () => {
  return (
    <Container>
        <h2 className="display-6 fw-bold my-4">
          When to apply for an APC Waiver?
        </h2>
        <hr />

        <p className="joab-common-para my-4">
          Applying for an APC is possible in certain circumstances. The APC
          waiver application will only be accepted for evaluation if the author
          uses the APC Waiver Application Form. APC waiver range from 25%
          (partial waiver) until 100% (full waiver) depending on the financial
          circumstances of the author(s) as explained below:
        </p>
        <ul className="joab-common-para">
          <li className="p-2">
            For scientists with limited financial funds (solely reserved for
            payment of publication fees), a (partial) waive of APC is possible
            when he/she can prove this financial limitation.
          </li>
          <li className="p-2">
            For low/middle-income countries a waive of the Article Processing
            Charge is principally always granted (50% or 100%).
          </li>
          </ul>

          <p className="joab-common-para my-4">
            To find out if an author is eligible for an APC waiver for his/her
            manuscript, Green Publication uses data from the gross national
            income (GNI) per capita defined by the World Bank to evaluate the
            gross income of the application.
          </p>
          <p className="joab-common-para my-2 ">
            Income classifications by GNI per capita are for the year 2021 as
            follows:
          </p>
          <ul>
            <li>
              <span>Lower-middle income : </span> $1,046 to $4,095
            </li>
            <li>
              <span>Upper middle income : </span> $4,096 to $12,695
            </li>
            <li>
              <span>High income : </span> $12,696 or more.
            </li>
          </ul>
      
      </Container>
  );
};

export default ArticleProcess;
