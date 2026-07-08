import React from "react";
import { Link } from "react-router-dom"; // Use react-router-dom for navigation
import { Button } from "antd";
import styles from "./btnstyles.module.css"; // Ensure CSS module support is configured

export default function PrimaryButton({ children, link, params }) {
  console.log(link , params)
  return (
    <>
      {link ? (
        <Link
          to={link} // react-router-dom's equivalent for navigation
          className={styles.primary_btn}
          {...params}
        >
          {children}
        </Link>
      ) : (
        <Button
          className={styles.primary_btn}
          style={{ paddingBlock: 0 }}
          {...params}
        >
          {children}
        </Button>
      )}
    </>
  );
}

export function SecondaryButton({ link, children }) {
  return (
    <Link to={link} className={styles.secondary_btn}>
      {children}
    </Link>
  );
}
