import React, { useEffect } from "react";
import Typography from "@/components/common/typography/Typography";
import { WorkCard, WorkCard2, WorkCard3 } from "@/components/common/cards/WorkCard";
import "./howitworks.scss";

export default function HowItWorks() {
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
    <section
      class='how-it-works py-5'
      id='howitworks'>
      <div class='container text-center'>
        <div className='row'>
          <div
            className='col-12 text-center'
            style={{ marginBottom: "20px" }}
            data-aos='zoom-in'
            data-aos-duration='600'
            data-aos-easing='ease-in-sine'>
            <Typography
              variant='sectionTitle'
              span='Works'
              desc='Together we are ushering in a new era for athletes & fans'>
              How Finlete
            </Typography>
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-sm-12 col-lg-12 col-xl-10 col-xxl-9'>
            <div className='row'>
              <div
                className='col-12 col-sm-6 col-md-6 col-lg-4'
                data-aos='zoom-in'
                data-aos-duration='300'
                data-aos-easing='ease-in-sine'>
                <WorkCard />
              </div>
              <div
                className='col-12 col-sm-6 col-md-6 col-lg-4'
                data-aos='zoom-in'
                data-aos-duration='400'
                data-aos-easing='ease-in-sine'>
                <WorkCard3 />
              </div>
              <div
                className='col-12 col-sm-6 col-md-6 col-lg-4'
                data-aos='zoom-in'
                data-aos-duration='500'
                data-aos-easing='ease-in-sine'>
                <WorkCard2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
