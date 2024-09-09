"use client";
import { useEffect, useState } from "react";
import Hero from "@/sections/details/Hero";
import Faq from "@/sections/home/Faq";
import Feed from "@/sections/home/Feed";
import Footer from "@/sections/home/Footer";
import HowItWorks from "@/sections/home/HowItWorks";
import InvestNowCallout from "@/sections/details/InvestNowCallout";
import Athlete from "@/sections/details/Athlete";
import MLBLeaders from "@/sections/details/common/MLBLeaders";
import CareerHL from "@/sections/details/common/CareerHL";
import PeacOfMindV2 from "@/sections/details/PeaceOfMindV2";
import "./page.scss";

// Replace these constants with your actual API key, base ID, and table name
const AIRTABLE_API_KEY =
  "pataay6Mi7S6jGRAp.0f994bb8835f678dfac024f31cb463227e62f6d26b46398e5860aacdb332ede7";
const BASE_ID = "appMECA6u30FRnOk6";
const TABLE_NAME = "Players Statistic";

// Function to fetch data from Airtable
async function fetchAirtableData() {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data from Airtable");
  }

  const data = await response.json();
  return data;
}

export default function Details() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAirtableData()
      .then((data) => {
        setData(data?.records);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <html lang='en'>
      <body>
        <main>
          <Hero />
          <HowItWorks />
          <Athlete
            data={data}
            loading={loading}
          />

          <MLBLeaders />
          <CareerHL />
          <PeacOfMindV2 />
          <Feed feedSchema={feedSchema} />
          <InvestNowCallout />
          <Faq faqSchema={faqSchema} />
          <Footer>
            <section id='_footer_details_root'>
              <div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12'>
                      <p className='_copyright_footer_details_page-root'>
                        Equity crowdfunding investments in private placements, and
                        start-up investments in particular, are speculative and involve a
                        high degree of risk and those investors who cannot afford to lose
                        their entire investment should not invest in start-ups. Companies
                        seeking startup investment through equity crowdfunding tend to be
                        in earlier stages of development and their business model,
                        products and services may not yet be fully developed, operational,
                        or tested in the public marketplace. There is no guarantee that
                        the stated valuation and other terms are accurate or in agreement
                        with the market or industry valuations. Further, investors may
                        receive illiquid and/or restricted stock that may be subject to
                        holding period requirements and/or liquidity concerns.
                        <br />
                        <br />
                        In order to receive perks from an investment, one must submit a
                        single investment that meets the minimum perk requirement. Bonus
                        shares from perks will not be granted if an investor submits
                        multiple investments that, when combined, meet the perk
                        requirement. Perks are expected to be issued upon the completion
                        of the Offering. Fractional shares will not be distributed and
                        Bonus Shares will be determined by rounding down to the nearest
                        whole share.
                        <br />
                        <br />
                        DealMakerSecurities LLC, a registered broker-dealer, and member of
                        <a href='#'> FINRA</a> |<a href='#'> SIPC</a>, located at 4000
                        Eagle Point Corporate Drive, Suite 950, Birmingham, AL 35242., is
                        the Intermediary for this offering and is not an affiliate of or
                        connected with the Issuer. Please check our background on FINRA's
                        <a href='#'>BrokerCheck</a>. DealMakerSecurities LLC does not make
                        investment recommendations.DealMakerSecurities LLC is NOT placing
                        or selling these securities on behalf of the Issuer.
                        DealMakerSecurities LLC is NOT soliciting this investment or
                        making any recommendations by collecting, reviewing, and
                        processing an Investor's documentation for this investment.
                        DealMakerSecurities LLC conducts Anti-Money Laundering, Identity,
                        and Bad ActorDisqualification reviews of the Issuer, and confirms
                        they are a registered business in good standing.
                        DealMakerSecurities LLC is NOT vetting or approving the
                        information provided by the Issuer or the Issuer itself.
                        <br />
                        <br />
                        Contact information is provided for Investors to make inquiries
                        and requests to DealMaker Securities LLC regarding Regulation CF
                        in general, or the status of such investor's submitted
                        documentation, specifically. DealMaker Securities LLC may direct
                        Investors to specific sections of the Offering Circular to locate
                        information or answers to their inquiry but does not opine or
                        provide guidance on issuer-related matters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Footer>
        </main>
      </body>
    </html>
  );
}

const feedSchema = [
  {
    id: 0,
    desc: "As a baseball fan, investing in a player's future was something I couldn't resist. What a fun way to connect with the game.",
    name: "Matt F.",
    date: " ",
  },
  {
    id: 1,
    desc: "Finlete has completely changed the way I think about interacting with and supporting athletes. I love feeling invested in players with so much potential.",
    name: "Edward M.",
    date: " ",
  },
  {
    id: 2,
    desc: "Having the option to support exciting prospects has made baseball so much more fun. If they make it I'll feel like I'm on the field with them!",
    name: "Sean B.",
    date: " ",
  },
  {
    id: 3,
    desc: "I bought shares because I believe in his talent and want to see him succeed.",
    name: "Nathaniel A.",
    date: " ",
  },
  {
    id: 4,
    desc: "One of the coolest investments I've ever been a part of. I love baseball and I love stocks and Finlete combines the two.",
    name: "Matt R.",
    date: " ",
  },
  {
    id: 5,
    desc: "It's rare to find an investment with such a personal touch. I get to help make athletes' dreams come true.",
    name: "Sophie P.",
    date: " ",
  },
];

const faqSchema = [
  {
    id: "faq1", //must be unique
    secondId: "head1", //must be unique
    title: "Why invest in startups?",
    desc: "By buying shares in an early-stage company you're passionate about, you are helping it grow. While there is no guarantee of success, startups have the potential to grow rapidly and generate substantial returns for early investors.",
  },
  {
    id: "faq2",
    secondId: "head2",
    title: "What types of securities can I buy on this site?",
    desc: "By buying shares in an early-stage company you're passionate about, you are helping it grow. While there is no guarantee of success, startups have the potential to grow rapidly and generate substantial returns for early investors.",
  },
  {
    id: "faq3",
    secondId: "head3",
    title: "How much can I invest?",
    desc: "By buying shares in an early-stage company you're passionate about, you are helping it grow. While there is no guarantee of success, startups have the potential to grow rapidly and generate substantial returns for early investors.",
  },
  {
    id: "faq4",
    secondId: "head4",
    title: "What are the tax implications of an equity crowdfunding investment?",
    desc: "By buying shares in an early-stage company you're passionate about, you are helping it grow. While there is no guarantee of success, startups have the potential to grow rapidly and generate substantial returns for early investors.",
  },
  {
    id: "faq5",
    secondId: "head5",
    title: "Who can invest in a Regulation CF Offering?",
    desc: "By buying shares in an early-stage company you're passionate about, you are helping it grow. While there is no guarantee of success, startups have the potential to grow rapidly and generate substantial returns for early investors.",
  },
];
