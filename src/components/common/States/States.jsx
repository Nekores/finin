import React from "react";
import "./states.scss";
export default function States(props) {
  const { saves, era, whip, loading } = props;

  const schema = [
    {
      title: "Saves",
      value: saves,
    },
    {
      title: "ERA",
      value: era,
    },
    {
      title: "WHIP",
      value: whip,
    },
  ];
  return (
    <div
      className={"d-flex data-unit-root"}
      style={{ maxWidth: "552px" }}>
      {schema.length > 0 &&
        schema.map((item) => (
          <div>
            {item?.title ? <p className='text-muted'>{item.title}</p> : null}
            {loading ? (
              <div
                class='spinner-border'
                role='status'>
                <span class='visually-hidden'>Loading...</span>
              </div>
            ) : item?.value ? (
              <h2 className='display-4'>{Math.round(item.value * 100) / 100} </h2>
            ) : null}
          </div>
        ))}
    </div>
  );
}
