"use client";
import Athlete from "@/sections/home/Athlete";
import Athletes from "@/sections/home/Athletes";
import Clients from "@/sections/home/Clients";
import Faq from "@/sections/home/Faq";
import Feed from "@/sections/home/Feed";
import Footer from "@/sections/home/Footer";
import Hero from "@/sections/home/Hero";
import HowItWorks from "@/sections/home/HowItWorks";
import { useEffect, useState } from "react";

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

export default function Home() {
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
    <main>
      <Hero />
      <Clients />
      <Athlete
        data={data}
        loading={loading}
      />
      <HowItWorks />
      <Athletes />
      <Feed feedSchema={feedSchema} />
      <Faq faqSchema={faqSchema} />
      <Footer />
    </main>
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
    title: "What's Finlete?",
    desc: "Finlete allows fans to acquire a stake in the potential future earnings of promising athletes, sharing in their success both emotionally and financially.",
  },
  {
    id: "faq2",
    secondId: "head2",
    title: "What does the name Finlete mean?",
    desc: "It's a combination of finance and athlete - fin-lete.",
  },
  {
    id: "faq3",
    secondId: "head3",
    title: "Why was Finlete created?",
    desc: "Finlete was founded by Rob Connolly and Max Eisenberg. They wanted to create a community that was both about investing in sports and engaging with athletes in a special way.",
  },
  {
    id: "faq4",
    secondId: "head4",
    title: "Why should I join Finlete?",
    desc: "Investing in the offerings presented by Finlete allows you to deepen your connection to the sports. It's an opportunity to be an investor in addition to being a fan. Through Finlete you can actively support athletes' journeys while having the potential to profit from their potential successes.",
  },
  {
    id: "faq5",
    secondId: "head5",
    title: "What does it mean for Finlete to sign athletes?",
    desc: "Finlete signs athletes to future earnings contracts.",
  },
  {
    id: "faq6",
    secondId: "head6",
    title: "What's a future earnings contract?",
    desc: "A future earnings contract is an agreement where one party receives capital in exchange for giving the other party a percentage of their future earnings. In Finlete's case, the future earnings received from athletes includes salaries, performance bonuses, and other earnings directly related to income received from the team or league they play for. Expressly excluded is any income the athlete might earn from sponsorships, endorsements, investments, or any off-the-field activities.",
  },
  {
    id: "faq7",
    secondId: "head7",
    title: "Can I actually make money?",
    desc: "There will always be some risk involved when making a financial investment but yes, by acquiring a stake in an athlete's potential future earnings, you may profit if the athlete's career progresses and they achieve financial success in their sport.",
  },
  {
    id: "faq8",
    secondId: "head8",
    title: "How does this help athletes?",
    desc: (
      <>
        Athletes choose to enter into future earnings contracts with Finlete for a variety
        of reasons including:
        <br />
        <br />
        <ol>
          <li>
            <strong> Capital:</strong> The funding gives athletes access to capital.
            Depending on their age and stage in their careers, the motivations for seeing
            capital vary. Some athletes might spend the money on their own development,
            such as training, coaching, and nutrition. Some might use it to upgrade their
            living situation or that of their families. Some might use it to invest. The
            hope is that receiving the capital they want will help them achieve their
            goals both on and off the field, and in many cases greatly enhance their
            chances of reaching their full potential.
          </li>
          <li>
            <strong>Fan Support:</strong> Finlete provides athletes with more than just
            money - we also plug them into our growing community of supporters (that's
            you!). Offering people the opportunity to be part of their journey financially
            creates a deep connection.
          </li>
        </ol>
      </>
    ),
  },
];
