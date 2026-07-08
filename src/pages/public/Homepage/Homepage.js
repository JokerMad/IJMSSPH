import React from "react";
import Layout from "../../../common_comp/Layout/Layout";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import './Homepage.css'
import TabsComponent from "./TabsComponent";

function Hero() {
  return (
    <>
     <Layout>
  <Section1/>
  <Section2/>
  <Section3/>
  {/* <TabsComponent/> */}
     </Layout>
    </>
  );
}

export default Hero;
