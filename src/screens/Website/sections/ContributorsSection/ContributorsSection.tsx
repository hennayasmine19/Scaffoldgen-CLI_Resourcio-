import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { useScrollReveal } from "../../../../hooks/useScrollReveal";

const contributors = [
  {
    name: "Name 1",
    role: "Core Contributor",
  },
  {
    name: "Name 2",
    role: "Core Contributor",
  },
  {
    name: "Name 3",
    role: "Core Contributor",
  },
  {
    name: "Name 4",
    role: "Core Contributor",
  },
];

export const ContributorsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-2.5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[140px] py-12 sm:py-16 md:py-20 lg:py-24 w-full">
      <div className="w-full flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
        <h2 className="w-full mt-[-1.00px] font-bold text-[#d6d2cd] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[37px] tracking-[0.04px] leading-[27.9px] [font-family:'Inter',Helvetica] text-center">
          Major Contributors
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full px-4">
          {contributors.map((contributor, index) => {
            const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
            return (
            <Card
              key={index}
              ref={ref}
              className={`w-full max-w-[280px] sm:max-w-[320px] lg:w-[350px] h-[280px] sm:h-[320px] lg:h-[350px] rounded-lg bg-[linear-gradient(90deg,rgba(11,11,10,1)_45%,rgba(55,29,15,1)_100%)] border-0 overflow-hidden transition-all duration-700 ease-out ${
                isVisible 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-10 scale-95"
              } hover:scale-105 hover:shadow-[0_0_30px_rgba(250,107,36,0.3)]`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <CardContent className="relative w-full h-full p-0">
                <img
                  className="absolute top-[60px] sm:top-[70px] lg:top-[76px] left-1/2 -translate-x-1/2 w-5 h-5 sm:w-[22px] sm:h-[22px] lg:w-6 lg:h-6"
                  alt="Gallery"
                  src="/galley.png"
                />
                <div className="absolute top-[210px] sm:top-[240px] lg:top-[268px] left-1/2 -translate-x-1/2 w-[90%] sm:w-[165px] h-[60px] flex flex-col justify-end">
                  <div className="h-[30px] self-center font-semibold text-white text-base sm:text-lg lg:text-xl tracking-[-0.02px] leading-[24px] sm:leading-[27px] lg:leading-[30px] whitespace-nowrap [font-family:'Inter',Helvetica] text-center">
                    {contributor.name}
                  </div>
                  <div className="w-full sm:w-[161px] h-[30px] [font-family:'Inter',Helvetica] font-medium text-[#969696] text-base sm:text-lg lg:text-xl tracking-[-0.05px] leading-[24px] sm:leading-[27px] lg:leading-[30px] whitespace-nowrap text-center sm:text-left">
                    {contributor.role}
                  </div>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

