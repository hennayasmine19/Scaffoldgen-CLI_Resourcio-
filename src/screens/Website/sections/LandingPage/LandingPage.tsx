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
    <section className="flex flex-col w-full items-center justify-center min-h-screen gap-6 sm:gap-8 lg:gap-9 pt-16 md:pt-24 lg:pt-[150px] pb-16 md:pb-24 lg:pb-[300px] px-4 sm:px-8 md:px-14 relative bg-black overflow-visible">
      <div className="relative w-full max-w-[310px] h-7 sm:h-8 lg:h-9 z-10 animate-fade-in">
        <h1 className="absolute top-0 left-1/2 -translate-x-1/2 w-full [font-family:'Clash_Display',sans-serif] font-bold text-[#fa6b24] text-[32px] sm:text-[38px] md:text-[42px] lg:text-[47.2px] text-center tracking-[0] leading-[28.9px]">
          ScaffoldGen
        </h1>
      </div>

      <p className="relative w-full max-w-[952px] px-4 [font-family:'Inter',Helvetica] font-normal text-white text-base sm:text-lg lg:text-xl text-center tracking-[0] leading-[24px] sm:leading-[26px] lg:leading-[27.8px] z-10 -mt-2 sm:-mt-3 lg:-mt-4 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
        A powerful command-line interface tool for developers, designed to
        streamline your workflow and boost your productivity
      </p>

      <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-9 relative flex-[0_0_auto] z-10 animate-fade-in w-full sm:w-auto px-4" style={{ animationDelay: "0.4s", opacity: 0 }}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            variant={button.variant}
            className={`h-auto px-[18px] py-3 rounded-lg [font-family:'Inter',Helvetica] font-bold text-base sm:text-lg tracking-[0] leading-[27px] whitespace-nowrap w-full sm:w-auto ${button.className}`}
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
            {/* Elegant linear gradient for arc stroke */}
            <linearGradient id="arcStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff7b00" />
              <stop offset="45%" stopColor="#ff8c42" />
              <stop offset="50%" stopColor="#ff9d2e" />
              <stop offset="55%" stopColor="#ff8c42" />
              <stop offset="100%" stopColor="#ff7b00" />
            </linearGradient>
            
            {/* Radial gradient for glow fade - center to edges */}
            <radialGradient id="glowFadeGradient" cx="50%" cy="0%" r="80%">
              <stop offset="0%" stopColor="white" stopOpacity="1"/>
              <stop offset="25%" stopColor="white" stopOpacity="0.9"/>
              <stop offset="50%" stopColor="white" stopOpacity="0.5"/>
              <stop offset="75%" stopColor="white" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            
            {/* Downward center glow */}
            <filter id="centerDownwardGlowDesktop" x="-150%" y="-100%" width="400%" height="300%" colorInterpolationFilters="sRGB">
              <feGaussianBlur stdDeviation="28" in="SourceGraphic" result="blur"/>
              <feOffset in="blur" dx="0" dy="16" result="offset"/>
            </filter>
            <filter id="centerDownwardGlowMobile" x="-150%" y="-100%" width="400%" height="300%" colorInterpolationFilters="sRGB">
              <feGaussianBlur stdDeviation="20" in="SourceGraphic" result="blur"/>
              <feOffset in="blur" dx="0" dy="12" result="offset"/>
            </filter>
            
            {/* Powerful glow filter - Desktop - creates visible halo */}
            <filter id="powerfulGlowDesktop" x="-400%" y="-400%" width="900%" height="900%" colorInterpolationFilters="sRGB">
              <feGaussianBlur stdDeviation="100" in="SourceGraphic" result="blur1"/>
              <feGaussianBlur stdDeviation="70" in="SourceGraphic" result="blur2"/>
              <feGaussianBlur stdDeviation="45" in="SourceGraphic" result="blur3"/>
              <feGaussianBlur stdDeviation="25" in="SourceGraphic" result="blur4"/>
              <feGaussianBlur stdDeviation="12" in="SourceGraphic" result="blur5"/>
              <feMerge>
                <feMergeNode in="blur1" opacity="0.4"/>
                <feMergeNode in="blur2" opacity="0.5"/>
                <feMergeNode in="blur3" opacity="0.6"/>
                <feMergeNode in="blur4" opacity="0.7"/>
                <feMergeNode in="blur5" opacity="0.8"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Powerful glow filter - Mobile */}
            <filter id="powerfulGlowMobile" x="-400%" y="-400%" width="900%" height="900%" colorInterpolationFilters="sRGB">
              <feGaussianBlur stdDeviation="60" in="SourceGraphic" result="blur1"/>
              <feGaussianBlur stdDeviation="40" in="SourceGraphic" result="blur2"/>
              <feGaussianBlur stdDeviation="25" in="SourceGraphic" result="blur3"/>
              <feGaussianBlur stdDeviation="15" in="SourceGraphic" result="blur4"/>
              <feGaussianBlur stdDeviation="8" in="SourceGraphic" result="blur5"/>
              <feMerge>
                <feMergeNode in="blur1" opacity="0.4"/>
                <feMergeNode in="blur2" opacity="0.5"/>
                <feMergeNode in="blur3" opacity="0.6"/>
                <feMergeNode in="blur4" opacity="0.7"/>
                <feMergeNode in="blur5" opacity="0.8"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Elegant Professional Arc - Desktop */}
          {/* Glow halo layers behind arc - create elegant fade */}
          <g className="hidden md:block">
            {/* Outer glow - soft fade at edges */}
            <path
              d="M 50 280 Q 500 50 950 280"
              stroke="#ff7b00"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              opacity="0.25"
              filter="url(#powerfulGlowDesktop)"
            />
            <path
              d="M 50 280 Q 500 50 950 280"
              stroke="#ff8c42"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              opacity="0.35"
              filter="url(#powerfulGlowDesktop)"
            />
            <path
              d="M 50 280 Q 500 50 950 280"
              stroke="#ff8c42"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              opacity="0.45"
              filter="url(#powerfulGlowDesktop)"
            />
            <path
              d="M 50 280 Q 500 50 950 280"
              stroke="#ff9d2e"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
              opacity="0.55"
              filter="url(#powerfulGlowDesktop)"
            />
            {/* Center intense glow - darkest/strongest */}
            <path
              d="M 50 280 Q 500 50 950 280"
              stroke="#ff9d2e"
              strokeWidth="20"
              fill="none"
              strokeLinecap="round"
              opacity="0.85"
              filter="url(#powerfulGlowDesktop)"
            />
          </g>
          
          {/* Main elegant arc stroke - varying thickness - Desktop */}
          {/* Edge sections - thinner */}
          <path
            d="M 50 280 Q 500 50 950 280"
            stroke="url(#arcStrokeGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            className="hidden md:block"
            opacity="0.9"
          />
          <path
            d="M 50 280 Q 500 50 950 280"
            stroke="url(#arcStrokeGradient)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            className="hidden md:block"
            opacity="0.95"
          />
          <path
            d="M 50 280 Q 500 50 950 280"
            stroke="url(#arcStrokeGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className="hidden md:block"
            opacity="1"
          />
          {/* Center - thickest and brightest */}
          <path
            d="M 50 280 Q 500 50 950 280"
            stroke="url(#arcStrokeGradient)"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
            className="hidden md:block"
            opacity="1"
          />
          
          {/* Elegant Professional Arc - Mobile */}
          <g className="block md:hidden">
            {/* Glow halo layers */}
            <path
              d="M 50 280 Q 500 50 950 280"
              stroke="#ff7b00"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              opacity="0.25"
              filter="url(#powerfulGlowMobile)"
            />
            <path
              d="M 50 280 Q 500 50 950 280"
              stroke="#ff8c42"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
              opacity="0.35"
              filter="url(#powerfulGlowMobile)"
            />
            <path
              d="M 50 280 Q 500 50 950 280"
              stroke="#ff8c42"
              strokeWidth="9"
              fill="none"
              strokeLinecap="round"
              opacity="0.45"
              filter="url(#powerfulGlowMobile)"
            />
            {/* Center intense glow */}
            <path
              d="M 50 280 Q 500 50 950 280"
              stroke="#ff9d2e"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
              opacity="0.75"
              filter="url(#powerfulGlowMobile)"
            />
          </g>
          
          {/* Main arc stroke - Mobile */}
          <path
            d="M 50 280 Q 500 50 950 280"
            stroke="url(#arcStrokeGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            className="block md:hidden"
            opacity="0.9"
          />
          <path
            d="M 50 280 Q 500 50 950 280"
            stroke="url(#arcStrokeGradient)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            className="block md:hidden"
            opacity="0.95"
          />
          <path
            d="M 50 280 Q 500 50 950 280"
            stroke="url(#arcStrokeGradient)"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
            className="block md:hidden"
            opacity="1"
          />
          {/* Center - thickest */}
          <path
            d="M 50 280 Q 500 50 950 280"
            stroke="url(#arcStrokeGradient)"
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
            className="block md:hidden"
            opacity="1"
          />
          
          {/* Center point glow spreading downward */}
          <circle
            cx="500"
            cy="50"
            r="4"
            fill="#ff9d2e"
            className="hidden md:block"
            filter="url(#centerDownwardGlowDesktop)"
            opacity="1"
          />
          <circle
            cx="500"
            cy="50"
            r="3"
            fill="#ff9d2e"
            className="block md:hidden"
            filter="url(#centerDownwardGlowMobile)"
            opacity="1"
          />
        </svg>
      </div>
    </section>
  );
};

