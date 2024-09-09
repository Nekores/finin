"use client";
import React from "react";
import Nav from "@/components/common/navbar/Nav";
import { Button } from "@/components/common/button/Button";
import { mediaQuery } from "@/utils/mediaQuery";
import "./hero.scss";

export default function Hero() {
  const { isMdDown } = mediaQuery();
  return (
    <header class='hero-section text-white'>
      <Nav linkList={linkList} />
      <div class='container py-5'>
        <div class='row justify-content-center align-items-center'>
          <div class='col col-lg-6'>
            <div class='hero-text'>
              <h1 class='display-3'>
                Be more <br />
                than a fan, <br />
                be an <span class='text-clr-green'>investor</span>
              </h1>
              <Button
                url={"/details.html"}
                iconRight
                variant='filled'>
                View Clase Deal
              </Button>
              <p class='lead'>
                <span> Now everyone can invest in sports. </span> Buy a stake in the
                future
                {isMdDown ? " " : <br />} earnings of a real athlete today and share in
                their journey
                {isMdDown ? " " : <br />}
                both emotionally and financially.
              </p>
            </div>
          </div>
          <div class='col col-lg-6'>
            <div class='hero-image'>
              <img
                src='/img/hero/mock1.png'
                alt='Athlete Image'
                class='img-fluid'
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
const linkList = [
  { id: 0, name: "Athletes", url: "#athletes-section-root" },
  { id: 1, name: "FAQ", url: "#faq-root" },
];
