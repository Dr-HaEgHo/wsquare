import React from "react";
import WorkCard from "./WorkCard";

const works = [
  {
    id: "Afrosme",
    stack: ["REACT", "FIREBASE", "POSTGRES"],
    description:
      "A web application that helps users to find artisan in their city. It has a customer and artisan dashboard for managing bookings.  Developed with React, Firebase, Postgres.",
    image: require("@/assets/images/Afrosme.png"),
  },
  {
    id: "MedRemind",
    stack: ["VUE.JS", "KOTLIN"],
    description:
      "Prescription and automated medication reminder software for pharmacies and clinics. Built with Vue.js, and Kotlin.",
    image: require("@/assets/images/MedRemind.png"),
  },
  {
    id: "CyberVet",
    stack: ["REACT", "NODE", "POSTGRES"],
    description:
      "Full fledged veterinary hospital management and electronic medical record software. Built with React, Node, postgres.",
    image: require("@/assets/images/CyberVet.png"),
  },
  {
    id: "Dim Analysis",
    stack: [],
    description:
      "Comprehensive dashboard for a four-year sales analysis featuring key metrics, seasonal revenue trends, and geographic distribution across continents and countries. Dashboard developed with PowerBI.",
    image: require("@/assets/images/DimAnalysis.png"),
  },
];

const OurWork = () => {
  return (
    <div className="relative w-full z-10 pt-[64px] pb-[64px] px-6 lg:px-[70px] bg-white">
      <div className="w-full max-w-[1300px] mx-auto flex flex-col items-center text-center">
        <h2 className="text-black text-5xl font-bold mb-16 text-center">
          Some of Our Work
        </h2>

        <div className="w-full flex flex-col gap-16">
          {works &&
            works.map((work, idx) => (
              <WorkCard
                key={work.id}
                number={idx + 1}
                title={work.id}
                description={work.description}
                image={work.image}
                stack={work.stack}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
