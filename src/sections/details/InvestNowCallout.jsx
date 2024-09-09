import React from "react";
import "./investnowcallout.scss";

export default function InvestNowCallout() {
  return (
    <div className='invest-now-callout-root'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='text-center _main-content'>
              <h2>
                Invest now
                <img
                  src='/img/details/investLogo.svg'
                  alt=''
                  className='_logo'
                />
              </h2>

              <img
                src='/img/details/investMock.svg'
                alt=''
              />

              <a href='https://app.dealmaker.tech/invitations/0204a440-ab43-44d1-87e5-98575c5bb6b0/view'>
                <button
                  class='subs_btn'
                  type='button'>
                  <img
                    src='/img/details/ic.svg'
                    alt='subscribe'
                  />
                  GET STARTED
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
