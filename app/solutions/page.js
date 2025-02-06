"use client";

import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Esg/Contact";
import Footer from "@/components/Esg/Footer";
import BusinessBenefits from "@/components/Solutions/BusinessBenefits";
import Solutions from "@/components/Solutions/Solutions";
import StepImplementation from "@/components/Solutions/StepImplementation";
import Accordion from "@/components/Solutions/Accordion";

const page = () => {
  const bannerImageUrl = "/banner/Solution-Banner-04.png";
  const mobileBannerUrl = "/banner/Solution-Mobile-Banner-04.png";
  const bannerTitle = "Solutions";
  const bannerDesc =
    "Our suite of ESG services and solutions simplifies complex frameworks, aligning business practices with global standards while promoting a positive and inclusive work environment.";

  return (
    <>
      <Banner
        bannerImageUrl={bannerImageUrl}
        bannerTitle={bannerTitle}
        bannerDesc={bannerDesc}
        mobileBannerUrl={mobileBannerUrl}
      />

      <div className="flex justify-center px-4 md:px-0 container mx-auto mb-10 lg:-mt-28 pt-5">
        <div className="text-base md:text-lg lg:text-lg text-[#fff] text-center bg-[#622F88] md:p-8 p-5 rounded-lg">
          <p>
            From risk and opportunity assessments that highlight potential paths
            to sustainability, to double materiality that evaluates impact on
            and from your business, our approach supports meaningful integration
            of ESG principles.
          </p>
          <p className="pt-4">
            We will help you decarbonise operations which are vital for
            community health, while our capacity-building programs enhance both
            personal and organisational development.
          </p>
        </div>
      </div>
      
      <Accordion />
      <BusinessBenefits />
      <StepImplementation />
      <Contact />
      <Footer />
    </>
  );
};

export default page;