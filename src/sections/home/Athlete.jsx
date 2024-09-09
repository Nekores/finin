"use client";
import React from "react";
import Typography from "@/components/common/typography/Typography";
import Label from "@/components/common/label/Label";
import States from "@/components/common/States/States";
import Lists from "@/components/list/Lists";
import { Button } from "@/components/common/button/Button";
import { mediaQuery } from "@/utils/mediaQuery";
import "./athlete.scss";

export default function Athlete(props) {
  const { data, loading } = props;

  const statesObj = {
    saves: (data && data[0]?.fields["2024 (saves)"]) || 0,
    era: (data && data[0]?.fields["2024 (ERA)"]) || 0,
    whip: (data && data[0]?.fields["2024 {WHIP}"]) || 0,
  };
  const { isXsDown } = mediaQuery();
  return (
    <section
      className='athlete-info'
      id={"athleteSection"}>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='athlete_details_root'>
              <div>
                <Label
                  style={{
                    marginBottom: "25px",
                    display: "block",
                    maxWidth: "fit-content",
                  }}>
                  NEW ATHLETE
                </Label>
                <Typography
                  style={{ maxWidth: "400px", marginBottom: "21px" }}
                  variant='sectionTitle'
                  span='Clase'>
                  Emmanuel
                </Typography>
              </div>
              {isXsDown ? (
                <img
                  src='/img/athlete/clase-money-shot.png'
                  alt='Emmanuel Clase'
                  className='img-fluid rounded mb-4'
                />
              ) : null}
              <States
                {...statesObj}
                loading={loading}
              />
              <Lists schema={schema1} />
              <hr />
              <div className='row'>
                <div className='col-12 col-sm-6 more_details_style'>
                  <p>MLB All-Star (2022, 2024)</p>
                  <p>All-MLB (1st Team) (2022)</p>
                  <p>Alll-MLB (2nd Team) (2023)</p>
                </div>

                <div className='col-12 col-sm-6 more_details_style'>
                  <p>Mariano Rivera</p>
                  <p>Reliever of the Year (2022)</p>
                </div>
              </div>
              <div className='d-flex gap-3 athlete_details_button_group'>
                <Button
                  url={"/details.html"}
                  iconRight
                  variant='filled'>
                  learn more
                </Button>
                <Button
                  iconRight
                  variant='outlined'>
                  How it works
                </Button>
              </div>
            </div>
          </div>
          {!isXsDown ? (
            <div className='col-12 col-md-6 text-center'>
              <img
                src='/img/athlete/clase-money-shot.png'
                alt='Emmanuel Clase'
                className='img-fluid rounded mb-4'
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

const schema1 = [
  {
    title: "Team: ",
    value: "Cleveland Guardians",
  },
  {
    title: "Position: ",
    value: "Relief Pitcher",
  },
  {
    title: "Height/Weight: ",
    value: "6' 2, 206 lbs",
  },
  {
    title: "Birthdate: ",
    value: "3/18/1998 (26)",
  },
  {
    title: "Birthplace: ",
    value: "Rio San Juan, Dominican Republic",
  },
];
