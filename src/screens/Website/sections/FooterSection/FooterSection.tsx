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
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-[316px] max-w-[1920px] mx-auto">
        {/* Left Column - Logo */}
        <div className="flex flex-col items-start w-full md:w-auto">
          <img 
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto sm:h-[60px] md:h-[70px] lg:h-[80px] object-contain flex-shrink-0" 
            alt="ScaffoldGen Logo" 
            src="/image.png"
          />
        </div>

        {/* Middle Column - Quick Links */}
        <nav className="flex flex-col items-start gap-4 sm:gap-5 lg:gap-6 w-full md:w-auto">
          <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-[18px] sm:text-[20px] lg:text-[22px] tracking-[0] leading-[16.6px]">
            Quick Links
          </h3>
          <ul className="flex flex-col items-start gap-4 sm:gap-5 lg:gap-[25px]">
            {quickLinks.map((link, index) => (
              <li
                key={index}
                className="[font-family:'Inter',Helvetica] font-normal text-[#d6d2cd] text-base sm:text-lg lg:text-xl tracking-[0] leading-[15.1px] cursor-pointer hover:opacity-80 transition-opacity"
              >
                {link.label}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Column - Connect with Us */}
        <nav className="flex flex-col items-start gap-4 sm:gap-5 lg:gap-6 w-full md:w-auto">
          <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-[18px] sm:text-[20px] lg:text-[22px] tracking-[0] leading-[16.6px] whitespace-nowrap">
            Connect with Us
          </h3>
          <ul className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-[17px]">
            {socialLinks.map((link, index) => (
              <li
                key={index}
                className="flex items-center gap-[11px] cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img
                  className={`${index === 1 ? "w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[22px] lg:h-[22px]" : "w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6"} flex-shrink-0`}
                  alt={link.alt}
                  src={link.icon}
                />
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#d6d2cd] text-base sm:text-lg lg:text-xl tracking-[0] leading-[15.1px]">
                  {link.label}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Copyright at bottom of footer */}
      <p className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 xl:bottom-[46px] left-4 sm:left-8 md:left-16 lg:left-24 xl:left-[170px] [font-family:'Inter',Helvetica] font-normal text-[#969696] text-sm sm:text-base lg:text-xl tracking-[0] leading-[15.1px]">
        © 2024 ScaffoldGenCLI All rights reserved.
      </p>
    </footer>
  );
};
