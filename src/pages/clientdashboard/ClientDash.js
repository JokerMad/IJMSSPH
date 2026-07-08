import React, { useState } from "react";
import {  Col } from "react-bootstrap";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


const ClientDash = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" , overflowX :"hidden" }}>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        <Col lg={12} sm={12} xs={12} className="px-3 pt-3">
          <div
            style={{
              marginLeft: isOpen ? "250px" : "70px",
              transition: "margin-left 0.3s",
              
       
            
            }}
          >
            <h1>{children}</h1>
            {/* <div style={{height:"2000px"}}>hdccjd</div> */}
        
          </div>
        </Col>
      </div>
    </div>
  );
};

export default ClientDash;
