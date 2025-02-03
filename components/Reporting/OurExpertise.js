"use client"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const data = [
  {
    image: "/reporting/icon1.svg",
    title: "30 Years of Experience",
    description: "Deep industry knowledge fostering robust ESG solutions",
  },
  {
    image: "/reporting/icon2.svg",
    title: "Supported Over 4,000,000 Factory Workers",
    description:
      "Demonstrating our scale and impact in improving workplace sustainability",
  },
  {
    image: "/reporting/icon3.svg",
    title: "Partnered with 20,000 MSMEs",
    description: "Enhancing their ESG performance and compliance",
  },
]

export default function ESGCards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div className="py-12 flex justify-center lg:-mt-40 container mx-auto">
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 px-4 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative p-6 bg-white shadow-lg rounded-xl border border-gray-200 
                   before:absolute before:-top-0.5 before:-right-0.5 before:h-[22%] before:w-[22%] before:border-t-[7px] before:border-r-[7px] before:border-cms-primary before:rounded-tr-xl
                   after:absolute after:bottom-0 after:left-0 after:h-[22%] after:w-[22%] after:border-b-[7px] after:border-l-[7px] after:border-cms-primary after:rounded-bl-xl"
          >
            <div className="absolute -top-6 left-6 bg-[#763A88] p-4 rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 object-cover rounded-lg"
              />
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-[#763A88]">
                {item.title}
              </h3>
              <p className="text-lg mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full h-60 px-4 py-5 ">
        <Slider {...settings} >
          {data.map((item, index) => (
            <div key={index} className="p-4">
              <div
                className=" relative p-6 bg-white shadow-lg rounded-xl border border-gray-200 
                   before:absolute before:-top-0.5 before:-right-0.5 before:h-[22%] before:w-[22%] before:border-t-[7px] before:border-r-[7px] before:border-cms-primary before:rounded-tr-xl
                   after:absolute after:bottom-0 after:left-0 after:h-[22%] after:w-[22%] after:border-b-[7px] after:border-l-[7px] after:border-cms-primary after:rounded-bl-xl"
              >
                <div className="min-h-48">
                <div className="absolute -top-6 left-6 bg-[#763A88] p-4 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded-lg"
                  />
                </div>
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold text-[#763A88]">
                    {item.title}
                  </h3>
                  <p className="text-lg mt-2 ">{item.description}</p>
                </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
