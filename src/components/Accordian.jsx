import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const data = [
  {
    title: "Innovative Approach",
    content:
      "We deliver advanced, future-ready transport technology solutions built for scalable mobility ecosystems.",
  },
  {
    title: "Safety Focused Systems",
    content:
      "Our platforms enhance road safety through real-time monitoring, analytics, and compliance automation.",
  },
  {
    title: "Custom Integrations",
    content:
      "Designed for seamless deployment across diverse state infrastructures and regulatory environments.",
  },
  {
    title: "Reliable Execution",
    content:
      "Backed by strong partnerships and proven large-scale government implementations.",
  },
];

const PremiumAccordion = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-black py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-semibold tracking-tight mb-16">
          Why Choose Us
        </h2>

        {/* Accordion */}
        <div className="divide-y divide-neutral-800 border-t border-neutral-800">

          {data.map((item, i) => {
            const isOpen = active === i;

            return (
              <div
                key={i}
                className="group transition-all duration-300"
              >
                {/* Header */}
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="text-xl font-medium text-neutral-200 group-hover:text-white transition">
                    {item.title}
                  </span>

                  <ChevronDown
                    className={`transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 text-orange-500"
                        : "text-neutral-500 group-hover:text-white"
                    }`}
                  />
                </button>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-6 text-neutral-400 leading-relaxed max-w-2xl">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default PremiumAccordion;