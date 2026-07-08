import React from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import MostDownloaded from "./MostDownloaded";
import MostPopular from "./MostPopular";

const TabsComponent = () => {
  return (
    <Container className="py-5">
      <h3 className="text-dark mb-4">Articles</h3>

      <Tabs
        defaultActiveKey="download"
        id="controlled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="download" title="Most Downloaded">
          <MostDownloaded />
        </Tab>

        <Tab eventKey="popular" title="Most Popular">
        <MostPopular/>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default TabsComponent;
