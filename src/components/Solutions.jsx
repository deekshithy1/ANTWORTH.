import React from "react";
import tracks from "../assets/images/tracks.png";
import ats from "../assets/images/ats.png";
import cab from "../assets/images/cab.png";
import fleet from "../assets/images/fleetm.png";
import puc from "../assets/images/puc.png";
import ev from "../assets/images/ev.png";
import checkpost from "../assets/images/Checkpost.png";
import reflector from "../assets/images/reflector.png";
import adtt from "../assets/images/adtt.png";
import bus from "../assets/images/bus.png";

const cardsData = [
  { title: "PUC Networking Solutions", description: "Streamlining emissions testing processes to ensure vehicles meet environmental standards.", image: puc },
  { title: "Retro Reflective Tape Authentication", description: "Track sales and prevent counterfeit reflective tapes in the market.", image: reflector },
  { title: "Vehicle Tracking (AIS-140)", description: "Real-time monitoring with AIS-140 compliant tracking system.", image: tracks },
  { title: "Automated Driving Testing Track", description: "AI-powered testing tracks simulating real-world scenarios.", image: adtt },
  { title: "ATS Networking Solution", description: "Centralized vehicle fitness testing system.", image: ats },
  { title: "Charging Management System", description: "Smart EV charging platform for sustainable mobility.", image: ev },
  { title: "Depot Management", description: "Digital system for transport depot operations.", image: bus },
  { title: "Fleet Management", description: "Optimize fleet usage and reduce operational costs.", image: fleet },
  { title: "Integrated Checkposts", description: "Tech-driven border infrastructure for efficiency.", image: checkpost },
  { title: "Cab Aggregator", description: "Commission-free ride-hailing ecosystem.", image: cab },
];

const Solutions = () => {
  return (
    <section className="py-16 bg-gray-50 h-screen overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-center font-bold text-5xl mb-14 tracking-tight">
        Our Solutions
      </h2>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">

          {[...cardsData, ...cardsData].map((card, id) => (
            <div
              key={id}
              className="min-w-[420px] max-w-[420px] bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover rounded-t-3xl"
              />

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[180px]">
                
                <h3 className="text-xl font-semibold mb-2">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed max-w-[320px] break-words">
                  {card.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* Gradient edges */}
        <div className="absolute top-0 left-0 w-28 h-full bg-gradient-to-r from-gray-50 to-transparent"></div>
        <div className="absolute top-0 right-0 w-28 h-full bg-gradient-to-l from-gray-50 to-transparent"></div>
      </div>

      {/* Bottom Section (Improved) */}
      <div className="mt-20 max-w-5xl mx-auto text-center px-4 py-6">
        
        <h3 className="text-4xl font-semibold mb-4">
          Intelligent Transport Solutions for Every Stage of Mobility
        </h3>

        <p className="text-gray-600 leading-relaxed">
          An integrated ecosystem of platforms designed to manage compliance, monitoring,
          infrastructure, and public mobility operations through a single connected network.
        </p>

      </div>

    </section>
  );
};

export default Solutions;