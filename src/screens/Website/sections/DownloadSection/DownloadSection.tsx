import React from "react";
import { Button } from "../../../../components/ui/button";

const downloadSections = [
  {
    title: "Latest Download",
    description:
      "The latest version of our CLI tool is now available for download on Linux. Get the latest features and improvements by downloading the latest release.",
    buttonText: "Download for Linux",
  },
  {
    title: "Latest Release",
    description:
      "Check out the latest release of our CLI tool, packed with new features and improvements. See what s new and get the latest version.",
    buttonText: "View Latest Release",
  },
];

export const DownloadSection = (): JSX.Element => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen gap-2.5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[140px] py-16 md:py-20 lg:py-24 w-full bg-black">
      {/* Subtle orange gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-[#fa6b24]/20 via-[#fa6b24]/10 to-transparent pointer-events-none"></div>
      
      <div className="relative flex items-start justify-between gap-8 w-full z-10">
        {downloadSections.map((section, index) => (
          <div key={index} className="flex flex-col gap-14 flex-1">
            <div className="flex flex-col gap-6">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-[37px] tracking-[0] leading-[27.9px]">
                {section.title}
              </h2>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#969696] text-xl tracking-[-0.02px] leading-[30px]">
                {section.description}
              </p>
            </div>
            <Button className="inline-flex items-center justify-center gap-2.5 px-[18px] py-3 bg-[#fa6b24] rounded-lg hover:bg-[#fa6b24]/90 w-fit h-auto">
              <span className="[font-family:'Inter',Helvetica] font-bold text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                {section.buttonText}
              </span>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

