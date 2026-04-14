import React from 'react'
import tracks from '../assets/images/tracks.png'
import ats from '../assets/images/ats.png'
import cab from '../assets/images/cab.png'
import fleet from '../assets/images/fleetm.png'
import puc from '../assets/images/puc.png'
import ev from '../assets/images/ev.png'
import checkpost from '../assets/images/Checkpost.png'
import reflector from '../assets/images/reflector.png'
import adtt from '../assets/images/adtt.png'
import bus from '../assets/images/bus.png'
const cardsData = [
  {
    title: "PUC Networking Solutions",
    description:
      "Streamlining emissions testing processes to ensure vehicles meet environmental standards and contribute to cleaner air quality.",
      image:puc
  },
  {
    title: "Retro Reflective Tape Authentication",
    description:
      "App-based system to track sales and distribution of reflective tapes, preventing counterfeit products in the market.",
      image:reflector
  },
  {
    title: "Vehicle Location Tracking Device (AIS-140)",
    description:
      "State-of-the-art AIS-140 compliant tracking device with centralized backend for real-time vehicle monitoring.",
      image:tracks
  },
  {
    title: "Automated Driving Testing Track (ADTT)",
    description:
      "AI-powered driving test tracks integrating computer vision and sensors to simulate real-world driving scenarios.",
      image:adtt
  },
  {
    title: "ATS Networking Solution",
    description:
      "Centralized vehicle fitness testing data system enhancing transparency and regulatory oversight.",
      image:ats
  },
  {
    title: "Charging Management System (CMS)",
    description:
      "Smart EV charging management platform enabling efficient and sustainable electric mobility.",
      image:ev
  },
  {
    title: "Depot Management Solutions",
    description:
      "Digital systems empowering public transport depots with seamless operations and maintenance management.",
      image:bus
  },
  {
    title: "Fleet Management Solutions",
    description:
      "Advanced fleet optimization platform improving utilization, performance, and cost efficiency.",
      image:fleet
  },
  {
    title: "Integrated Border Checkposts (ICPs)",
    description:
      "Technology-driven border infrastructure improving trade efficiency and regulatory compliance.",
      image:checkpost
  },
  {
    title: "Cab Aggregator Platform",
    description:
      "Commission-free state-backed ride-hailing ecosystem ensuring fair pricing and driver empowerment.",
      image:cab
  },
];

const WhyChoose = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-gray-900 mb-10 text-center font-bold ">Why Choose Us</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cardsData.map((card, index) => (
            <div 
              key={card.title} 
              className={`group flex flex-col p-4 rounded-2xl bg-white border border-gray-100 transition-all hover:border-gray-300
                ${index % 5 === 0 ? 'md:col-span-2' : ''}
              `}
            >
              {/* Minimal Image Container */}
              <div className="overflow-hidden rounded-xl mb-3 aspect-video bg-gray-50">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>

              {/* Tighter Text Content */}
              <h4 className="text-sm font-bold text-gray-900 mb-1">{card.title}</h4>
              <p className="text-xs text-gray-400 leading-tight group-hover:text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChoose;