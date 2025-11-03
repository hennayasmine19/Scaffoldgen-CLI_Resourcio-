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
    <section className="flex flex-col items-center justify-center min-h-screen gap-2.5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[140px] py-16 md:py-20 lg:py-24 w-full">
      <div className="w-full flex flex-col items-center gap-12">
        <h2 className="w-full mt-[-1.00px] font-bold text-[#d6d2cd] text-[37px] tracking-[0.04px] leading-[27.9px] [font-family:'Inter',Helvetica] text-center">
          Major Contributors
        </h2>

        <div className="flex items-center justify-center gap-8 w-full">
          {contributors.map((contributor, index) => {
            const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
            return (
            <Card
              key={index}
              ref={ref}
              className={`w-[350px] h-[350px] rounded-lg bg-[linear-gradient(90deg,rgba(11,11,10,1)_45%,rgba(55,29,15,1)_100%)] border-0 overflow-hidden transition-all duration-700 ease-out ${
                isVisible 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-10 scale-95"
              } hover:scale-105 hover:shadow-[0_0_30px_rgba(250,107,36,0.3)]`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <CardContent className="relative w-full h-full p-0">
                <img
                  className="absolute top-[76px] left-[calc(50.00%_-_12px)] w-6 h-6"
                  alt="Gallery"
                  src="/galley.png"
                />
                <div className="absolute top-[268px] left-[calc(50.00%_-_80px)] w-[165px] h-[60px] flex flex-col justify-end">
                  <div className="h-[30px] self-center font-semibold text-white text-xl tracking-[-0.02px] leading-[30px] whitespace-nowrap [font-family:'Inter',Helvetica] text-center">
                    {contributor.name}
                  </div>
                  <div className="w-[161px] h-[30px] [font-family:'Inter',Helvetica] font-medium text-[#969696] text-xl tracking-[-0.05px] leading-[30px] whitespace-nowrap">
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

