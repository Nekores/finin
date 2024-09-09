import React from "react";
import "./footer.scss";

export default function Footer({ children }) {
  return (
    <footer id='footer-root'>
      <div className='_flying_callout'>
        <div className='row'>
          <div className='col-xl-6'>
            <h5>Join our text message update list</h5>
          </div>
          <div className='col-xl-6'>
            <form className='d-flex justify-content-center'>
              <div class='input-group'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Enter Phone Number'
                  aria-label="Recipient's username"
                  aria-describedby='button-addon2'
                />
                <button
                  class='form_btn'
                  type='button'
                  id='button-addon2'>
                  <img
                    src='/img/footer/ic.svg'
                    alt='logo'
                  />
                  subscribe
                </button>
                <small className='msg'>*Message and data rates may apply</small>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-lg-3 col-xl-5 mb-4'>
            <div className='f_brand_area'>
              <img
                src='/img/footer/flogo.svg'
                alt='Finlete'
                className='mb-4'
              />
              <div className='d-flex justify-content-center justify-content-md-start'>
                <a
                  href='https://x.com/finlete'
                  className='text-light me-3'>
                  <img
                    src='/img/footer/tw.svg'
                    alt='twitter'
                  />
                </a>
                <a
                  href='https:/facebook.com/finletepro'
                  className='text-light me-3'>
                  <img
                    src='/img/footer/fb.svg'
                    alt='facebook'
                  />
                </a>
                <a
                  href='https://instagram.com/finlete'
                  className='text-light'>
                  <img
                    src='/img/footer/insta.svg'
                    alt='insta'
                  />
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-12 col-lg-9 col-xl-7'>
            <div className='row'>
              {/* <div className='col-6 col-sm-4 col-md-4 col-lg-4 mb-3 '>
                <h6 className='text-uppercase _footer_title_style'>Company</h6>
                <ul className='list-unstyled _footer_vertical_list'>
                  <li>
                    <a
                      href='#'
                      className='text-light'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-light'>
                      Athletes
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-light'>
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-light'>
                      [HOLD]
                    </a>
                  </li>
                </ul>
              </div> */}

              <div className='col-6 col-sm-4 col-md-4 col-lg-4 mb-3'>
                <h6 className='text-uppercase _footer_title_style'>Links</h6>
                <ul className='list-unstyled _footer_vertical_list'>
                  <li>
                    <a
                      href='#'
                      className='text-light'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href='#athletes-section-root'
                      className='text-light'>
                      Athletes
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-light'>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-light'>
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </div>

              <div className='col-6 col-sm-4 col-md-4 col-lg-4 mb-3'>
                <h6 className='text-uppercase _footer_title_style'>Contact</h6>
                <ul className='list-unstyled _footer_vertical_list'>
                  <li>
                    <img
                      width={24}
                      src='/img/footer/1.png'
                      alt='email'
                    />
                    <a
                      href='mailto:info@finlete.com'
                      className='text-light'>
                      info@finlete.com
                    </a>
                  </li>
                  <li>
                    <img
                      width={24}
                      src='/img/footer/2.svg'
                      alt='phone'
                    />
                    <a
                      href='tel:+16193048900'
                      className='text-light'>
                      1-619-304-8900
                    </a>
                  </li>
                  <li className='text-light'>
                    <img
                      width={24}
                      src='/img/footer/3.svg'
                      alt='address'
                    />
                    <a
                      href='#'
                      className='text-light'>
                      350 10th Ave, Ste 1000, San Diego, CA 92101
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright_footer_text'>
        <p>Copyright 2024 &copy; Finlete Funding, Inc</p>
      </div>
      {children}
    </footer>
  );
}
