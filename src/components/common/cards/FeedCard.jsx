import React from "react";
import "./feedcard.scss";

export default function FeedCard({ name, date, desc }) {
  function getInitials(fullName) {
    let nameArray = fullName.trim().split(" ");
    let initials =
      nameArray[0].charAt(0).toUpperCase() +
      nameArray[nameArray.length - 1].charAt(0).toUpperCase();
    return initials;
  }

  return (
    <div className='feed-card-root'>
      <div className='_card-body'>
        <p>{desc}</p>
      </div>
      <div className='_card-footer'>
        <span> {getInitials(name)}</span>
        <div>
          <h4>{name}</h4>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}
