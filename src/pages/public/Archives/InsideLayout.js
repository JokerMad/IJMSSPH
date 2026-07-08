import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import Layout from "../../../common_comp/Layout/Layout";

export default function InsideLayout({ children }) {
  return (
   <Layout>
     <div className="py-5 lh max-w-container container flex-col-2">
      <BreadCrumbs />
      {children}
    </div>
   </Layout>
  );
}
