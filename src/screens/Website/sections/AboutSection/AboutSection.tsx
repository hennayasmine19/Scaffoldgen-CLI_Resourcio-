import { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useScrollReveal } from "../../../../hooks/useScrollReveal";
import { TypingEffect } from "../../../../components/ui/TypingEffect";

const terminalCommands = [
  {
    prompt: "~",
    arrow: ">",
    command: "cd web_development",
    commandClass: "font-medium text-[#d1cd74]",
    textClass: "font-medium text-[#eae6d8]",
  },
  {
    prompt: "~",
    arrow: ">",
    command:
      "scaffoldgen new **my-awesome-app** --template next-ts --style tailwind",
    commandClass: "font-medium text-[#d1cd74]",
    textClass: "",
  },
  {
    prompt: "~",
    arrow: ">",
    command:
      "scaffoldgen generate **component** UserProfile --type rfc --path src/components",
    commandClass: "font-medium text-[#d1cd74]",
    textClass: "",
  },
  {
    prompt: "~",
    arrow: ">",
    command:
      "scaffoldgen create **route** auth --handler **login,register** --method post",
    commandClass: "font-medium text-[#d1cd74]",
    textClass: "",
  },
  {
    prompt: "~",
    arrow: ">",
    command: "scaffoldgen config set **default-lang** python",
    commandClass: "font-medium text-[#d1cd74]",
    textClass: "",
  },
];

const STORAGE_KEY = "aboutSection_commandsCompleted";

