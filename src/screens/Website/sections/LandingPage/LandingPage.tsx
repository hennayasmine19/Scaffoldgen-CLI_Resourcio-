import { Button } from "../../../../components/ui/button";

export const LandingPage = (): JSX.Element => {
  const buttons = [
    {
      text: "Download for Linux",
      variant: "default" as const,
      className: "bg-[#fa6b24] hover:bg-[#fa6b24]/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,107,36,0.5)]",
    },
    {
      text: "Download for Windows",
      variant: "outline" as const,
      className:
        "bg-white border-2 border-[#fa6b24] text-[#fa6b24] hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,107,36,0.3)]",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center min-h-screen gap-9 pt-16 md:pt-24 lg:pt-[150px] pb-16 md:pb-24 lg:pb-[300px] px-4 sm:px-8 md:px-14 relative bg-black overflow-visible">
      <div className="relative w-[310px] h-9 z-10 animate-fade-in">
        <h1 className="absolute top-0 left-[calc(50.00%_-_155px)] w-[308px] [font-family:'Clash_Display',sans-serif] font-bold text-[#fa6b24] text-[47.2px] text-center tracking-[0] leading-[28.9px]">
          ScaffoldGen
        </h1>
      </div>

      <p className="relative w-[952px] max-w-full [font-family:'Inter',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[27.8px] z-10 -mt-4 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
        A powerful command-line interface tool for developers, designed to
        streamline your workflow and boost your productivity
      </p>

      <div className="inline-flex items-start gap-9 relative flex-[0_0_auto] z-10 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            variant={button.variant}
            className={`h-auto px-[18px] py-3 rounded-lg [font-family:'Inter',Helvetica] font-bold text-lg tracking-[0] leading-[27px] whitespace-nowrap ${button.className}`}
          >
            {button.text}
          </Button>
        ))}
      </div>

      {/* Neon glowing arc at bottom center - integrated into landing page */}
      <div className="absolute bottom-20 md:bottom-32 left-1/2 -translate-x-1/2 w-[110%] md:w-[70%] h-[250px] md:h-[300px] z-0 pointer-events-none overflow-visible">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 300"
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            {/* Linear gradient for arc stroke: bright yellow-white at center, deep orange at edges */}
            <linearGradient id="arcStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff7b00" /> {/* Deep orange at start */}
              <stop offset="45%" stopColor="#ff9d2e" /> {/* Transitioning */}
              <stop offset="50%" stopColor="#FFFFF0" /> {/* Bright yellow-white at center */}
              <stop offset="55%" stopColor="#ff9d2e" /> {/* Transitioning */}
              <stop offset="100%" stopColor="#ff7b00" /> {/* Deep orange at end */}
            </linearGradient>
            {/* Soft feathered glow filter - desktop - wider spread */}
            <filter id="arcGlowFilterDesktop" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="30" result="glow1" />
              <feGaussianBlur stdDeviation="20" result="glow2" />
              <feGaussianBlur stdDeviation="10" result="glow3" />
              <feMerge>
                <feMergeNode in="glow1" />
                <feMergeNode in="glow2" />
                <feMergeNode in="glow3" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Softer glow filter - mobile */}
            <filter id="arcGlowFilterMobile" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="20" result="glow1" />
              <feGaussianBlur stdDeviation="12" result="glow2" />
              <feGaussianBlur stdDeviation="6" result="glow3" />
              <feMerge>
                <feMergeNode in="glow1" />
                <feMergeNode in="glow2" />
                <feMergeNode in="glow3" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Arc stroke line with glow - single glowing stroke only */}
          <path
            d="M 50 280 Q 500 50 950 280"
            stroke="url(#arcStrokeGradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            className="hidden md:block"
            filter="url(#arcGlowFilterDesktop)"
            opacity="1"
          />
          <path
            d="M 50 280 Q 500 50 950 280"
            stroke="url(#arcStrokeGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className="block md:hidden"
            filter="url(#arcGlowFilterMobile)"
            opacity="1"
          />
        </svg>
      </div>
    </section>
  );
};

