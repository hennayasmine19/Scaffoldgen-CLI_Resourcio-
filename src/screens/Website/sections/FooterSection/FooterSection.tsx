import React from "react";

const quickLinks = [
  { label: "Downloads" },
  { label: "Releases" },
  { label: "Documentation" },
  { label: "Support" },
];

const socialLinks = [
  { icon: "/insta.png", label: "LinkedIn", alt: "Linkedin" },
  { icon: "/git.png", label: "GitHub", alt: "Vector" },
  { icon: "/dis.png", label: "Discord", alt: "Discord" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[#0b0b0a] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[170px] py-8 md:py-12 lg:py-[46px] min-h-[200px]">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-16 lg:gap-[316px] max-w-[1920px] mx-auto">
        {/* Left Column - Logo */}
        <div className="flex flex-col items-start">
          <img 
            className="w-[500px] h-[80px] object-contain flex-shrink-0" 
            alt="ScaffoldGen Logo" 
            src="/image.png"
          />
        </div>

        {/* Middle Column - Quick Links */}
        <nav className="flex flex-col items-start gap-6">
          <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-[16.6px]">
            Quick Links
          </h3>
          <ul className="flex flex-col items-start gap-[25px]">
            {quickLinks.map((link, index) => (
              <li
                key={index}
                className="[font-family:'Inter',Helvetica] font-normal text-[#d6d2cd] text-xl tracking-[0] leading-[15.1px] cursor-pointer hover:opacity-80 transition-opacity"
              >
                {link.label}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Column - Connect with Us */}
        <nav className="flex flex-col items-start gap-6">
          <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-[22px] tracking-[0] leading-[16.6px] whitespace-nowrap">
            Connect with Us
          </h3>
          <ul className="flex flex-col items-start gap-[17px]">
            {socialLinks.map((link, index) => (
              <li
                key={index}
                className="flex items-center gap-[11px] cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img
                  className={`${index === 1 ? "w-[22px] h-[22px]" : "w-6 h-6"} flex-shrink-0`}
                  alt={link.alt}
                  src={link.icon}
                />
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#d6d2cd] text-xl tracking-[0] leading-[15.1px]">
                  {link.label}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Copyright at bottom of footer */}
      <p className="absolute bottom-8 md:bottom-12 lg:bottom-[46px] left-4 sm:left-8 md:left-16 lg:left-24 xl:left-[170px] [font-family:'Inter',Helvetica] font-normal text-[#969696] text-xl tracking-[0] leading-[15.1px]">
        © 2024 ScaffoldGenCLI All rights reserved.
      </p>
    </footer>
  );
};
