"use client";
import React, { useState } from "react";
import "./workcard.scss";
import { Button } from "../button/Button";

export function WorkCard() {
  const [count, setCount] = useState(40.0);
  return (
    <div id='workcardRoot'>
      <h3 className='workCard_title_root'>
        <span>01</span> Buy <br />
        shares
      </h3>
      <div class='card mt-3 border-0'>
        <img
          src='/img/howitworks/a1.png'
          class='card-img-top rounded'
          alt='Buy shares'
        />
        <div class='card-body'>
          <div class='d-flex justify-content-center'>
            <div>
              <p class='_amount'>
                <img
                  src='/img/howitworks/minus.svg'
                  alt='minus'
                  className='_minus'
                  onClick={() => {
                    if (count >= 10) {
                      setCount(count - 10);
                    }
                  }}
                />

                {count}
                {count >= 100 ? "" : null}
                <img
                  className='_plus'
                  src='/img/howitworks/plus.svg'
                  alt='plus'
                  onClick={() => {
                    if (count >= 0) {
                      setCount(count + 10);
                    }
                  }}
                />
              </p>
              <p class='_amount_title'>Shares</p>
              <Button
                styling={{ visibility: "hidden" }}
                onClick={() => alert(`Shares are ${count}`)}
                iconRight
                variant='outlined'
                icon={
                  <img
                    className='arrowRightStyle'
                    src='/img/howitworks/icon2.svg'
                    alt=''
                  />
                }>
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkCard1() {
  const [count, setCount] = useState(40.0);
  return (
    <div id='workcardRoot1'>
      <h3 className='workCard_title_root'>
        <span>02</span> Join their <br />
        journey
      </h3>
      <div class='card mt-3 border-0'>
        <div class='card-body'>
          <div className='d-flex justify-content-between'>
            <img
              src='/img/howitworks/card2L.svg'
              alt=''
            />
            <img
              src='/img/howitworks/card2R.svg'
              alt=''
            />
          </div>
          <div className='d-flex bottom_area_'>
            <img
              src='/img/howitworks/reactions.png'
              alt=''
            />
            <img
              src='/img/howitworks/hearts.svg'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkCard2() {
  const [count, setCount] = useState(40.0);
  return (
    <div id='workCardRoot2'>
      <h3 className='workCard_title_root'>
        <span>03</span> Share in <br />
        their success
      </h3>
      <div class='card mt-3 border-0'>
        <div className='_img_'>
          <img
            src='/img/conf.png'
            alt='conf'
          />
        </div>
        <div class='card-body'>
          <div className='d-flex justify-content-between you_got_paid'>
            <h4> you got paid</h4>
          </div>
          <Button
            styling={{ visibility: "hidden" }}
            onClick={() => alert(`Clicked Check balance`)}
            iconRight
            variant='outlined'
            icon={
              <img
                className='arrowRightStyle'
                src='/img/howitworks/icon1.svg'
                alt=''
              />
            }>
            Check Balance
          </Button>
        </div>
      </div>
    </div>
  );
}

export function WorkCard3() {
  return (
    <div id='workcardRoot3'>
      <h3 className='workCard_title_root'>
        <span>02</span> Join their <br />
        journey
      </h3>
      <div class='card mt-3 border-0'>
        <div class='card-body'>
          <div className='_fly_text'>
            <img
              src='/img/howitworks/insta.svg'
              alt='insta'
            />
            <h4>Instagram Live with</h4>
            <h3>Emmanuel Clase</h3>
            <h5>Starts in 2 minutes</h5>
          </div>
          <div className='_root-Card'></div>
        </div>
      </div>
      <Button
        styling={{ visibility: "hidden" }}
        onClick={() => alert(`Clicked Check balance`)}
        iconRight
        variant='outlined'
        icon={
          <img
            className='arrowRightStyle'
            src='/img/howitworks/icon1.svg'
            alt=''
          />
        }>
        go live now
      </Button>
    </div>
  );
}