export const AboutSection = (): JSX.Element => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [completedCommands, setCompletedCommands] = useState<number[]>([]);
  const [allCommandsCompleted, setAllCommandsCompleted] = useState(false);

  // Check if commands were already completed in a previous session
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setAllCommandsCompleted(true);
      // Mark all commands as completed
      setCompletedCommands(terminalCommands.map((_, index) => index));
      setCurrentCommandIndex(terminalCommands.length - 1);
    }
  }, []);

  // Run animation if not already completed
  useEffect(() => {
    if (!isVisible || allCommandsCompleted) return;
    
    const commandDelay = 2000;
    const timers: ReturnType<typeof setTimeout>[] = [];
    
    terminalCommands.forEach((_, index) => {
      const timer = setTimeout(() => {
        setCurrentCommandIndex(index);
      }, index * commandDelay);
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [isVisible, allCommandsCompleted]);

  const handleCommandComplete = (index: number) => {
    setCompletedCommands(prev => {
      const newCompleted = [...prev, index];
      
      // Check if all commands are completed
      if (newCompleted.length === terminalCommands.length && !allCommandsCompleted) {
        setAllCommandsCompleted(true);
        localStorage.setItem(STORAGE_KEY, "true");
      }
      
      return newCompleted;
    });
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-2.5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[140px] py-8 sm:py-12 md:py-16 lg:py-24 w-full">
      <Card ref={ref} className={`flex items-start justify-center gap-2 p-4 sm:p-6 md:p-8 lg:p-[38px] w-full bg-black rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] shadow-[14px_22px_58px_#fa6d231f,57px_89px_106px_#fa6d231a,127px_201px_143px_#fa6d230f,226px_357px_169px_#fa6d2305,354px_558px_185px_transparent] border-0 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } hover:shadow-[14px_22px_58px_#fa6d232f,57px_89px_106px_#fa6d232a]`}>
        <CardContent className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-2 p-0 w-full">
          <div className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-[26px] flex-1 w-full lg:w-auto">
            <h2 className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#d6d2cd] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[37px] tracking-[0] leading-[27.9px]">
              About ScaffoldGen CLI
            </h2>

            <p className="w-full max-w-[657px] [font-family:'Inter',Helvetica] font-normal text-[#969696] text-base sm:text-lg lg:text-xl tracking-[0] leading-[24px] sm:leading-[27px] lg:leading-[30px]">
              Our CLI tool is a powerful and versatile command-line interface
              that helps developers streamline their workflow and boost their
              productivity. With a wide range of features and customization
              options, it&apos;s the perfect tool for any developer looking to
              optimize their development process.
            </p>

            <Button className="inline-flex items-center justify-center gap-2.5 px-[18px] py-3 bg-[#fa6b24] rounded-lg hover:bg-[#fa6b24]/90 h-auto transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,107,36,0.5)] w-full sm:w-auto">
              <span className="[font-family:'Inter',Helvetica] font-bold text-white text-base sm:text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                Learn More
              </span>
            </Button>
          </div>

          <div className="relative w-full lg:max-w-[730px] h-[300px] sm:h-[400px] md:h-[480px] lg:h-[551.34px] rounded-[15.37px] overflow-hidden bg-[linear-gradient(316deg,rgba(0,0,0,1)_0%,rgba(31,31,31,1)_100%)] mt-4 lg:mt-0">
            <div className="absolute top-[50px] sm:top-[70px] md:top-[90px] lg:top-[105px] left-2 sm:left-4 md:left-8 lg:left-14 w-[calc(100%-16px)] sm:w-[calc(100%-32px)] md:w-[calc(100%-64px)] lg:w-[1077px] h-[calc(100%-100px)] sm:h-[calc(100%-140px)] md:h-[calc(100%-180px)] lg:h-[664px] bg-[#131920] rounded-[17.37px] border-[1.74px] border-solid shadow-[0px_0px_8.69px_#bebebe33]">
              <div className="absolute top-8 sm:top-10 md:top-12 lg:top-14 left-0 w-full h-[calc(100%-56px)] sm:h-[calc(100%-80px)] md:h-[calc(100%-96px)] lg:h-[642px] bg-black" />

              <div className="flex flex-col w-[calc(100%-32px)] sm:w-[calc(100%-64px)] md:w-[calc(100%-96px)] lg:w-[1032px] items-start gap-2 sm:gap-3 md:gap-4 lg:gap-[15.84px] absolute top-[40px] sm:top-[50px] md:top-[65px] lg:top-[85px] left-1/2 -translate-x-1/2 lg:left-[calc(50.00%_-_514px)] lg:translate-x-0">
                {terminalCommands.map((cmd, index) => {
                  // If all commands completed, show all immediately
                  const shouldShowAll = allCommandsCompleted || completedCommands.includes(index);
                  const shouldType = !allCommandsCompleted && isVisible && currentCommandIndex === index && !completedCommands.includes(index);
                  // If all commands are completed, show all; otherwise check if current or past command
                  const isPending = !allCommandsCompleted && currentCommandIndex < index;

                  return (
                    <div key={index} className={`relative w-full h-[26px] transition-opacity duration-300 ${
                      allCommandsCompleted || !isPending ? "opacity-100" : "opacity-0"
                    }`}>
                      <div className="absolute top-0 left-0 text-[#4eacf9] [font-family:'Source_Code_Pro',Helvetica] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20.8px] tracking-[0] leading-[normal]">
                        {cmd.prompt}
                      </div>

                      <div className="absolute top-0 left-[10px] sm:left-[12px] md:left-[14px] lg:left-[15px] text-[#80d440] [font-family:'Source_Code_Pro',Helvetica] font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20.8px] tracking-[0] leading-[normal]">
                        &gt;
                      </div>

                      <div
                        className={`absolute top-0 left-6 sm:left-7 md:left-8 [font-family:'Source_Code_Pro',Helvetica] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20.8px] tracking-[0] leading-[normal] break-words max-w-[calc(100%-48px)] sm:max-w-[calc(100%-56px)] md:max-w-[calc(100%-64px)] lg:max-w-none`}
                      >
                        {allCommandsCompleted ? (
                          // If all commands completed, always show
                          <span className={cmd.commandClass}>{cmd.command}</span>
                        ) : shouldShowAll ? (
                          <span className={cmd.commandClass}>{cmd.command}</span>
                        ) : shouldType ? (
                          <TypingEffect
                            text={cmd.command}
                            speed={30}
                            delay={0}
                            onComplete={() => handleCommandComplete(index)}
                            className={cmd.commandClass}
                          />
                        ) : (
                          <span className={cmd.commandClass} style={{ opacity: 0 }}>{cmd.command}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="absolute top-2 sm:top-3 md:top-3.5 lg:top-4 left-1/2 -translate-x-1/2 lg:left-[calc(50.00%_-_59px)] lg:translate-x-0 [font-family:'Arial-Bold',Helvetica] font-bold text-[#a3a5a8] text-center whitespace-nowrap text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20.8px] tracking-[0] leading-[normal]">
                scaffoldgen
              </div>

              <div className="absolute left-2 sm:left-3 md:left-4 lg:left-7 top-2 sm:top-3 md:top-3.5 lg:top-4 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-[#ed6a5e] rounded-[12.16px]" />

              <div className="absolute left-[32px] sm:left-[44px] md:left-[52px] lg:left-[66px] top-2 sm:top-3 md:top-3.5 lg:top-4 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-[#f4bf4f] rounded-[12.16px]" />

              <div className="absolute left-[52px] sm:left-[72px] md:left-[88px] lg:left-[104px] top-2 sm:top-3 md:top-3.5 lg:top-4 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-[#61c554] rounded-[12.16px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

