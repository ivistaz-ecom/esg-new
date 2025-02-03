"use client";

import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Esg/Contact";
import Footer from "@/components/Esg/Footer";
import Heading from "@/components/Heading/Heading";
import BusinessBenefits from "@/components/Solutions/BusinessBenefits";
import Solutions from "@/components/Solutions/Solutions";
import StepImplementation from "@/components/Solutions/StepImplementation";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import Accordion from "@/components/Solutions/Accordion";

const page = () => {
  useEffect(() => {
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease",
    });
  });

  const bannerImageUrl = "/banner/banner03.png";
  const mobileBannerUrl = "/banner/mobileBanner03.jpg";
  const bannerTitle = "Solutions";
  const bannerDesc =
    "Our suite of ESG services and solutions simplifies complex frameworks, aligning business practices with global standards while promoting a positive and inclusive work environment.";
  const title = "";
  const desc = "";

  return (
    <>
      {/* <Header /> */}
      <Banner
        bannerImageUrl={bannerImageUrl}
        bannerTitle={bannerTitle}
        bannerDesc={bannerDesc}
        mobileBannerUrl={mobileBannerUrl}
      />

      {/* <Heading title={title} /> */}
      <div className="flex justify-center px-4 md:px-0 container mx-auto mb-10 -mt-12">
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
      {/* 
      <div className="flex justify-center mb-16" data-aos="fade-up">
        <div className="flex justify-center">
          <Image
            src="/solutions/image01.png"
            width={680}
            height={674}
            alt="solutions"
            className="w-4/5"
          />
        </div>
      </div> */}
      <Accordion />
      {/* <Solutions /> */}

      <BusinessBenefits />
      <StepImplementation />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
