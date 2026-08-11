import React, { useState } from "react";
import { Monitor, Server, BrainCircuit, Workflow, ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "../layouts/SectionWrapper";
import { SectionHeader } from "../components/SectionHeader";
import { portfolioData } from "../data/portfolioData";

// Import locally optimized WebP services backgrounds
import frontendImg from "../assets/services/frontend.webp";
import backendImg from "../assets/services/backend.webp";
import aiImg from "../assets/services/ai.webp";
import architectureImg from "../assets/services/architecture.webp";

const iconMap = {
  Monitor,
  Server,
  BrainCircuit,
  Workflow,
};

const serviceMedia = {
  "service-1": {
    gradient: "from-[#D6A45C]/25 to-[#4A0E1A]/60",
    img: frontendImg,
  },
  "service-2": {
    gradient: "from-[#4A0E1A]/30 to-[#2D0B12]/70",
    img: backendImg,
  },
  "service-3": {
    gradient: "from-[#D6A45C]/20 via-[#4A0E1A]/40 to-[#070707]/70",
    img: aiImg,
  },
  "service-4": {
    gradient: "from-[#6E1126]/30 to-[#2D0B12]/70",
    img: architectureImg,
  },
};

function ServicesComponent() {
  const servicesList = portfolioData.services;
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="w-full relative">
      <SectionHeader
        subtitle="What I Do"
        title="MY CORE EXPERTISE"
        highlightWord="CORE"
        description="Providing professional software development and design solutions tailored for premium scaling."
      />

      {/* Dynamic Expandable Cards Component */}
      <div className="flex flex-col lg:flex-row gap-6 mt-12 h-[850px] lg:h-[500px] w-full">
        {servicesList.map((service, index) => {
          const isActive = activeService === index;
          const IconComponent = iconMap[service.icon] || Cpu;
          const media = serviceMedia[service.id] || serviceMedia["service-1"];

          return (
            <div
              key={service.id}
              onMouseEnter={() => setActiveService(index)}
              onClick={() => setActiveService(index)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-[flex,width] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/[0.08] hover:border-[#D6A45C]/30
                ${isActive ? "flex-[10] shadow-[0_20px_50px_rgba(74,14,26,0.35)] ring-1 ring-white/20" : "flex-[2] opacity-80 hover:opacity-100"} 
                min-h-[110px] lg:min-h-auto group`}
            >
              {/* Background Image & Ambient Overlay */}
              <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105">
                <img
                  src={media.img}
                  alt={service.title}
                  className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.1] saturate-[1.25]"
                />
                {/* Premium Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${media.gradient} mix-blend-multiply transition-opacity duration-500 ${isActive ? "opacity-70" : "opacity-85"}`}
                />
                <div className="absolute inset-0 bg-neutral-950/40" />
              </div>

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 text-white z-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
                {/* Collapsed State Icon Badge */}
                <div
                  className={`mb-auto transition-all duration-500 ${isActive ? "translate-y-0 opacity-100 scale-100" : "translate-y-2 opacity-90 scale-95"}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md flex items-center justify-center mb-4 border border-white/10 group-hover:border-[#D6A45C]/30 shadow-lg transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-[#D6A45C]" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="relative">
                  {/* Title */}
                  <h3
                    className={`font-serif italic font-extrabold tracking-tight transition-all duration-500 text-white flex items-center ${
                      isActive
                        ? "text-2xl lg:text-3xl mb-3"
                        : "text-lg lg:text-xl opacity-90 truncate"
                    }`}
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight
                      className={`inline-block ml-2 w-5 h-5 text-[#D6A45C] transition-all duration-500 ${
                        isActive
                          ? "opacity-100 translate-x-0 translate-y-0"
                          : "opacity-0 -translate-x-4 translate-y-4 w-0"
                      }`}
                    />
                  </h3>

                  {/* Description */}
                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      isActive
                        ? "max-h-48 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm lg:text-base text-gray-300 leading-relaxed font-light max-w-xl">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const Services = SectionWrapper(ServicesComponent, "services");
