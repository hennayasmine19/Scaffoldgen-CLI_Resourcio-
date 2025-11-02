import React from "react";
import { AboutSection } from "./sections/AboutSection";
import { ContributorsSection } from "./sections/ContributorsSection";
import { DownloadSection } from "./sections/DownloadSection";
import { FAQSection } from "./sections/FAQSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { GlobalUsersSection } from "./sections/GlobalUsersSection";
import { OrganizationsSection } from "./sections/OrganizationsSection";
import { ReleaseSection } from "./sections/ReleaseSection";

export const Website = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-black">
      <ContributorsSection />
      <GlobalUsersSection />
      <DownloadSection />
      <FAQSection />
      <FeaturesSection />
      <AboutSection />
      <ReleaseSection />
      <OrganizationsSection />
      <FooterSection />
    </div>
  );
};
