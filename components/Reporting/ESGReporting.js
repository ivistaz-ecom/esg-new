import React from "react"
import Image from "next/image" // Ensure Image is imported if using Next.js

const ESGReporting = () => {
  const item = {
    iconUrl: "/reporting/Streamline.jpg", // Replace with actual image path
    title: "ESG Reporting Icon",
  }

  return (
    <>
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Simplify Your ESG Reporting with
            <span className="text-green-600"> Our Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
          {[
            {
              title: "Accurate Validation",
              description:
                "Our rigorous data validation process ensures that your reports are reliable and compliant with all standards - BRSR, GRI, SASB & TCFD",
            },
            {
              title: "Auto-Sum Calculations",
              description:
                "Increase your operational efficiency with our automated calculation features",
            },
            {
              title: "Multiple Formats",
              description:
                "Our tools support outputs in both PDF and XBRL formats, ready for any regulatory or stakeholder review",
            },
            {
              title: "Concise Data Presentation",
              description:
                "We transform complex ESG data into clear, actionable insights, streamlining your internal and external communication",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-purple-100 p-4 rounded-lg h-36">
              <h3 className=" text-[#763A88] text-2xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 py-3">
            Streamline Your
            <span className="text-green-600"> Sustainability Journey</span>
          </h3>
          <p className="text-lg max-w-3xl mx-auto mt-2">
            Harness three decades of our expertise with the Sustainability
            Reporting Tool. Designed for corporates and MSMEs, this tool
            simplifies your sustainability reporting process, making it
            user-friendly, comprehensive, and time-efficient.
          </p>
        </div>

        <div className="flex justify-center items-center  bg-white mt-10">
          <Image
            src={item.iconUrl}
            width={1080}
            height={1080}
            alt={item.title}
        className=" lg:w-[70%] lg:h-[70%] "
          />
        </div>

        <div className="mt-8 text-center">
          <button className="bg-[#033929] text-white px-6 py-2 rounded-lg hover:bg-green-700">
            Submit your report before the deadline
          </button>
        </div>
      </div>
      <div className="-mb-2 w-full h-full ">
        <Image
          src="/reporting/repoting-img-footer.jpg"
          width={1000}
          height={500}
          alt=""
          className="lg:w-full lg:h-full "
        />
      </div>
    </>
  )
}

export default ESGReporting
