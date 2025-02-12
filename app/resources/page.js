"use client"

import Banner from "@/components/Banner/Banner"
import Footer from "@/components/Esg/Footer"

const Page = () => {
  const bannerImageUrl = "/banner/Resources-banner-07.png"
  const mobileBannerUrl = "/banner/Resources-banner-07.png"
  const bannerTitle = "Resources"
  const bannerDesc =
    "Explore our extensive library of resources to support your journey. From insightful articles to detailed guides and useful case studies, find the information you need to stay informed and empowered. Browse our categories for the latest trends and insights."

  return (
    <>
      <Banner
        bannerImageUrl={bannerImageUrl}
        bannerTitle={bannerTitle}
        bannerDesc={bannerDesc}
        mobileBannerUrl={mobileBannerUrl}
      />

      <div className="flex justify-center py-10">
        <button className="bg-gray-400 text-white px-6 py-3 rounded-md text-lg font-semibold cursor-not-allowed">
          Coming Soon
        </button>
      </div>

      <Footer />
    </>
  )
}

export default Page
