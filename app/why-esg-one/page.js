"use client"

import Banner from "@/components/Banner/Banner"
import Footer from "@/components/Esg/Footer"
import Outcome from "@/components/Esg/Outcome"
import Navigating from "@/components/WhyEsgOne/Navigating/Navigating"
import CatalystESGInitiatives from "@/components/WhyEsgOne/CatalystESGInitiatives/CatalystESGInitiatives"
import MeetOurTeam from "@/components/WhyEsgOne/MeetOurTeam/MeetOurTeam"

const page = () => {
  const bannerImageUrl = "/banner/WHY-ESG-Banner-02.png"
  const mobileBannerUrl = "/banner/mobileBanner02.jpg"
  const bannerTitle = "Why ESG"
  const bannerDesc =
    "In today’s business environment, integrating Environmental, Social, and Governance (ESG) principles is more crucial than ever. This is a comprehensive solution, designed to help your business thrive in this transformative journey."
  const title = "A Legacy of Excellence with The Catalyst Group"
  const desc =
    "Powered by The Catalyst Group, we bring over 30 years of expertise in social development. Headquartered in Bangalore, India, our experience spans Monitoring, Evaluation, Health, Livelihoods, and ESG solutions, addressing challenges like climate change, social inequality, and economic development."

  return (
    <>
      {/* <Header /> */}
      <Banner
        bannerImageUrl={bannerImageUrl}
        bannerTitle={bannerTitle}
        bannerDesc={bannerDesc}
        mobileBannerUrl={mobileBannerUrl}
      />

      <Navigating />
      <Outcome />
      <CatalystESGInitiatives />
      <MeetOurTeam />
      <Footer />
    </>
  )
}

export default page
