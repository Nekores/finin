import React, { useEffect } from "react";
import styles from "./typography.module.scss";

export default function Typography(props) {
  const { variant, children, span, style, desc } = props;

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure that the AOS library is only initialized on the client side
      const AOS = require("aos");
      AOS.init({
        duration: 1000, // Set the animation duration
      });
    }
  }, []);

  switch (variant) {
    case "mainTitle":
      return (
        <h1
          data-aos='fade-right'
          className={styles.mainTitle}
          style={style}>
          {children} {span ? <span> {span} </span> : null}
        </h1>
      );
    case "sectionTitle":
      return (
        <>
          <h2
            className={styles.sectionTitle}
            style={style}>
            {children}
            {span ? <span> {span} </span> : null}
          </h2>
          {desc ? <p class={`${styles.desc} desc_`}>{desc}</p> : null}
        </>
      );
    default:
      return <p> {children}</p>;
  }
}
