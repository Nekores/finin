import React from "react";
import "./radio.scss";

export default function Radio(props) {
  const { id, classname, inputStyle, rootStyle, name, label, value, checked, onchange } =
    props;
  return (
    <div
      className={`form-check form-check-inline _theme_radio ${classname}`}
      style={rootStyle}>
      <input
        className='form-check-input'
        type='radio'
        name={name}
        id={id}
        checked={checked}
        value={value}
        style={inputStyle}
      />
      {label ? (
        <label
          onClick={onchange}
          className='form-check-label'
          for={id}>
          {label}
        </label>
      ) : null}
    </div>
  );
}
