"use client";
import React, { useState } from "react";
import Typography from "@/components/common/typography/Typography";
import Radio from "@/components/common/radio/Radio";
import AthleteCard from "@/components/common/cards/AthleteCard";
import "./athletes.scss";
import { mediaQuery } from "@/utils/mediaQuery";

const Athletes = () => {
  const { isXsDown } = mediaQuery();
  const [status, setStatus] = useState(0);

  const selectedLabel = RadioSchema.find((radio) => radio.id === status)?.label;

  const filteredSchema = schema.filter((item) => {
    if (selectedLabel === "All") return true;
    if (item.status) return item.status.toLowerCase() === selectedLabel.toLowerCase();
    return false;
  });

  return (
    <div id='athletes-section-root'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 section-heading-root'>
            <Typography variant='sectionTitle'>Athletes</Typography>
          </div>
          <div className='col-12 '>
            <div className='card_group'>
              {RadioSchema.length > 0 &&
                RadioSchema.map((item) => (
                  <Radio
                    key={item.id}
                    onchange={() => setStatus(item.id)}
                    checked={status === item.id}
                    label={item.label}
                    name={item.name}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className='row _list-card-root '>
          {filteredSchema.length > 0 ? (
            filteredSchema.map((item, index) => {
              return item?.noMobile && isXsDown ? null : (
                <div
                  className='col-sm-6 col-md-6 col-lg-3 align-self-center'
                  key={index}>
                  <AthleteCard {...item} />
                </div>
              );
            })
          ) : (
            <p>No athletes found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Athletes;

const schema = [
  {
    imgPath: "/img/athletes/v1.png",
    alt: "Emmanuel Clase Image",
    name: "Emmanuel Clase",
    company: "Cleveland Guardians (MLB)",
    status: "Open",
    url: "/details.html",
  },
  {
    imgPath: "/img/athletes/v2.png",
    alt: "Echedry Vargas Image",
    name: "Echedry Vargas",
    company: "Texas Rangers (Single-A)",
    status: "Closed",
  },
  {
    imgPath: "/img/athletes/v3.png",
    alt: "Image",
    name: "Coming Soon",
  },
  {
    imgPath: "/img/athletes/v4.png",
    alt: "Image",
    name: "Coming Soon",
    noMobile: true,
  },
  {
    imgPath: "/img/athletes/v5.png",
    alt: "Image",
    name: "Coming Soon",
    noMobile: true,
  },
  {
    imgPath: "/img/athletes/v6.png",
    alt: "Image",
    name: "Coming Soon",
    noMobile: true,
  },
  {
    imgPath: "/img/athletes/v7.png",
    alt: "Image",
    name: "Coming Soon",
    noMobile: true,
  },
  {
    imgPath: "/img/athletes/v8.png",
    alt: "Image",
    name: "Coming Soon",
    noMobile: true,
  },
];

const RadioSchema = [
  { id: 0, label: "All", name: "status" },
  { id: 1, label: "Open", name: "status" },
  { id: 2, label: "Closed", name: "status" },
  // { id: 3, label: "Waitlist", name: "status" },
];
