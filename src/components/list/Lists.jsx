import React from "react";
import "./lists.scss";

export default function Lists({ schema }) {
  return (
    <div className='lists_theme_v1'>
      {schema.length > 0 &&
        schema.map((item) => (
          <ul class='list-group list-group-horizontal'>
            {item?.title ? <li class='list-group-item'>{item?.title} </li> : null}
            {item?.value ? <li class='list-group-item'>{item?.value} </li> : null}
          </ul>
        ))}
    </div>
  );
}
