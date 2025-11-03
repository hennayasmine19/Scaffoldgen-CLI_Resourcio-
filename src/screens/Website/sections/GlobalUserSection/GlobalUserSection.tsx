import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const backgroundPhones = [
  {
    top: "top-[250px]",
    left: "left-[-15%]",
    count: "15K",
    percentage: "3.4%",
    opacity: 0.5,
    bgColor: "bg-[#3a3a3a]",
    zIndex: 1,
    rotate: "0deg",
    translateX: "0%",
    icon: "/box.png",
  },
  {
    top: "top-[150px]",
    left: "left-[12%]",
    count: "15K",
    percentage: "3.4%",
    opacity: 0.5,
    bgColor: "bg-[rgba(171,169,169,0.6)]",
    zIndex: 2,
    rotate: "0deg",
    translateX: "0%",
    icon: "/box.png",
  },
  {
    top: "top-[10px]",
    left: "left-[50%]",
    count: "25K",
    percentage: "Total Shipment",
    opacity: 1,
    bgColor: "bg-[#b0b0b0]",
    zIndex: 10,
    rotate: "0deg",
    isCentral: true,
    translateX: "-50%",
    icon: "/box.png",
  },
  {
    top: "top-[150px]",
    right: "right-[12%]",
    count: "52K",
    percentage: "6.2%",
    opacity: 0.5,
    bgColor: "bg-[rgba(171,169,169,0.6)]",
    zIndex: 2,
    rotate: "0deg",
    translateX: "0%",
    icon: "/box.png",
  },
  {
    top: "top-[250px]",
    right: "right-[-15%]",
    count: "52K",
    percentage: "6.2%",
    opacity: 0.5,
    bgColor: "bg-[#3a3a3a]",
    zIndex: 1,
    rotate: "0deg",
    translateX: "0%",
    icon: "/box.png",
  },
];

const statsCards = [
  {
    top: "top-[100px]",
    left: "left-[24%]",
    bgColor: "bg-[#fcc9b0]",
    count: "10K",
    label: "Active Projects",
    percentage: "2.4%",
    graphColor: "bg-blue-100",
  },
  {
    top: "top-[280px]",
    left: "left-[55%]",
    bgColor: "bg-[#fed3bd]",
    count: "25K",
    label: "Total Projects",
    percentage: "5.2%",
    graphColor: "bg-orange-100",
  },
];

