"use client"

import Contact from "@/components/Esg/Contact"
import Footer from "@/components/Esg/Footer"
import OurExpertise from "@/components/Reporting/OurExpertise"
import ESGReporting from "@/components/Reporting/ESGReporting"
import { useEffect } from "react"
import AOS from "aos"

const page = () => {
  useEffect(() => {
    AOS.init({
      delay: 0,
      duration: 400,
      easing: "ease",
    })
  })

  return (
    <>
      <div className="bg-[#E6F7F2] relative text-center mt-16 w-full h-[100vh]">
        {/* Background Illustration */}
        <div className="absolute inset-0">
          <img
            src="/reporting/ReportingBanner.png"
            alt="Background Illustration"
            className="w-full h-full "
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto text-center flex flex-col justify-between w-full h-full ">
          {/* Top content in the first 20% */}
          <div className=" mt-36 lg:mt-32 ">
            <h2 className="text-[28px] md:text-[45px] ">
              Enhance Your ESG Strategy with
            </h2>
            <span className="text-[28px] md:text-[45px] font-bold ">
              Catalyst Group’s Sustainability Reporting Services
            </span>
          </div>

          {/* Bottom content in the last 20% */}
          <div className=" mt-8 lg:mb-[108px]  pb-4 ">
            <p className="text-xl md:text-3xl mt-6 font-semibold pt-8 px-2">
              Comprehensive ESG Solutions Tailored for Enhanced Corporate
              Sustainability
            </p>
            <p className="text-white mt-4 text-md lg:text-lg px-2 max-w-5xl mx-auto">
              Catalyst Group specializes in elevating your Environmental,
              Social, and Governance (ESG) reporting and strategies. With our
              expert advisory services and cutting-edge tools, we ensure that
              your business not only complies with current regulations but also
              harnesses ESG initiatives for enhanced operational efficiency and
              profitability.
            </p>
          </div>
        </div>
      </div>
      
      <OurExpertise />
      <ESGReporting />

      <Contact />
      <Footer />
    </>
  )
}

export default page
