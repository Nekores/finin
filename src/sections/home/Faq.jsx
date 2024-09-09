import React from "react";
import { Button } from "@/components/common/button/Button";
import Typography from "@/components/common/typography/Typography";
import "./faq.scss";

export default function Faq({ faqSchema }) {
  return (
    <section id='faq-root'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Typography
              variant='sectionTitle'
              className='mb-4'>
              Frequently Asked Questions
            </Typography>
          </div>
          <div className='col-12'>
            <div
              class='accordion'
              id='accordionExample'>
              {faqSchema?.length > 0 &&
                faqSchema.map((item) => {
                  return (
                    <div class='accordion-item'>
                      <h2
                        class='accordion-header'
                        id={item?.secondId}>
                        <button
                          class='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target={`#${item?.id}`}
                          aria-expanded='false'
                          aria-controls={item?.id}>
                          {item?.title}
                        </button>
                      </h2>
                      <div
                        id={item?.id}
                        class={`accordion-collapse collapse ${
                          item.id === "faq1" ? "show" : ""
                        }`}
                        aria-labelledby={item?.secondId}
                        data-bs-parent='#accordionExample'>
                        <div class='accordion-body'>{item?.desc}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          {/* <div className='col-12 text-center'>
            <div className='load_more_btn'>
              <Button
                iconRight
                variant='outlined'>
                Load more
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
