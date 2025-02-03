import React from "react"
import Image from "next/image"

export default function Banner() {
  return (
    <div className="bg-[#F9FDFC] mt-16">
      <div className="flex lg:flex-row flex-col  items-center">
        <div className="lg:w-[60%] py-10 lg:py-0">
          <div className="flex flex-col justify-end items-end">
            <h1
              className="text-[#043929] lg:text-5xl font-normal text-3xl leading-8 lg:pt-10 pt-10 lg:w-[90%]"
              data-aos="zoom-in"
            >
              Catalysing Net-Positive
              <br /> Value Chains for a <br />
              <span className="text-[#05AC8D] font-black lg:text-5xl text-3xl py-4">
                Sustainable Tomorrow
              </span>
            </h1>
            <div className="w-[90%] mt-14 hidden lg:block bottom-0">
              <Image
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/banner-arrow.svg"
                className="w-[30%] bottom-0"
                width={1000}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[35%]">
          <Image
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/esg/BGBanner.png"
            className="h-[80%] w-[100%]"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}
