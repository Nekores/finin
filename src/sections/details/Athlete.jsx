"use client";
import React, { useEffect } from "react";
import Typography from "@/components/common/typography/Typography";
import Label from "@/components/common/label/Label";
import States from "@/components/common/States/States";
import Lists from "@/components/list/Lists";
import { Button } from "@/components/common/button/Button";
import { mediaQuery } from "@/utils/mediaQuery";
import "./athlete.scss";
import VideoPlayer from "./common/VideoPlayer";

export default function Athlete(props) {
  const { data, loading } = props;
  const { isXsDown, isMdDown } = mediaQuery();

  const statesObj = {
    saves: (data && data[0]?.fields["2024 (saves)"]) || 0,
    era: (data && data[0]?.fields["2024 (ERA)"]) || 0,
    whip: (data && data[0]?.fields["2024 {WHIP}"]) || 0,
  };

  const data2024 = {
    team: "CLE",
    W: data && data[0]?.fields["2024 (Wins)"],
    L: data && data[0]?.fields["2024 (losses)"],
    ERA: data && data[0]?.fields["2024 (ERA)"],
    G: data && data[0]?.fields["2024 (games)"],
    SV: data && data[0]?.fields["2024 (saves)"],
    SVO: data && data[0]?.fields["2024 (SVO)"],
    IP: data && data[0]?.fields["2024 (IP)"],
    WHIP: data && data[0]?.fields["2024 {WHIP}"],
  };

  return (
    <section
      className='athlete-info'
      id={"athleteSection-detailspage"}>
      <div className='container my-5'>
        {console.log("aaaaa", data && data[0]?.fields)}
        <div
          className='row '
          style={{ position: "relative" }}>
          <div className='col-12 col-lg-10'>
            <div className='athlete_details_root'>
              <div>
                <Label
                  style={{
                    marginBottom: "25px",
                    display: "block",
                    maxWidth: "fit-content",
                  }}>
                  GET TO KNOW
                </Label>
                <Typography
                  style={{ marginBottom: "21px" }}
                  variant='sectionTitle'
                  span='Clase'>
                  Emmanuel
                </Typography>
              </div>
              {/* {isXsDown ? (
                <img
                  src='/img/athlete/clase-money-shot.png'
                  alt='Emmanuel Clase'
                  className='img-fluid rounded mb-4'
                />
              ) : null} */}
              <States
                {...statesObj}
                loading={loading}
              />

              <div className='row  more_details_style'>
                <div className='col-12  col-lg-7'>
                  <Lists schema={schema1} />
                </div>
                <div className='col-12 col-lg-5'>
                  <div className='d-flex gap-3 athlete_details_button_group flex-column'>
                    <Button
                      url='https://app.dealmaker.tech/invitations/0204a440-ab43-44d1-87e5-98575c5bb6b0/view'
                      iconRight
                      variant='filled'>
                      Invest now
                    </Button>
                    <Button
                      iconRight
                      variant='outlined'>
                      How it works
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col '>
                <div className='table_root'>
                  <table class='table table-hover text-center align-middle'>
                    <thead>
                      <tr>
                        <th
                          scope='col'
                          width='125'>
                          SEASON
                        </th>
                        <th scope='col'>TEAM</th>
                        <th scope='col'>W</th>
                        <th scope='col'>L</th>
                        <th scope='col'>ERA</th>
                        <th scope='col'>G</th>
                        <th scope='col'>SV</th>
                        <th scope='col'>SVO</th>
                        <th scope='col'>IP</th>
                        <th scope='col'>WHIP</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2019</td>
                        <td>TEX</td>
                        <td>2</td>
                        <td>3</td>
                        <td>2.31</td>
                        <td>2.1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>23.1</td>
                        <td>1.11</td>
                      </tr>
                      <tr>
                        <td>2021</td>
                        <td>CLE</td>
                        <td>4</td>
                        <td>5</td>
                        <td>1.29</td>
                        <td>71</td>
                        <td>24</td>
                        <td>22</td>
                        <td>69.2</td>
                        <td>0.96</td>
                      </tr>
                      <tr>
                        <td>2022</td>
                        <td>CLE</td>
                        <td>3</td>
                        <td>4</td>
                        <td>1.36</td>
                        <td>1.7</td>
                        <td>42</td>
                        <td>46</td>
                        <td>72.2</td>
                        <td>0.73</td>
                      </tr>
                      <tr>
                        <td>2023</td>
                        <td>CLE</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3.22</td>
                        <td>75</td>
                        <td>44</td>
                        <td>56</td>
                        <td>72.2</td>
                        <td>1.16</td>
                      </tr>
                      <tr>
                        <td>2024</td>
                        <td>{loading ? <Loader /> : data2024?.team}</td>
                        <td>{loading ? <Loader /> : data2024?.W}</td>
                        <td>{loading ? <Loader /> : data2024?.L}</td>
                        <td>{loading ? <Loader /> : data2024?.ERA}</td>
                        <td>{loading ? <Loader /> : data2024?.G}</td>
                        <td>{loading ? <Loader /> : data2024?.SV}</td>
                        <td>{loading ? <Loader /> : data2024?.SVO}</td>
                        <td>{loading ? <Loader /> : data2024?.IP}</td>
                        <td>{loading ? <Loader /> : data2024?.WHIP}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className='_table_source_text'> Source: MLB.com</p>
              </div>
            </div>
          </div>

          <div className='col-12 col-lg-2 text-center'>
            <img
              src='/img/details/sc1.png'
              alt='Emmanuel Clase'
              className='img-fluid p-a mb-4 img_player'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <VideoPlayer />
          </div>
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
    value: "Rio San Juan, DR",
  },
];

const Loader = () => {
  return (
    <div
      class='spinner-grow spinner-grow-sm'
      role='status'>
      <span class='visually-hidden'>Loading...</span>
    </div>
  );
};
