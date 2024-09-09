"use client";
import React, { useEffect, useState } from "react";
import "./herostates.scss";
import { Button } from "@/components/common/button/Button";

export default function HeroStates() {
  // State to track the value of the range slider
  const [value, setValue] = useState(0);
  const [tooltipPosition, setTooltipPosition] = useState(10); // Tooltip position

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure that the AOS library is only initialized on the client side
      const AOS = require("aos");
      AOS.init({
        // duration: 1000, // Set the animation duration
      });
    }
  }, []);

  // Handler for updating the slider value
  const handleChange = (e) => {
    const sli = e.target;
    setValue(e.target.value);

    const sliderWidth = sli.offsetWidth;
    const thumbWidth = 20; // Should match the thumb width in CSS
    const offset = (value / sli.max) * (sliderWidth - thumbWidth);
    setTooltipPosition(offset + thumbWidth / 2); // Adjust to center the too
  };

  // Function to get the appropriate bonus percentage based on the value
  const getBonusPercentage = (val) => {
    if (val >= 396 && val < 1000) return 0;
    if (val >= 1000 && val < 2500) return 5;
    if (val >= 2500 && val < 5000) return 10;
    if (val >= 5000 && val < 10000) return 15;
    if (val >= 10000 && val < 50000) return 20;
    if (val >= 50000) return 25;
    return 0;
  };

  const bonusPercentage = getBonusPercentage(value);

  const shares = value / 12;
  const bonusShares = (bonusPercentage / 100) * value;
  return (
    <section className='_hero_states'>
      <div className='row gx-3'>
        <div className='col-lg-6 mb-3'>
          <div
            className='_left_states_area-root '
            data-aos='zoom-in'
             data-aos-duration='450'
            data-aos-easing='ease-in-sine'>
            <h2 className='text-white'>
              Reserve Today for up to <span className='_green'>25% Bonus </span>
              <span className='_white'>Shares</span>
            </h2>
            <div className='row gx-3'>
              <div className='col-md-6 mb-3'>
                <div className='_card_root _card_1'>
                  <p>
                    Reserve: <br />
                    <strong>$1,000 </strong> for<strong> 5% Bonus</strong>
                  </p>
                </div>
              </div>
              <div className='col-md-6 mb-3'>
                <div className='_card_root _card_2'>
                  <p>
                    Reserve:
                    <br /> <strong>$2,500 </strong> for<strong> 10% Bonus</strong>
                  </p>
                </div>
              </div>
              <div className='col-md-6 mb-3'>
                <div className='_card_root _card_3'>
                  <p>
                    Reserve: <br />
                    <strong>$5,000 </strong>for <strong> 15% Bonus</strong>
                  </p>
                </div>
              </div>
              <div className='col-md-6 mb-3'>
                <div className='_card_root _card_4'>
                  <p>
                    Reserve: <br /> <strong>$10,000 </strong>for
                    <strong> 20% Bonus</strong>
                  </p>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='_card_root _card_5 rounded '>
                  <p>
                    Reserve: <br /> <strong>$50,000+ </strong>for
                    <strong> 25% Bonus</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-6 mb-3'>
          <div className='_right_states_area-root h-100'>
            <div
              className=' _investment_cal_root'
              data-aos='zoom-in'
               data-aos-duration='300'
              data-aos-easing='ease-in-sine'>
              <h2>Investment Calculator </h2>
              <div className='d-flex justify-content-between text-white-50 mb-2 _bonus_list'>
                <span className={`${value >= 396 && value < 1000 ? "_active" : ""}`}>
                  {/* onClick={() => setValue(396)}> */}
                  0% Bonus
                </span>
                <span className={`${value >= 1000 && value < 2500 ? "_active" : ""}`}>
                  5% Bonus
                </span>
                <span className={`${value >= 2500 && value < 5000 ? "_active" : ""}`}>
                  10% Bonus
                </span>
                <span className={`${value >= 5000 && value < 10000 ? "_active" : ""}`}>
                  15% Bonus
                </span>
                <span className={`${value >= 10000 && value < 50000 ? "_active" : ""}`}>
                  20% Bonus
                </span>
                <span className={`${value >= 50000 ? "_active" : ""}`}>25% Bonus</span>
              </div>
              <div className='_form-range'>
                <input
                  type='range'
                  min='396'
                  max='50000'
                  value={value}
                  onChange={handleChange}
                />
                <span
                  className={"_tooltip"}
                  style={{ left: `${tooltipPosition}px` }}>
                  ${value}
                </span>
              </div>
              {/* <div className='d-flex justify-content-between _range_text_root'>
                <span>$396</span>

                <span>$50,000</span>
              </div> */}
            </div>

            <div
              className='_states_couter_root'
              data-aos='zoom-in'
              data-aos-easing='ease-in-sine'
              // data-aos-offset='500'
              data-aos-duration='400'>
              <div className='row '>
                <div className='col-md-7'>
                  <div className='row'>
                    <div className='col-4'>
                      <div className='_text'>
                        <h3>{Math.round(shares)}</h3>
                        <p>Shares</p>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='_text'>
                        <h3>{Math.round(bonusShares)}</h3>
                        <p>Bonus Shares</p>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='_text'>
                        <h3>{Math.round(shares + bonusShares)}</h3>

                        <p>Total Shares</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-5'>
                  <Button
                    iconRight
                    variant='filled'>
                    INVEST NOW
                  </Button>
                </div>
              </div>
            </div>

            <div className='row gx-3'>
              <div className='col-md-6 col-lg-12 col-xl-6'>
                <div className='_widget_root1'>
                  <div
                    className='_unlock-root text-white text-center'
                    data-aos='zoom-in'
                    data-aos-easing='ease-in-sine'
                    // data-aos-offset='500'
                    data-aos-duration='300'>
                    <h4 className='d-flex align-items-center justify-content-center'>
                      {bonusPercentage}%
                      <div>
                        <span>Bonus Shares</span> <br />
                        <span className='_unlocked'>UNLOCKED</span>
                      </div>
                    </h4>
                  </div>

                  <div
                    className='_perks-root text-white'
                    data-aos='zoom-in'
                    data-aos-easing='ease-in-sine'
                    // data-aos-offset='500'
                    data-aos-duration='400'>
                    <h5>Perks</h5>
                    <ul className='list-unstyled'>
                      <li> Signed Clase baseball card</li>
                      <li> Finlete merchandise bundle</li>
                      <li> Digital Clase stock certificate</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-12 col-xl-6'>
                <div
                  className='_logo_widget-root'
                  data-aos='zoom-in'
                  data-aos-easing='ease-in-sine'
                  // data-aos-offset='500'
                  data-aos-duration='500'>
                  <img
                    src='/img/details/investLogo.svg'
                    alt='logo'
                    width={230}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
