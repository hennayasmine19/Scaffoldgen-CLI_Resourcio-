import { SearchIcon, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../../../../components/ui/input";

const navigationItems = [
  { label: "Downloads" },
  { label: "Releases" },
  { label: "Docs" },
  { label: "Snippet Manager" },
];

export const HeaderSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[140px] py-5 w-full bg-black relative z-50">
      <div className="flex items-center gap-[7px]">
        <img className="w-[19px] h-[25px]" alt="s image" src="/s.png" />
        <div className="[font-family:'Clash_Display',sans-serif] font-bold text-[#d6d2cd] text-[15.3px] tracking-[0] leading-[9.4px]">
          ScaffoldGen
          <br />
          <span className="mt-1 inline-block">CLI</span>
        </div>
      </div>

      {/* Desktop Navigation - unchanged */}
      <nav className="hidden lg:flex items-center gap-10">
        <div className="flex items-center gap-[30px]">
          <button className="[font-family:'Inter',Helvetica] font-normal text-[#d6d2cd] text-xl tracking-[0] leading-[15.1px] whitespace-nowrap hover:opacity-80 transition-all duration-300 hover:text-[#fa6b24] hover:scale-105 relative group">
            {navigationItems[0].label}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fa6b24] transition-all duration-300 group-hover:w-full"></span>
          </button>

          <button className="[font-family:'Inter',Helvetica] font-normal text-[#d6d2cd] text-xl tracking-[0] leading-[15.1px] whitespace-nowrap hover:opacity-80 transition-all duration-300 hover:text-[#fa6b24] hover:scale-105 relative group">
            {navigationItems[1].label}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fa6b24] transition-all duration-300 group-hover:w-full"></span>
          </button>

          <div className="relative w-[282px] h-[50px] group">
            <Input
              type="text"
              placeholder="SearchIcon..."
              className="w-full h-full bg-[#0b0b0a] rounded border border-solid border-[#2b2b2b] [font-family:'Inter',Helvetica] font-normal text-[#969696] text-[18.1px] tracking-[0] leading-[13.6px] pl-[21px] pr-[45px] placeholder:text-[#969696] transition-all duration-300 focus:border-[#fa6b24] focus:ring-2 focus:ring-[#fa6b24]/20 focus:outline-none group-hover:border-[#fa6b24]/50"
            />
            <SearchIcon className="absolute top-[calc(50%-9px)] right-[21px] w-[18px] h-[18px] text-[#969696] pointer-events-none transition-colors duration-300 group-hover:text-[#fa6b24] group-focus-within:text-[#fa6b24]" />
          </div>

          <button className="[font-family:'Inter',Helvetica] font-normal text-[#d6d2cd] text-xl tracking-[0] leading-[15.1px] whitespace-nowrap hover:opacity-80 transition-all duration-300 hover:text-[#fa6b24] hover:scale-105 relative group">
            {navigationItems[2].label}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fa6b24] transition-all duration-300 group-hover:w-full"></span>
          </button>

          <button className="[font-family:'Inter',Helvetica] font-normal text-[#d6d2cd] text-xl tracking-[0] leading-[15.1px] whitespace-nowrap hover:opacity-80 transition-all duration-300 hover:text-[#fa6b24] hover:scale-105 relative group">
            {navigationItems[3].label}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fa6b24] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-[#d6d2cd] hover:text-[#fa6b24] transition-colors duration-300 z-50"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile/Tablet Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 lg:hidden pt-20 px-4">
          <nav className="flex flex-col gap-6">
            <div className="relative w-full h-[50px] mb-4">
              <Input
                type="text"
                placeholder="Search..."
                className="w-full h-full bg-[#0b0b0a] rounded border border-solid border-[#2b2b2b] [font-family:'Inter',Helvetica] font-normal text-[#969696] text-[18.1px] tracking-[0] leading-[13.6px] pl-[21px] pr-[45px] placeholder:text-[#969696] transition-all duration-300 focus:border-[#fa6b24] focus:ring-2 focus:ring-[#fa6b24]/20 focus:outline-none"
              />
              <SearchIcon className="absolute top-[calc(50%-9px)] right-[21px] w-[18px] h-[18px] text-[#969696]" />
            </div>
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setIsMenuOpen(false)}
                className="[font-family:'Inter',Helvetica] font-normal text-[#d6d2cd] text-xl tracking-[0] leading-[15.1px] hover:opacity-80 transition-all duration-300 hover:text-[#fa6b24] text-left py-2 border-b border-[#2b2b2b]"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