export const GlobalUserSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[140px] py-8 md:py-12 lg:py-16 overflow-hidden bg-black">
      {/* Header Section */}
      <div className="flex flex-col items-start gap-2 w-full max-w-[1520px] mb-4 sm:mb-6 lg:mb-8 z-10">
        <Badge
          variant="outline"
          className="h-[32px] sm:h-[36px] lg:h-[38px] px-3 sm:px-4 py-[7px] sm:py-[8px] lg:py-[9px] rounded-[50px] border-[#ffffff1a] bg-white/90 backdrop-blur-sm"
        >
          <span className="[font-family:'Urbanist',Helvetica] font-medium text-black text-sm sm:text-base tracking-[-0.32px]">
            Our Solutions
          </span>
        </Badge>
        <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[37px] tracking-[0.04px] leading-tight">
          Global Users
        </h2>
      </div>

      {/* Component Box Container - Dark grey rounded box containing all phones */}
      <div className="relative w-full max-w-[1520px] flex-1 flex items-center justify-center my-4 sm:my-6 lg:my-8">
        <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[520px] rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] bg-[#2B2623] border border-gray-700/50 shadow-[0px_0px_80px_rgba(198,133,100,0.2)] overflow-hidden"
             style={{
               boxShadow: "0px 0px 100px rgba(198,133,100,0.25), inset 0 0 150px rgba(198,133,100,0.08), 0 8px 32px rgba(0,0,0,0.5)"
             }}>
          {/* Shining/Glossy effect with brown */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C68564]/15 via-transparent to-transparent pointer-events-none rounded-[40px]"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-transparent via-[#C68564]/12 to-transparent pointer-events-none rounded-[40px]"></div>
          
          {/* Container for all phones - positioned relative to component box */}
          <div className="relative w-full h-full overflow-hidden">
            {/* All 5 phones arranged in fanned-out manner */}
            {backgroundPhones.map((phone, index) => (
              <div
                key={index}
                className={`absolute ${phone.top} ${phone.left || ''} ${phone.right || ''} w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[280px] h-[240px] sm:h-[300px] md:h-[380px] lg:h-[450px] xl:h-[550px] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]`}
                style={{ 
                  opacity: phone.opacity,
                  zIndex: phone.zIndex,
                  transform: `rotate(${phone.rotate}) translateX(${phone.translateX})`,
                }}
              >
                {phone.isCentral ? (
                  // Central phone - light gray, most prominent
                  <div className="absolute inset-0 rounded-[30px] bg-[#b0b0b0] border-[8px] border-black">
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-5 md:h-6 bg-black rounded-b-2xl z-10"></div>
                    
                    {/* Time - Top Left */}
                    <div className="absolute top-2 left-4 text-white text-xs font-medium z-10">9:41</div>
                    
                    {/* Screen content */}
                    <div className="absolute inset-0 bg-gray-400 rounded-[28px] mt-2 mx-1"></div>
                    
                    {/* Signal, WiFi, Battery Icons - Top Right */}
                    <div className="absolute top-2 right-4 flex items-center gap-1 z-20">
                      {/* Signal bars */}
                      <div className="flex items-end gap-[2px]">
                        <div className="w-[3px] h-[4px] bg-white rounded-sm"></div>
                        <div className="w-[3px] h-[6px] bg-white rounded-sm"></div>
                        <div className="w-[3px] h-[8px] bg-white rounded-sm"></div>
                        <div className="w-[3px] h-[10px] bg-white rounded-sm"></div>
                      </div>
                      {/* WiFi icon */}
                      <div className="relative w-3 h-3">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 0C3.24 0 0.9 1.5 0 3.6L6 10.8L12 3.6C11.1 1.5 8.76 0 6 0Z" fill="white"/>
                          <circle cx="6" cy="8.4" r="1.2" fill="white"/>
                        </svg>
                      </div>
                      {/* Battery icon */}
                      <div className="relative w-[18px] h-[9px] border border-white rounded-sm">
                        <div className="absolute top-[2px] left-[2px] w-[12px] h-[5px] bg-white rounded-sm"></div>
                        <div className="absolute top-[3px] right-[-2px] w-[2px] h-[3px] bg-white rounded-r-sm"></div>
                      </div>
                    </div>
                    
                    {/* Stats Box inside phone (if needed, though cards overlay this) */}
                    {phone.count && (
                      <div className={`absolute ${phone.isCentral ? 'top-[55%]' : 'top-1/2'} left-1/2 -translate-x-1/2 ${phone.isCentral ? '-translate-y-[10%]' : '-translate-y-1/2'} border border-white rounded-[12px] p-4 pb-8 z-10 w-[180px] sm:w-[220px] md:w-[260px] ${phone.isCentral ? 'h-[260px] sm:h-[280px] md:h-[300px]' : 'h-[100px] sm:h-[120px] md:h-[140px]'} relative`}>
                        {/* Oval circle with image above count */}
                        <div className={`absolute ${phone.isCentral ? 'top-8 md:top-10' : 'top-2'} left-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center overflow-hidden`}>
                          <img
                            className="w-5 h-5 md:w-6 md:h-6 object-contain"
                            alt="Icon"
                            src={phone.icon || "/box.png"}
                          />
                        </div>
                        <div className={`absolute ${phone.isCentral ? 'top-16 md:top-20' : 'top-12 md:top-14'} left-4 flex flex-col gap-1`}>
                          <div className="text-white text-2xl md:text-3xl font-bold leading-tight">
                            {phone.count}
                          </div>
                          {phone.isCentral && (
                            <div className="text-white text-xs md:text-sm font-medium">
                              {phone.percentage}
                            </div>
                          )}
                        </div>
                        <div className={`absolute ${phone.isCentral ? 'top-8' : 'top-4'} right-4 flex items-center gap-1`}>
                          <img
                            className="w-3 h-3"
                            alt="Trend up"
                            src="/a2.png"
                          />
                          <span className="text-xs font-medium" style={{ color: '#808080' }}>
                            {phone.isCentral ? "5.2%" : phone.percentage}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {/* Graph at bottom of phone screen - only for central phone */}
                    {phone.isCentral && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[190px] sm:w-[230px] md:w-[270px] z-10">
                        <img
                          className="w-full h-auto max-h-16 md:max-h-20 object-cover"
                          alt="Graph"
                          src="/w1.png"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  // Background phones - darker gray shades
                  <div className={`absolute inset-0 rounded-[30px] ${phone.bgColor} border border-gray-700/40`}>
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-5 md:h-6 bg-black/80 rounded-b-2xl"></div>
                    
                    {/* Time - Top Left */}
                    <div className="absolute top-2 left-4 text-white/60 text-xs font-medium z-10">9:41</div>
                    
                    {/* Signal, WiFi, Battery Icons - Top Right */}
                    <div className="absolute top-2 right-4 flex items-center gap-1 z-10">
                      {/* Signal bars */}
                      <div className="flex items-end gap-[2px]">
                        <div className="w-[3px] h-[4px] bg-white/60 rounded-sm"></div>
                        <div className="w-[3px] h-[6px] bg-white/60 rounded-sm"></div>
                        <div className="w-[3px] h-[8px] bg-white/60 rounded-sm"></div>
                        <div className="w-[3px] h-[10px] bg-white/60 rounded-sm"></div>
                      </div>
                      {/* WiFi icon */}
                      <div className="relative w-3 h-3">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 0C3.24 0 0.9 1.5 0 3.6L6 10.8L12 3.6C11.1 1.5 8.76 0 6 0Z" fill="white" fillOpacity="0.6"/>
                          <circle cx="6" cy="8.4" r="1.2" fill="white" fillOpacity="0.6"/>
                        </svg>
                      </div>
                      {/* Battery icon */}
                      <div className="relative w-[18px] h-[9px] border border-white/60 rounded-sm">
                        <div className="absolute top-[2px] left-[2px] w-[12px] h-[5px] bg-white/60 rounded-sm"></div>
                        <div className="absolute top-[3px] right-[-2px] w-[2px] h-[3px] bg-white/60 rounded-r-sm"></div>
                      </div>
                    </div>
                    
                    {/* Screen content */}
                    <div className="absolute inset-0 bg-gray-900/20 rounded-[28px] mt-2 mx-1"></div>
                    
                    {/* Stats Box inside phone */}
                    {phone.count && (
                      <div className={`absolute ${index === 0 || index === 1 || index === 3 || index === 4 ? 'top-[59%]' : 'top-1/2'} left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-400 rounded-[12px] p-4 z-10 w-[200px] sm:w-[220px] md:w-[260px] h-[100px] sm:h-[120px] md:h-[140px] relative`}>
                        {/* Oval circle with image above count */}
                        <div className="absolute top-2 left-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <img
                            className="w-5 h-5 md:w-6 md:h-6 object-contain"
                            alt="Icon"
                            src={phone.icon || "/box.png"}
                          />
                        </div>
                        <div className="absolute top-12 md:top-14 left-4 text-white text-2xl md:text-3xl font-bold leading-tight">
                          {phone.count}
                        </div>
                        <div className="absolute top-4 right-4 flex items-center gap-1">
                          <img
                            className="w-3 h-3 opacity-80"
                            alt="Trend up"
                            src="/a2.png"
                          />
                          <span className="text-xs font-medium" style={{ color: '#808080' }}>
                            {phone.percentage}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Stats cards floating over central phone */}
            {statsCards.map((card, index) => (
              <Card
                key={index}
                className={`absolute ${card.top} ${card.left} w-40 md:w-52 h-[110px] md:h-[136px] bg-white rounded-[18.64px] shadow-[0px_0px_62.13px_#00000014] overflow-hidden border-0 z-30`}
              >
                <CardContent className="p-0 relative h-full">
                  <div className="inline-flex items-center gap-[4.66px] absolute top-[75px] md:top-[103px] left-[120px] md:left-[153px]">
                    <img
                      className="relative w-[10px] md:w-[12.43px] h-[10px] md:h-[12.43px]"
                      alt="Vuesax linear trend"
                      src="/a1.png"
                    />
                    <div className="mt-[-0.78px] text-[#2baf47] text-[9px] md:text-[10.9px] tracking-[-0.22px] leading-[14.1px] [font-family:'Urbanist',Helvetica] font-medium whitespace-nowrap">
                      {card.percentage}
                    </div>
                  </div>

                  <div className="flex flex-col w-[90px] md:w-[113px] items-start absolute top-10 md:top-14 left-[15px] md:left-[19px]">
                    <div className="mt-[-0.78px] text-[#000019] text-[28px] md:text-[37.3px] tracking-[-0.75px] [font-family:'Urbanist',Helvetica] font-bold leading-[normal]">
                      {card.count}
                    </div>
                    <div className="[font-family:'Urbanist',Helvetica] font-medium text-[#00000099] text-[11px] md:text-[12.4px] tracking-[-0.25px] leading-[16.2px]">
                      {card.label}
                    </div>
                  </div>

                  <div
                    className={`${card.bgColor} flex w-6 h-6 md:w-7 md:h-7 items-center gap-[7.77px] p-[6px] md:p-[7.77px] absolute top-[15px] md:top-[19px] left-[15px] md:left-[19px] rounded-[13.98px]`}
                  >
                    <img
                      className="relative w-[10px] md:w-[12.43px] h-[10px] md:h-[12.43px]"
                      alt="Vuesax linear box"
                      src="/b1.png"
                    />
                  </div>

                  <img
                    className="absolute top-[14px] md:top-[18px] left-[95px] md:left-[122px] w-[55px] md:w-[70px] h-[32px] md:h-[42px]"
                    alt="Frame"
                    src="/w2.png"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative vectors */}
      
    </section>
  );
};

