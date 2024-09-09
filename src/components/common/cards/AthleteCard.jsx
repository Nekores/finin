import React from "react";
import { Button } from "../button/Button";
import "./athletecard.scss";

export default function AthleteCard(props) {
  const { imgPath, alt, style, name, company, status, classname, url } = props;
  return (
    <div
      className={`athlete-card-root ${classname}`}
      style={style}>
      <div className='_img-area'>
        <img
          src={imgPath}
          alt={alt}
          className='img-fluid'
        />
        {status?.toLowerCase() === "open" ? (
          <Button
            url={url}
            iconRight
            variant='filled'>
            Learn More
          </Button>
        ) : null}
      </div>
      <div className='_card-body'>
        <h3>{name} </h3>
        <h4 style={{ visibility: `${company ? "visible" : "hidden"}` }}>
          {company ? company : "..."}
        </h4>
        <p style={{ visibility: `${status ? "visible" : "hidden"}` }}>
          {status ? status : "..."}
        </p>
      </div>
    </div>
  );
}
