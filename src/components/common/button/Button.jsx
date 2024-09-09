import React from "react";
import "./button.scss";

export function Button(props) {
  const { children, iconRight, url, styling, variant, icon } = props;
  return (
    <a
      style={styling}
      href={url}
      className={`btn ${
        variant === "filled"
          ? "btn btn-fill"
          : variant === "outlined"
          ? "btn-outline"
          : "simple"
      }`}
      {...props}>
      {children}
      {iconRight
        ? [
            icon ? (
              icon
            ) : (
              <img
                className='arrowRightStyle'
                src='/img/icons/arrowr.svg'
                alt=''
              />
            ),
          ]
        : null}
    </a>
  );
}

export function SignInButton(props) {
  const { children, iconRight, url, styling } = props;
  return (
    <a
      style={styling}
      href={url}
      className={"btn-nav_"}>
      <img
        src='/img/nav/userIcon.svg'
        alt=''
      />
      {children}
    </a>
  );
}
