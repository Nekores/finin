import React from "react";
import Typography from "@/components/common/typography/Typography";
import "./peaceofmindv2.scss";

export default function PeacOfMindV2() {
  return (
    <div className='peace_of_mind_root_2'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 order-2 order-lg-1'>
            <div className='row g-4'>
              <div className='col-md-10'>
                <div className='section-title'>
                  <Typography
                    style={{ maxWidth: "500px", marginBottom: "21px" }}
                    variant='sectionTitle'
                    span='Of Mind'>
                    Peace
                  </Typography>
                  <p className='_desc'>
                    At Finlete, we prioritize security and transparency.
                    <br />
                    <br />
                    Our offerings are backed by DealMaker, the market-leading fundraising
                    technology platform that's powered over $2 billion in online capital
                    raises. DealMaker was built by leading capital markets lawyers to put
                    compliance first.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 order-1 order-lg-2 text-center'>
            <img
              src='/img/details/dealmaker.png'
              alt='dealmaker'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
