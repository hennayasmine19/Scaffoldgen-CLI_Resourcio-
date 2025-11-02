import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

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

export const AboutSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-2.5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[140px] py-16 md:py-20 lg:py-24 w-full">
      <div className="w-full flex flex-col items-center gap-12">
        <h2 className="w-full mt-[-1.00px] font-bold text-[#d6d2cd] text-[37px] tracking-[0.04px] leading-[27.9px] [font-family:'Inter',Helvetica] text-center">
          Major Contributors
        </h2>

        <div className="flex items-center justify-center gap-8 w-full">
          {contributors.map((contributor, index) => (
            <Card
              key={index}
              className="w-[350px] h-[350px] rounded-lg bg-[linear-gradient(90deg,rgba(11,11,10,1)_45%,rgba(55,29,15,1)_100%)] border-0 overflow-hidden"
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
          ))}
        </div>
      </div>
    </section>
  );
};
