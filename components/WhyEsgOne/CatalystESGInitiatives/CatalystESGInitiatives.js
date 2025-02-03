import React from "react"
import Link from "next/link"
import Image from "next/image"

const CatalystESGInitiatives = () => {
  return (
    <>
      <div
        className="lg:flex flex-col justify-end items-center bg-cover bg-center bg-no-repeat mb-16 hidden relative "
        data-aos="zoom-in"
      >
        <div className="w-full h-full container mx-auto">
          <Image
            src="/whyEsgOne/Catalyst’sESG Initiatives.png"
            alt="Outcome Desktop"
            width={2020}
            height={1450}
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  )
}

export default CatalystESGInitiatives
