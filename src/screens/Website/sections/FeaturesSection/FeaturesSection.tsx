import { Card, CardContent } from "../../../../components/ui/card";
import { useScrollReveal } from "../../../../hooks/useScrollReveal";

const featuresData = [
  {
    id: 1,
    icon: "/orange.png",
    bgColor: "bg-[#fa6b24]",
    title: "Multi-Template & Multi-Language Support",
    description:
      "Enables developers to work across different technology stacks with a unified command interface.",
    gradientClass:
      "bg-gradient-to-br from-[rgba(250,108,37,0.15)] via-[rgba(139,69,19,0.1)] to-[rgba(20,17,16,0.15)]",
    position: "top-left",
  },
  {
    id: 2,
    icon: "/blue.png",
    bgColor: "bg-[#3f55b1]",
    title: "Interactive Configuration & Prompting",
    description:
      "Provides a user-friendly experience and minimizes errors from manual configuration.",
    gradientClass:
      "bg-gradient-to-br from-[rgba(63,85,177,0.15)] via-[rgba(47,62,130,0.1)] to-[rgba(20,17,16,0.15)]",
    position: "top-right",
  },
  {
    id: 3,
    icon: "/red.png",
    bgColor: "bg-[#b13f40]",
    title: "Component & Module Generation",
    description:
      "Significantly speeds up repetitive coding tasks and enforces best practices.",
    gradientClass:
      "bg-gradient-to-br from-[rgba(177,63,64,0.15)] via-[rgba(139,49,50,0.1)] to-[rgba(20,17,16,0.15)]",
    position: "bottom-left",
  },
  {
    id: 4,
    icon: "/yellow.png",
    bgColor: "bg-[#b19e3f]",
    title: "Extensible Post-Processing Pipeline",
    description:
      "Delivers a fully functional, ready-to-code project immediately after generation.",
    gradientClass:
      "bg-gradient-to-br from-[rgba(177,158,63,0.15)] via-[rgba(139,124,49,0.1)] to-[rgba(20,17,16,0.15)]",
    position: "bottom-right",
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black min-h-screen py-8 md:py-12 lg:py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[140px] flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1300px] mx-auto relative flex items-center justify-center">
        {/* Grid container for 2x2 layout - centered with horizontal spacing only */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-x-[180px] lg:gap-y-0 relative z-10">
          {featuresData.map((feature) => {
            const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
            return (
            <Card
              key={feature.id}
              ref={ref}
              className={`relative h-[280px] sm:h-[300px] lg:h-[320px] border-0 rounded-2xl overflow-visible ${feature.gradientClass} transition-all duration-700 ease-out ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              } hover:scale-105 hover:shadow-[0_0_30px_rgba(250,107,36,0.2)]`}
              style={{ transitionDelay: `${feature.id * 0.1}s` }}
            >
              {/* Orange line on right border for card 1 - center bright, fading at edges */}
              {feature.id === 1 && (
                <div className="absolute right-0 top-0 bottom-0 w-[1px] hidden lg:block z-10">
                  <div 
                    className="absolute inset-0 bg-gradient-to-b from-[rgba(250,108,37,0.3)] via-[rgba(250,108,37,0.7)] via-[rgba(250,108,37,1)] via-[rgba(250,108,37,0.7)] to-[rgba(250,108,37,0.3)]"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(250,108,37,0.3) 0%, rgba(250,108,37,0.7) 25%, rgba(250,108,37,1) 50%, rgba(250,108,37,0.7) 75%, rgba(250,108,37,0.3) 100%)',
                      boxShadow: '0 0 10px rgba(250,108,37,0.8), 0 0 20px rgba(250,108,37,0.5), 0 0 30px rgba(250,108,37,0.3)',
                      filter: 'blur(1px)'
                    }}
                  ></div>
                </div>
              )}
              {/* Orange line on top border for card 4 - center bright, fading at edges */}
              {feature.id === 4 && (
                <div className="absolute top-0 left-0 right-0 h-[1px] hidden lg:block z-10">
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to right, rgba(250,108,37,0.3) 0%, rgba(250,108,37,0.7) 25%, rgba(250,108,37,1) 50%, rgba(250,108,37,0.7) 75%, rgba(250,108,37,0.3) 100%)',
                      boxShadow: '0 0 10px rgba(250,108,37,0.8), 0 0 20px rgba(250,108,37,0.5), 0 0 30px rgba(250,108,37,0.3)',
                      filter: 'blur(1px)'
                    }}
                  ></div>
                </div>
              )}
              <CardContent className="flex items-center justify-center h-full p-4 sm:p-5">
                <div className="flex flex-col w-full max-w-[360px] items-center gap-4 sm:gap-5 lg:gap-6 px-2 sm:px-4">
                  <div
                    className={`relative w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] lg:w-[70px] lg:h-[70px] ${feature.bgColor} rounded-[12px] overflow-hidden flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-6`}
                  >
                    <img
                      className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] lg:w-[28px] lg:h-[28px] object-contain transition-transform duration-300"
                      alt={feature.title}
                      src={feature.icon}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-[18px] sm:text-[20px] lg:text-[24px] text-center tracking-[-0.48px] leading-[24px] sm:leading-[28px] lg:leading-[31.2px]">
                      {feature.title}
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffff99] text-[14px] sm:text-[16px] lg:text-[18px] text-center tracking-[-0.36px] leading-[20px] sm:leading-[22px] lg:leading-[23.4px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>

        {/* Central glowing 'S' logo image - perfectly centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden lg:flex items-center justify-center">
          <img
            className="w-[180px] h-[180px] object-contain"
            alt="ScaffoldGen Logo"
            src="/shiningS.png"
          />
        </div>

      </div>
    </section>
  );
};
