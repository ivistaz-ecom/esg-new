import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurInitiatives = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const initiatives = [
    {
      name: "Shonya",
      description: "Net Zero solutions for brands and MSMEs",
      imgSrc: "/SHOONYA logo.svg",
      imgAlt: "Shonya Logo",
    },
    {
      name: "Swasti",
      description: "Ensuring everyday wellbeing for all",
      imgSrc: "/swasti.png",
      imgAlt: "Swasti Logo",
    },
    {
      name: "UPFRONT",
      description: "Making wellbeing a reality for the workforce",
      imgSrc: "/Upfront-log.png",
      imgAlt: "UPFRONT Logo",
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-7">
      {/* Header Button */}
      <div className="flex justify-center mb-12" data-aos="fade-up">
        <button className="bg-mint-100 text-[#632E88] px-8 py-3 rounded-full text-2xl hover:bg-mint-200 transition-colors border bg-[#D0EAE2]">
          Our Initiatives
        </button>
      </div>

      {/* Single Row Three Column Layout */}
      <div className="lg:flex flex-row justify-between gap-14">
        {initiatives.map((initiative, index) => (
          <div key={index} className="flex-1 flex flex-col items-center" data-aos="fade-up" data-aos-delay={index * 200}>
            {/* Logo Image with Border */}
            <div className="border-4 border-emerald-100 rounded-2xl p-4 flex justify-center w-full">
              <img 
                src={initiative.imgSrc} 
                alt={initiative.imgAlt}
                className="h-24 w-44 object-contain"
              />
            </div>

            {/* Description Outside of the Border */}
            <p className="text-gray-700 text-center mt-4 pb-2 text-lg">
              {initiative.description}
            </p>
          </div>
        ))}
      </div>

      {/* Know More Button */}
      <div className="flex justify-center mt-8" data-aos="fade-up">
        <button className="bg-[#7F3F97] text-white px-8 py-2 rounded-md hover:bg-[#9254a9] transition-colors">
          Know More
        </button>
      </div>
    </div>
  );
};

export default OurInitiatives;
