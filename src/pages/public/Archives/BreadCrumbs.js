import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ROUTE from "../../../api-services/routes.config.json";
import styles from "./styles.module.css";

export default function BreadCrumbs() {
  const navigate = useNavigate();
  const location = useLocation();

  let pathname = location.pathname.split("/"); // Get the current pathname and split it

  // Define routes for navigation
  const route = [
    "",
    ROUTE.ARCHIVES,
    `${ROUTE.ARCHIVES}/${pathname?.[2]}/${pathname?.[3]}`,
    `${ROUTE.ARCHIVES}/${pathname?.[2]}/${pathname?.[3]}`,
  ];

  // Determine active breadcrumbs
  const getActivePathname = () => {
    if (pathname.length === 2) return [pathname[1]];
    else if (pathname.length === 4) return [pathname[2], pathname[3]];
    else return [pathname[4]];
  };

  return (
    <div className={styles.breadcrumbs_container}>
      {pathname.map(
        (path, index) =>
          path && (
            <p
              key={index}
              className={styles.breadcrumbs}
              onClick={() => route[index] && navigate(route[index])}
            >
              <span
                className={
                  getActivePathname().includes(path)
                    ? styles.active_breadcrumb
                    : ""
                }
              >
                {path}
              </span>
              {index !== pathname.length - 1 && " /"}
            </p>
          )
      )}
    </div>
  );
}
