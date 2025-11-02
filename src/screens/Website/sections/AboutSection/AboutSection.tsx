import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

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

export const AboutSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-2.5 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[140px] py-16 md:py-20 lg:py-24 w-full">
      <Card className="flex items-start justify-center gap-2 p-[38px] w-full bg-black rounded-[32px] shadow-[14px_22px_58px_#fa6d231f,57px_89px_106px_#fa6d231a,127px_201px_143px_#fa6d230f,226px_357px_169px_#fa6d2305,354px_558px_185px_transparent] border-0">
        <CardContent className="flex flex-col lg:flex-row items-start gap-2 p-0 w-full">
          <div className="flex flex-col items-start gap-[26px] flex-1">
            <h2 className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#d6d2cd] text-[37px] tracking-[0] leading-[27.9px]">
              About ScaffoldGen CLI
            </h2>

            <p className="w-full max-w-[657px] [font-family:'Inter',Helvetica] font-normal text-[#969696] text-xl tracking-[0] leading-[30px]">
              Our CLI tool is a powerful and versatile command-line interface
              that helps developers streamline their workflow and boost their
              productivity. With a wide range of features and customization
              options, it&apos;s the perfect tool for any developer looking to
              optimize their development process.
            </p>

            <Button className="inline-flex items-center justify-center gap-2.5 px-[18px] py-3 bg-[#fa6b24] rounded-lg hover:bg-[#fa6b24]/90 h-auto">
              <span className="[font-family:'Inter',Helvetica] font-bold text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                Learn More
              </span>
            </Button>
          </div>

          <div className="relative w-full max-w-[730px] h-[551.34px] rounded-[15.37px] overflow-hidden bg-[linear-gradient(316deg,rgba(0,0,0,1)_0%,rgba(31,31,31,1)_100%)]">
            <div className="absolute top-[105px] left-14 w-[1077px] h-[664px] bg-[#131920] rounded-[17.37px] border-[1.74px] border-solid shadow-[0px_0px_8.69px_#bebebe33]">
              <div className="absolute top-14 left-0 w-[1077px] h-[642px] bg-black" />

              <div className="flex flex-col w-[1032px] items-start gap-[15.84px] absolute top-[85px] left-[calc(50.00%_-_514px)]">
                <div className="relative w-[262.67px] h-[26px]">
                  <div className="absolute top-0 left-0 text-[#4eacf9] [font-family:'Source_Code_Pro',Helvetica] font-bold text-[20.8px] tracking-[0] leading-[normal]">
                    ~
                  </div>

                  <div className="absolute top-0 left-[15px] text-[#80d440] [font-family:'Source_Code_Pro',Helvetica] font-bold text-[20.8px] tracking-[0] leading-[normal]">
                    &gt;
                  </div>

                  <div className="absolute top-0 left-8 [font-family:'Source_Code_Pro',Helvetica] font-normal text-transparent text-[20.8px] tracking-[0] leading-[normal]">
                    <span className="font-medium text-[#d1cd74]">cd</span>
                    <span className="font-medium text-[#eae6d8]">
                      {" "}
                      web_development
                    </span>
                  </div>
                </div>

                {terminalCommands.slice(1).map((cmd, index) => (
                  <div key={index} className="relative w-full h-[26px]">
                    <div className="absolute top-0 left-0 text-[#4eacf9] [font-family:'Source_Code_Pro',Helvetica] font-bold text-[20.8px] tracking-[0] leading-[normal]">
                      {cmd.prompt}
                    </div>

                    <div className="absolute top-px left-[15px] text-[#80d440] [font-family:'Source_Code_Pro',Helvetica] font-bold text-[20.8px] tracking-[0] leading-[normal]">
                      {cmd.arrow}
                    </div>

                    <div
                      className={`absolute top-px left-8 [font-family:'Source_Code_Pro',Helvetica] ${cmd.commandClass} text-[20.8px] tracking-[0] leading-[normal]`}
                    >
                      {cmd.command}
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute top-4 left-[calc(50.00%_-_59px)] [font-family:'Arial-Bold',Helvetica] font-bold text-[#a3a5a8] text-center whitespace-nowrap text-[20.8px] tracking-[0] leading-[normal]">
                scaffoldgen
              </div>

              <div className="absolute left-7 top-4 w-6 h-6 bg-[#ed6a5e] rounded-[12.16px]" />

              <div className="absolute left-[66px] top-4 w-6 h-6 bg-[#f4bf4f] rounded-[12.16px]" />

              <div className="absolute left-[104px] top-4 w-6 h-6 bg-[#61c554] rounded-[12.16px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

