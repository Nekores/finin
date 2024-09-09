import React from "react";
import "./peaceofmind.scss";
import Typography from "@/components/common/typography/Typography";

export default function PeacOfMind() {
  return (
    <div className='peace_of_mind_root'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9'>
            <div className='row g-4'>
              <div className='col-12'>
                <div className='section-title'>
                  <Typography
                    style={{ maxWidth: "500px", marginBottom: "21px" }}
                    variant='sectionTitle'
                    span='Of Mind'>
                    Peace
                  </Typography>
                  <p className='_desc'>
                    At Finlete, we prioritize the security of your investments. Our
                    platform utilizes cutting-edge technology to ensure that your
                    transactions are safe, & we work closely with athletes to establish
                    fair and transparent agreements.
                    <br />
                    <br />
                    Your financial and personal data is protected with the highest
                    standards of encryption and privacy protocols.
                  </p>
                </div>
              </div>

              {schema?.length > 0 &&
                schema.map((item) => {
                  return (
                    <div className='col-sm-6 col-xl-4 d-flex align-items-stretch flex-row'>
                      <div className='_card_root'>
                        <BoxCard
                          {...item}
                          class='h-100'
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BoxCard = (item) => {
  return (
    <div className={`box-card-root ${item?.class}`}>
      <img
        src={item?.img}
        alt='icon'
        height='83px'
      />
      <div className='_card_body'>
        <h4>{item?.title} </h4>
        <p> {item?.desc}</p>
      </div>
    </div>
  );
};

const schema = [
  {
    img: "/img/details/icons/1.svg",
    title: "Investment",
    desc: "Your investment are safe here",
  },
  {
    img: "/img/details/icons/2.svg",
    title: "Agreement",
    desc: "Transparency & fair agreements established",
  },
  {
    img: "/img/details/icons/3.svg",
    title: "Data Protection",
    desc: "Your financial & personal data are protected",
  },
];
