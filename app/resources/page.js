"use client"

import Banner from "@/components/Banner/Banner"
import Footer from "@/components/Esg/Footer"
import { blogsData } from "@/utils/data"
import Image from "next/image"
import Link from "next/link"
//import AOS from "aos"
//import "aos/dist/aos.css"

const Page = () => {
  // useEffect(() => {
  //   AOS.init()
  // })

  const bannerImageUrl = "/banner/banner04.png"
  const mobileBannerUrl = "/banner/mobileBanner04.jpg"
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

      <div className="flex justify-center my-16 px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {blogsData.map((item) => {
            return (
              <li
                key={item.id}
                className="bg-[#F4F4F4] rounded-lg overflow-hidden shadow-md w-full lg:w-[490px]"
                data-aos="zoom-in"
              >
                <div className="w-full">
                  <Image
                    src={item.imageUrl}
                    width={496}
                    height={310}
                    className="w-full object-cover"
                    alt={item.tiile}
                  />
                </div>
                <div className="flex flex-col items-start gap-5 p-4">
                  <h3 className="text-xl lg:text-2xl text-[#1C1C1C]">
                    {item.tiile}
                  </h3>
                  <p className="text-sm lg:text-base text-[#1C1C1C]">
                    {item.desc}
                  </p>
                  <button className="bg-cms-primary text-white px-4 py-2 rounded">
                    Read More
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <Footer />
    </>
  )
}

export default Page
