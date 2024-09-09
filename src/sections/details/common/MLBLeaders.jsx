import React from "react";
import "./mlbleaders.scss";
import Typography from "@/components/common/typography/Typography";

export default function MLBLeaders() {
  return (
    <div className='tabv1_root'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-xl-4'>
            <div
              class='nav flex-column nav-pills me-3'
              id='v-pills-tab'
              role='tablist'
              aria-orientation='vertical'>
              <div className='_head'>
                <h4> 2024</h4>
                <Typography
                  style={{ marginBottom: "21px" }}
                  variant='sectionTitle'>
                  MLB Leaders
                </Typography>
              </div>
              <div className='_btn_group'>
                <button
                  class='nav-link active'
                  id='v-pills-saves-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-saves'
                  type='button'
                  role='tab'
                  aria-controls='v-pills-saves'
                  aria-selected='true'>
                  <p>SAVES</p>
                  <img
                    src='/img/details/icon_user.svg'
                    alt='User icons'
                  />
                </button>
                <button
                  class='nav-link'
                  id='v-pills-era-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-era'
                  type='button'
                  role='tab'
                  aria-controls='v-pills-era'
                  aria-selected='false'>
                  <p>ERA</p>

                  <img
                    src='/img/details/icon_user.svg'
                    alt='User icons'
                  />
                </button>
                <button
                  class='nav-link'
                  id='v-pills-whip-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-whip'
                  type='button'
                  role='tab'
                  aria-controls='v-pills-whip'
                  aria-selected='false'>
                  <p>WHIP</p>
                  <img
                    src='/img/details/icon_user.svg'
                    alt='User icons'
                  />
                </button>
                <button
                  class='nav-link'
                  id='v-pills-hits-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#v-pills-hits'
                  type='button'
                  role='tab'
                  aria-controls='v-pills-hits'
                  aria-selected='false'>
                  <p>HITS ALLOWED</p>

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
                id='v-pills-saves'
                role='tabpanel'
                aria-labelledby='v-pills-saves-tab'>
                <div className='_tab_content'>
                  <img
                    src='/img/details/ls.png'
                    alt='Play'
                  />
                  <div>
                    <h5>Saves</h5>
                    <p>
                      A “Save” is credited to a pitcher who finishes a game for the
                      winning team under certain circumstances. A save can be earned by
                      entering a game in which the team is leading by three (3) or fewer
                      runs and finishing the game by pitching at least one (1) inning
                      without losing the lead; entering the game with the tying run in the
                      on-deck circle, at the plate or on the bases and finishing the game;
                      or by pitching at least three (3) innings in relief and finishing
                      the game regardless of how many runs the team was winning by when
                      entering the game.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class='tab-pane fade'
                id='v-pills-era'
                role='tabpanel'
                aria-labelledby='v-pills-era-tab'>
                <div className='_tab_content'>
                  <img
                    src='/img/details/ls.png'
                    alt='Play'
                  />
                  <div>
                    <h5>Testing</h5>
                    <p>
                      A “Save” is credited to a pitcher who finishes a game for the
                      winning team under certain circumstances. A save can be earned by
                      entering a game in which the team is leading by three (3) or fewer
                      runs and finishing the game by pitching at least one (1) inning
                      without losing the lead; entering the game with the tying run in the
                      on-deck circle, at the plate or on the bases and finishing the game;
                      or by pitching at least three (3) innings in relief and finishing
                      the game regardless of how many runs the team was winning by when
                      entering the game.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class='tab-pane fade'
                id='v-pills-whip'
                role='tabpanel'
                aria-labelledby='v-pills-whip-tab'>
                <div className='_tab_content'>
                  <img
                    src='/img/details/ls.png'
                    alt='Play'
                  />
                  <div>
                    <h5>Testing</h5>
                    <p>
                      A “Save” is credited to a pitcher who finishes a game for the
                      winning team under certain circumstances. A save can be earned by
                      entering a game in which the team is leading by three (3) or fewer
                      runs and finishing the game by pitching at least one (1) inning
                      without losing the lead; entering the game with the tying run in the
                      on-deck circle, at the plate or on the bases and finishing the game;
                      or by pitching at least three (3) innings in relief and finishing
                      the game regardless of how many runs the team was winning by when
                      entering the game.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class='tab-pane fade'
                id='v-pills-hits'
                role='tabpanel'
                aria-labelledby='v-pills-hits-tab'>
                <div className='_tab_content'>
                  <img
                    src='/img/details/ls.png'
                    alt='Play'
                  />
                  <div>
                    <h5>Testing</h5>
                    <p>
                      A “Save” is credited to a pitcher who finishes a game for the
                      winning team under certain circumstances. A save can be earned by
                      entering a game in which the team is leading by three (3) or fewer
                      runs and finishing the game by pitching at least one (1) inning
                      without losing the lead; entering the game with the tying run in the
                      on-deck circle, at the plate or on the bases and finishing the game;
                      or by pitching at least three (3) innings in relief and finishing
                      the game regardless of how many runs the team was winning by when
                      entering the game.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
