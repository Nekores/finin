import React from "react";
import styles from "./label.module.scss";

export default function Label(props) {
  const { children, style } = props;
  return (
    <span
      className={`${styles.labelStyle} label`}
      style={style}
      {...props}>
      {children}
    </span>
  );
}
