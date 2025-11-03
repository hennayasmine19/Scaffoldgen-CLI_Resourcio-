import { useEffect, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { useScrollReveal } from "../../../../hooks/useScrollReveal";

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}

const StatCard = ({ value, suffix, label, isVisible }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(Math.ceil(increment * currentStep), value);
      setCount(newValue);

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(value);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <Card className="relative h-[220px] sm:h-[250px] md:h-[270px] lg:h-[280px] border-0 rounded-2xl overflow-hidden bg-gradient-to-br from-[rgba(250,108,37,0.12)] via-[rgba(139,69,19,0.08)] to-[rgba(20,17,16,0.15)] hover:from-[rgba(250,108,37,0.18)] hover:via-[rgba(139,69,19,0.12)] hover:to-[rgba(20,17,16,0.2)] transition-all duration-500">
      <CardContent className="flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8 gap-4 sm:gap-5 md:gap-6">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-[#fa6b24]/20 blur-3xl rounded-full"></div>
            <div className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold [font-family:'Clash_Display',sans-serif] text-transparent bg-clip-text bg-gradient-to-r from-[#fa6b24] to-[#ff8c42]">
              {count.toLocaleString()}
              <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl">{suffix}</span>
            </div>
          </div>
          <div className="h-[2px] w-20 sm:w-24 bg-gradient-to-r from-transparent via-[#fa6b24] to-transparent"></div>
          <p className="[font-family:'Inter',Helvetica] font-semibold text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center tracking-[-0.4px]">
            {label}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const statsData = [
  {
    id: 1,
    value: 25000,
    suffix: "+",
    label: "Active Developers",
    icon: "👥",
  },
  {
    id: 2,
    value: 500000,
    suffix: "+",
    label: "Projects Generated",
    icon: "🚀",
  },
  {
    id: 3,
    value: 98,
    suffix: "%",
    label: "Developer Satisfaction",
    icon: "⭐",
  },
  {
    id: 4,
    value: 150,
    suffix: "+",
    label: "Countries Worldwide",
    icon: "🌍",
  },
];

export const ImpactSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="relative w-full bg-black min-h-screen py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[140px] flex items-center justify-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fa6b24]/5 to-transparent pointer-events-none"></div>
      
      <div ref={ref} className="w-full max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className={`mb-10 sm:mb-14 md:mb-16 lg:mb-20 text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[-0.8px] leading-tight mb-4 sm:mb-5 lg:mb-6">
            Impact Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fa6b24] to-[#ff8c42]">
              Developers
            </span>
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#969696] text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto tracking-[-0.4px] leading-relaxed px-4">
            Join thousands of developers who are already building faster and smarter with ScaffoldGen CLI
          </p>
        </div>

        {/* Stats Grid - Each card on separate line */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {statsData.map((stat, index) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollReveal({ 
              threshold: 0.2,
              triggerOnce: true 
            });
            
            return (
              <div
                key={stat.id}
                ref={cardRef}
                className={`transition-all duration-700 ease-out ${
                  cardVisible 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="group relative">
                  <StatCard
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    isVisible={cardVisible}
                  />
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-[#fa6b24]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none"></div>
                  {/* Icon decoration */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#fa6b24]/20 to-[#ff8c42]/10 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                    {stat.icon}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#fa6b24]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#ff8c42]/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
};
