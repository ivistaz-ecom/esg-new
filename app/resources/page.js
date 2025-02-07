"use client"

import Banner from "@/components/Banner/Banner"
import Footer from "@/components/Esg/Footer"
import { blogsData } from "@/utils/data"
import Image from "next/image"
import Link from "next/link"


const Page = () => {
 
  const bannerImageUrl = "/banner/Resources-banner-07.png"
  const mobileBannerUrl = "/banner/Resources-banner-07.png"
  const bannerTitle = "Resources"
  const bannerDesc =
    "Explore our extensive library of resources to support your journey. From insightful articles to detailed guides and useful case studies, find the information you need to stay informed and empowered. Browse our categories for the latest trends and insights."
    const cardsData = [
      {
        id: 1,
        title: "Lorem Ipsum",
        subtitle: "Lorem Ipsum Is Simply",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: "/resources/Resources-img-1.png",
        imageAlt: "Business presentation with whiteboard"
      },
      {
        id: 2,
        title: "Lorem Ipsum",
        subtitle: "Lorem Ipsum Is Simply",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: "/resources/Resources-img-2.png",
        imageAlt: "Team meeting with presentation"
      },
      {
        id: 3,
        title: "Lorem Ipsum",
        subtitle: "Lorem Ipsum Is Simply",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: "/resources/Resources-img-1.png",
        imageAlt: "Business presentation with whiteboard"
      },
      {
        id: 4,
        title: "Lorem Ipsum",
        subtitle: "Lorem Ipsum Is Simply",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: "/resources/Resources-img-2.png",
        imageAlt: "Team meeting with presentation"
      }
    ];
  return (
    <>
      <Banner
        bannerImageUrl={bannerImageUrl}
        bannerTitle={bannerTitle}
        bannerDesc={bannerDesc}
        mobileBannerUrl={mobileBannerUrl}
      />

<div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cardsData.slice(0, 4).map((card) => (
          <div key={card.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src={card.image}
              alt={card.imageAlt}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
              <h3 className="text-xl text-gray-700 mb-3">{card.subtitle}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {card.description}
              </p>
              <button className="bg-[#7F3F97] text-white px-6 py-2 rounded-md hover:bg-[#8c45a7] transition-colors">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

      <Footer />
    </>
  )
}

export default Page
