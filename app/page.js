"use client"

import React, { useRef, useEffect } from "react"
import GlobalImpact from "@/components/Esg/GlobalImpact"
import OurComprehensive from "@/components/Esg/OurComprehensive"
import DifferentSectors from "@/components/Esg/DifferentSectors"
import OurInitiatives from "@/components/Esg/OurInitiatives"
import Vision from "@/components/Esg/Vision"
import Footer from "@/components/Esg/Footer"
import Contact from "@/components/Esg/Contact"
import Banner from "@/components/Esg/Banner"
import Heading from "@/components/Heading/Heading"

export default function Home() {
  const contactRef = useRef(null)

  const bannerImageUrl = "/banner/banner01.png"
  const mobileBannerUrl = "/banner/mobileBanner01.jpg"
  const bannerTitle = "Sustainable Tomorrow"
  const bannerDesc = "Catalysing Net-Positive Value Chains for a"

  const desc = (
    <>
      <span className="text-green-500 text-3xl py-5">
        In today’s interconnected world, the ripple effects of our actions
        demand a collaborative approach to sustainability.
      </span>
      <p className="mt-5"></p>
      It’s essential for organisations to expand their focus beyond direct
      operations and embrace responsible practices across the entire value
      chain. By prioritising policies and practices that benefit people, the
      planet, and long-term sustainability, we can foster meaningful change.
      <span className="">
        <button className="bg-[#7E3F98] text-white px-6 py-2 mt-5 rounded-lg shadow-lg hover:bg-[#582f6a] hover:shadow-xl transition duration-300">
          Know More
        </button>
      </span>
    </>
  )

  useEffect(() => {
    if (window.location.hash === "#contact") {
      contactRef.current?.scrollIntoView({})
    }
  }, [])

  return (
    <>
      <Banner
        bannerImageUrl={bannerImageUrl}
        bannerTitle={bannerTitle}
        bannerDesc={bannerDesc}
        mobileBannerUrl={mobileBannerUrl}
      />

      <Heading desc={desc} />
      <OurComprehensive />
      <GlobalImpact />
      <DifferentSectors />
      <OurInitiatives />
      <Vision />
      <Contact ref={contactRef} />
      <Footer />
    </>
  )
}
