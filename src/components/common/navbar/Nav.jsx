"use client";
import React from "react";
import "./nav.scss";
import { mediaQuery } from "@/utils/mediaQuery";
import { SignInButton } from "../button/Button";

export default function Nav(props) {
  const { linkList } = props;
  const { isSmUp } = mediaQuery();

  return (
    <nav
      class='navbar navbar-expand-lg navbar-dark'
      id='nav-section'>
      <div class='container'>
        <div className='navbar-brand'>
          <a
            class='d'
            href='/'>
            <img
              src='/img/nav/logo.svg'
              alt='Finlete Logo'
            />
          </a>
          {isSmUp ? (
            <a href='#'>
              <img
                src='/img/nav/spons.png'
                alt='Finlete Logo'
              />
            </a>
          ) : null}
        </div>

        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon'></span>
        </button>
        <div
          class='collapse navbar-collapse'
          id='navbarNav'>
          <ul class='navbar-nav ms-auto'>
            {linkList?.length > 0 &&
              linkList.map((item) => {
                return (
                  <li class='nav-item'>
                    <a
                      key={item?.id}
                      class='nav-link'
                      href={item?.url}>
                      {item?.name}
                    </a>
                  </li>
                );
              })}
            <li class='nav-item'>
              <SignInButton> SIGN IN</SignInButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
