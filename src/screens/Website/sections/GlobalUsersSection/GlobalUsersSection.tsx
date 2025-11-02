import { Button } from "../../../../components/ui/button";

export const GlobalUsersSection = (): JSX.Element => {
  const buttons = [
    {
      text: "Download for Linux",
      variant: "default" as const,
      className: "bg-[#fa6b24] hover:bg-[#fa6b24]/90 text-white",
    },
    {
      text: "Download for Windows",
      variant: "outline" as const,
      className:
        "bg-white border-2 border-[#fa6b24] text-[#fa6b24] hover:bg-white/90",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center min-h-screen gap-9 pt-16 md:pt-24 lg:pt-[150px] pb-16 md:pb-24 lg:pb-[300px] px-4 sm:px-8 md:px-14 relative bg-black overflow-hidden">
      <div className="relative w-[310px] h-9 z-10">
        <h1 className="absolute top-0 left-[calc(50.00%_-_155px)] w-[308px] [font-family:'Clash_Display',sans-serif] font-bold text-[#fa6b24] text-[47.2px] text-center tracking-[0] leading-[28.9px]">
          ScaffoldGen
        </h1>
      </div>

      <p className="relative w-[952px] max-w-full [font-family:'Inter',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[27.8px] z-10 -mt-4">
        A powerful command-line interface tool for developers, designed to
        streamline your workflow and boost your productivity
      </p>

      <div className="inline-flex items-start gap-9 relative flex-[0_0_auto] z-10">
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

      {/* Orange glowing circular arc at bottom - centered */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[400px] md:h-[500px] z-0 pointer-events-none overflow-visible">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1920 500"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            {/* Radial gradient centered at arc peak for intense glow */}
            <radialGradient id="arcRadialGlow" cx="50%" cy="15%" r="80%">
              <stop offset="0%" stopColor="#ff8c42" stopOpacity="1" />
              <stop offset="15%" stopColor="#fa6b24" stopOpacity="0.98" />
              <stop offset="30%" stopColor="#fa6b24" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ff9d5c" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#ffb380" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffc199" stopOpacity="0" />
            </radialGradient>
            {/* Enhanced glow filter */}
            <filter id="arcGlowFilter" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="25" result="glow1" />
              <feGaussianBlur stdDeviation="15" result="glow2" />
              <feGaussianBlur stdDeviation="10" result="glow3" />
              <feMerge>
                <feMergeNode in="glow1" />
                <feMergeNode in="glow2" />
                <feMergeNode in="glow3" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Filled arc area with glow - starting from middle left to middle right */}
          <path
            d="M 320 500 Q 960 40 1600 500 L 1920 500 L 0 500 Z"
            fill="url(#arcRadialGlow)"
            filter="url(#arcGlowFilter)"
            opacity="0.9"
          />
          {/* Main arc stroke line with glow - peak at center (960, 40) */}
          <path
            d="M 320 500 Q 960 40 1600 500"
            stroke="#fa6b24"
            strokeWidth="8"
            fill="none"
            filter="url(#arcGlowFilter)"
            opacity="0.95"
          />
        </svg>
      </div>
    </section>
  );
};
