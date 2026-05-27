import { Cpu, Layers, Zap, Layout } from "lucide-react";
import { SectionWrapper } from "../layouts/SectionWrapper";
import { SectionHeader } from "../components/SectionHeader";
import { Card } from "../components/Card";
import { portfolioData } from "../data/portfolioData";

const iconMap = {
  Cpu,
  Layers,
  Zap,
  Layout,
};

function ServicesComponent() {
  const servicesList = portfolioData.services;

  return (
    <div className="w-full">
      <SectionHeader
        subtitle="What I Do"
        title="MY CORE EXPERTISE"
        highlightWord="CORE"
        description="Providing professional software development and design solutions tailored for premium scaling."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {servicesList.map((service, index) => {
          const IconComponent = iconMap[service.icon] || Cpu;

          return (
            <Card
              key={service.id}
              index={index}
              direction="up"
              className="flex flex-col items-start gap-4 p-6 md:p-8 relative overflow-hidden group hover:border-pink-500/20"
            >
              {/* Corner glowing overlay */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-pink-500/5 rounded-full blur-xl group-hover:bg-pink-500/10 transition-all duration-500" />

              <div className="p-3 bg-pink-500/15 border border-pink-500/20 text-pink-400 rounded-xl">
                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide mt-2">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                {service.description}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export const Services = SectionWrapper(ServicesComponent, "services");
