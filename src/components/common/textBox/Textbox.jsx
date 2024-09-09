import React from "react";
import "./textbox.scss";

export default function Textbox1(props) {
  const { price, desc } = props;
  return (
    <div className='textBox_1_Root'>
      <h4> {price}</h4>
      <p>{desc}</p>
    </div>
  );
}
