"use client";
import React, { useEffect } from "react";
import Typography from "@/components/common/typography/Typography";
import FeedCard from "@/components/common/cards/FeedCard";
import { mediaQuery } from "@/utils/mediaQuery";
import "./feed.scss";

const Feed = ({ feedSchema }) => {
  const { isXlDown, isMdDown, isXsDown } = mediaQuery();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure that the AOS library is only initialized on the client side
      const AOS = require("aos");
      AOS.init({
        // duration: 1000, // Set the animation duration
      });
    }
  }, []);
  return (
    <div id='feed-section-root'>
      <div className={`${isXlDown ? "container" : "container-fluid"}`}>
        <div className='row align-items-center'>
          <div
            className={isXlDown ? `col-xxl-12` : "col-xxl-6"}
            style={{
              display: "flex",
              justifyContent: `${isXlDown ? "start" : "center"}`,
              alignItems: "center",
            }}>
            <div style={{ marginTop: `${isXlDown ? "80px" : "0px"}` }}>
              <div
                // data-aos='zoom-in'
                data-aos-duration='300'
                data-aos-easing='ease-in-sine'>
                {" "}
                <Typography
                  style={{ textAlign: `${isXsDown ? "center" : "left"}` }}
                  variant='sectionTitle'
                  span='Finlete'
                  desc='We are not satisfied unless our athletes and fan-investors are happy.'>
                  Why People <br />
                  Love
                </Typography>
              </div>
            </div>
          </div>
          <div
            className={isXlDown ? `col-xxl-12` : "col-xxl-6"}
            style={{ paddingTop: `${isXlDown ? "20px" : "150px"}` }}>
            <div className='row justify-content-center'>
              <div className={isXlDown ? `col-xxl-12` : "col-xxl-11"}>
                <div className='row'>
                  {feedSchema?.length > 0 &&
                    feedSchema.map((item) => (
                      <div
                        className='col-12 col-sm-6 col-xl-4 d-flex mb-4'
                        // data-aos='zoom-in'
                        data-aos-duration='500'
                        data-aos-easing='ease-in-sine'>
                        <FeedCard
                          {...item}
                          key={item?.id}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;

const feedSchemaLocal = [
  {
    id: 0,
    desc: "As someone new to investing, Finlete made it easy and accessible.",
    name: "Michal Kowalczyk",
    date: "May 31,2024",
  },
  {
    id: 1,
    desc: "The platform is user-friendly and transparent.",
    name: "Richard B",
    date: "May 31,2024",
  },
  {
    id: 2,
    desc: "Investing in rising athletes through Finlete has been an incredible experience!",
    name: "Richard B",
    date: "May 31,2024",
  },
  {
    id: 3,
    desc: "As someone new to investing, Finlete made it easy and accessible.",
    name: "Richard B",
    date: "May 31,2024",
  },
  {
    id: 4,
    desc: "The platform is user-friendly and transparent.",
    name: "Richard B",
    date: "May 31,2024",
  },
  {
    id: 5,
    desc: "Investing in rising athletes through Finlete has been an incredible experience!",
    name: "Richard B",
    date: "May 31,2024",
  },
];
