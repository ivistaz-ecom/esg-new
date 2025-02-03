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
      duration: 400, // values from 0 to 3000, with step 50ms
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
        <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col justify-between h-full">
          {/* Top content in the first 20% */}
          <div className=" mt-20">
            <h2 className="text-2xl md:text-4xl">
              Enhance Your ESG Strategy with
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mt-2">
              Catalyst Group’s Sustainability Reporting Services
            </h1>
          </div>

          {/* Bottom content in the last 20% */}
          <div className=" mt-10 lg:mb-36 pb-4">
            <p className="text-xl md:text-3xl mt-6 font-semibold pt-8">
              Comprehensive ESG Solutions Tailored for Enhanced Corporate
              Sustainability
            </p>
            <p className="text-white mt-4 text-lg">
              Catalyst Group specializes in elevating your Environmental,
              Social, and Governance (ESG) reporting and strategies. With our
              expert advisory services and cutting-edge tools, we ensure that
              your business not only complies with current regulations but also
              harnesses ESG initiatives for enhanced operational efficiency and
              profitability.
            </p>
          </div>
        </div>

        {/* ESG Cards */}
      </div>

      {/* <Reporting /> */}
      <OurExpertise />
      <ESGReporting />

      <Contact />
      <Footer />
    </>
  )
}

export default page
