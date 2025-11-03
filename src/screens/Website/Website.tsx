import React from "react";
import { ContributorsSection } from "./sections/ContributorsSection";
import { HeaderSection } from "./sections/HeaderSection";
import { AboutSection } from "./sections/AboutSection";
import { DownloadSection } from "./sections/DownloadSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { LandingPage } from "./sections/LandingPage";
import { FAQSection } from "./sections/FAQSection";
import { GlobalUserSection } from "./sections/GlobalUserSection";
import { ImpactSection } from "./sections/ImpactSection";

export const Website = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-black">
      <HeaderSection />
      <LandingPage />
      <AboutSection />
      <DownloadSection />
      <FeaturesSection />
      <ImpactSection />
      <ContributorsSection />
      <GlobalUserSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};
