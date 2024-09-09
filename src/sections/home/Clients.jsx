"use client";
import React from "react";
import Slider from "react-slick";
import styles from "./clients.module.scss";

export default function Clients() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const logos = [
    "/img/clients/c1.png",
    "/img/clients/c2.png",
    "/img/clients/c3.png",
    "/img/clients/c1.png",
    "/img/clients/c4.png",
  ];

  return (
    <div className={styles.clients_section_root}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className={styles.slide}>
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className='img-fluid'
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
