import React from "react";
import "./careerhl.scss";
import Typography from "@/components/common/typography/Typography";

export default function CareerHL() {
  return (
    <div className='tabv2_root'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-xl-4'>
            <div
              class='nav flex-column nav-pills me-3'
              id='v-pills-tab'
              role='tablist'
              aria-orientation='vertical'>
              <div className='_head'>
                <Typography
                  style={{ marginBottom: "21px" }}
                  variant='sectionTitle'>
                  Career Highlights
                </Typography>
              </div>
              <div className='_btn_group'>
                <button
                  class='nav-link active'
                  id='v-2020-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-2020'
                  type='button'
                  role='tab'
                  aria-controls='v-2020'
                  aria-selected='true'>
                  <p>2021 SEASON </p>
                  <img
                    src='/img/details/icon_user.svg'
                    alt='User icons'
                  />
                </button>
                <button
                  class='nav-link'
                  id='v-pills-2021-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-2021'
                  type='button'
                  role='tab'
                  aria-controls='v-pills-2021'
                  aria-selected='false'>
                  <p>2022 SEASON </p>

                  <img
                    src='/img/details/icon_user.svg'
                    alt='User icons'
                  />
                </button>
                <button
                  class='nav-link'
                  id='v-pills-2022-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-2022'
                  type='button'
                  role='tab'
                  aria-controls='v-pills-2022'
                  aria-selected='false'>
                  <p>2023 SEASON </p>
                  <img
                    src='/img/details/icon_user.svg'
                    alt='User icons'
                  />
                </button>
                <button
                  class='nav-link'
                  id='v-pills-2023-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-2023'
                  type='button'
                  role='tab'
                  aria-controls='v-pills-2023'
                  aria-selected='false'>
                  <p>2024 SEASON </p>

                  <img
                    src='/img/details/icon_user.svg'
                    alt='User icons'
                  />
                </button>
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-8'>
            <div
              class='tab-content'
              id='v-pills-tabContent'>
              <div
                class='tab-pane fade show active'
                id='v-2020'
                role='tabpanel'
                aria-labelledby='v-2020-tab'>
                <div className='_tab_content'>
                  <div>
                    <h5>2021 / On the Rise</h5>
                    <p>
                      After converting all six save opportunities in August and holding
                      opposing hitters to a .095 batting average, Clase was named AL
                      Reliever of the Month. In 2021, he had a 1.29 ERA in 69.2 innings
                      while compiling 24 saves in 29 opportunities. He finished fifth in
                      AL Rookie of the Year voting.
                    </p>
                  </div>
                  <img
                    src='/img/details/career/2021.png'
                    alt='Play'
                  />
                </div>
              </div>
              <div
                class='tab-pane fade'
                id='v-pills-2021'
                role='tabpanel'
                aria-labelledby='v-pills-2021-tab'>
                <div className='_tab_content'>
                  <div>
                    <h5>2022 / Breakout Season</h5>
                    <p>
                      Clase led MLB with 42 saves while recording a 1.36 ERA in 72.2
                      innings. He was named an All-Star for the first time in his career.
                      In the All-Star Game, he pitched the ninth inning for the American
                      League and struck out the side to get the save and secure a 3-2
                      victory. He also won the 2022 Mariano Rivera Award, an award given
                      to the best relief pitcher in the American League.
                    </p>
                  </div>
                  <img
                    src='/img/details/career/2022.png'
                    alt='Play'
                  />
                </div>
              </div>
              <div
                class='tab-pane fade'
                id='v-pills-2022'
                role='tabpanel'
                aria-labelledby='v-pills-2022-tab'>
                <div className='_tab_content'>
                  <div>
                    <h5>2023 / Saves Leader Again</h5>
                    <p>
                      Clase achieved a career high 44 saves, which led MLB for the second
                      consecutive season, tying an all-time MLB record. He recorded a 3.22
                      ERA in 72.2 innings. He was named an All-Star for the second season
                      in a row.
                    </p>
                  </div>
                  <img
                    src='/img/details/career/2023.png'
                    alt='Play'
                  />
                </div>
              </div>
              <div
                class='tab-pane fade'
                id='v-pills-2023'
                role='tabpanel'
                aria-labelledby='v-pills-2023-tab'>
                <div className='_tab_content'>
                  <div>
                    <h5> 2024 / Making History</h5>
                    <p>
                      Clase has a chance to become the first pitcher to ever lead MLB in
                      saves three seasons in a row. After being named to his third career
                      All-Star team, Clase threw a scoreless ninth inning for the American
                      League to get the save and secure a 5-3 victory. On August 30, 2024,
                      Clase recorded his 150th save for Cleveland, passing Cody Allen to
                      become the franchise's all-time save leader.
                    </p>
                  </div>
                  <img
                    src='/img/details/career/2024.png'
                    alt='Play'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
