"use client"

import Contact from "@/components/Esg/Contact"
import Footer from "@/components/Esg/Footer"
import OurExpertise from "@/components/Reporting/OurExpertise"
import ESGReporting from "@/components/Reporting/ESGReporting"
import { useEffect } from "react"
import AOS from "aos"
import Seo from "@/components/SeoComponents/Seo"
import { usePathname } from "next/navigation"

const page = () => {
  useEffect(() => {
    AOS.init({
      delay: 0,
      duration: 400,
      easing: "ease",
    })
  })

  const pathname = usePathname()
  const title = "ESG Consulting and Reporting"
  const description =
    "Our dedicated team provides comprehensive sustainability and ESG consulting to help your business achieve its environmental, social, and governance objectives efficiently. "
  const path = `${pathname}`
  const metaImage = ""

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />

      <div className="bg-[#E6F7F2] relative text-center mt-16">
        {/* Background Illustration */}
        <div className="absolute inset-0 ">
          {/* Mobile Image (Visible on small screens, hidden on larger screens) */}
          <img
            src="/reporting/Reportin-mob-img.png"
            alt="Background Illustration"
            className="w-full h-[100vh] block sm:hidden "
            
          />

          {/* Desktop Image (Hidden on small screens, visible on larger screens) */}
          <img
            src="/reporting/ReportingBanner.png"
            alt="Background Illustration"
            className="w-full h-full hidden sm:block"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto text-center flex flex-col justify-between w-full h-[100vh]  ">
          {/* Top content in the first 20% */}
          <div className=" mt-28 lg:mt-32 ">
            <h2 className="text-[25px] md:text-[45px] ">
              Enhance Your ESG Strategy with
            </h2>
            <span className="text-[25px] md:text-[45px] font-bold ">
              Catalyst Group’s Sustainability Reporting Services
            </span>
          </div>

          {/* Bottom content in the last 20% */}
          <div className=" mt-8 lg:mb-[108px]  pb-4 hidden lg:block">
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
          {/* {mobile} */}
          {/* Mobile Content */}
          <div className=" block lg:hidden  ">
            <p className="text-2xl font-semibold px-3">
              Comprehensive ESG Solutions Tailored for Enhanced Corporate
              Sustainability
            </p>
            <p className="text-white text-md lg:text-lg px-3  text-center pb-5 ">
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
