"use client";
import React, { useEffect } from "react";
import Nav from "@/components/common/navbar/Nav";
import { Button } from "@/components/common/button/Button";
import Textbox1 from "@/components/common/textBox/Textbox";
import Label from "@/components/common/label/Label";
import { mediaQuery } from "@/utils/mediaQuery";
import "./hero.scss";
import HeroStates from "./common/HeroStates";

export default function Hero() {
  const { isMdDown } = mediaQuery();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure that the AOS library is only initialized on the client side
      const AOS = require("aos");
      AOS.init({
        duration: 1000, // Set the animation duration
      });
    }
  }, []);

  return (
    <header className='hero-section-details-page-root text-white'>
      <Nav linkList={linkList} />
      <div className='container hero_container'>
        <div className='row'>
          <div className='col col-sm-12 col-xl-4'>
            <div className='hero-text'>
              {isMdDown && (
                <div className='hero-image'>
                  <img
                    src='/img/details/heroPic.png'
                    alt='Athlete Image'
                  />
                  <div className='_fly_text'>
                    <h4>
                      <span> $12</span> per share
                    </h4>
                    <h4>
                      Up to <span>3%</span> of future MLB earnings starting in 2025
                    </h4>
                    <h4>
                      Invest in <span> 3 minutes</span>
                    </h4>
                    <h4>
                      Receive dividends twice per year starting in <span> 2025</span>
                    </h4>
                  </div>
                </div>
              )}
              <Label
                style={{
                  marginBottom: "25px",
                  display: "block",
                  maxWidth: "fit-content",
                }}
                data-aos='zoom-out-right'
                data-aos-easing='ease-in-sine'>
                NEW
              </Label>
              <h1
                className='display-3'
                data-aos='zoom-out-right'
                data-aos-easing='ease-in-sine'
                data-aos-anchor-placement='top-bottom'>
                Emmanuel <span className='text-clr-green'>Clase</span>
              </h1>
              <p
                className='lead'
                data-aos='zoom-out-right'
                data-aos-easing='ease-in-sine'>
                Buy a stake in his future earnings today to share in his journey both
                emotionally and financially.
              </p>
              <div
                className='d-flex flex-column'
                style={{ maxWidth: "254px" }}
                data-aos='zoom-out-right'
                data-aos-easing='ease-in-sine'>
                <Button
                  url='https://app.dealmaker.tech/invitations/0204a440-ab43-44d1-87e5-98575c5bb6b0/view'
                  iconRight
                  variant='outlined'
                  icon={
                    <img
                      className='arrowRightStyle'
                      src='/img/howitworks/icon2.svg'
                      alt=''
                    />
                  }>
                  Invest now
                </Button>
                <Button
                  iconRight
                  variant='filled'>
                  how it works
                </Button>
              </div>
            </div>
          </div>
          {!isMdDown && (
            <div className='col col-sm-12 col-xl-8 mb-hidden_'>
              <div
                className='hero-image'
                data-aos='fade-up'
                data-aos-easing='ease-in-sine'>
                <img
                  src='/img/details/heroPic.png'
                  alt='Athlete Image'
                />
                <div
                  className='_fly_text'
                  data-aos='zoom-out-left'
                  data-aos-easing='ease-in-sine'>
                  <h4>
                    <span> $12</span> per share
                  </h4>
                  <h4>
                    Up to <span>3%</span> of future MLB earnings starting in 2025
                  </h4>
                  <h4>
                    Invest in <span> 3 minutes</span>
                  </h4>
                  <h4>
                    Receive dividends twice per year starting in <span> 2025</span>
                  </h4>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 p-r _wrapper_'>
            <div className='row w-100'>
              {textBoxSchema.length > 0 &&
                textBoxSchema.map((item) => (
                  <div
                    key={item.id}
                    className='col-6 col-sm-6 col-md-4 col-xl-4 col-xxl d-flex align-items-stretch'
                    data-aos='fade-up'
                    data-aos-easing='ease-in-sine'>
                    <Textbox1 {...item} />
                  </div>
                ))}
            </div>
            <HeroStates />
          </div>
        </div>
      </div>
    </header>
  );
}

const textBoxSchema = [
  {
    id: 0,
    price: "$12",
    desc: " Share Price",
  },
  { id: 1, price: "300,000", desc: " Total Shares" },
  {
    id: 2,
    price: "$10,000",
    desc: " Target Raise",
  },
  { id: 3, price: "$3,600,000", desc: " Maximum Raise" },
  { id: 4, price: "3%", desc: "Max. Player Earnings" },
];

const linkList = [{ id: 1, name: "FAQ", url: "#faq-root" }];
