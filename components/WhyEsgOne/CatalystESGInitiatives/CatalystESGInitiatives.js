import React from "react"
import Link from "next/link"
import Image from "next/image"

const CatalystESGInitiatives = () => {
  return (
    <div
      className="lg:flex flex-col justify-end items-center bg-cover bg-center bg-no-repeat mb-16 hidden relative "
      data-aos="zoom-in"
    >
      <div className="w-full h-full">
        <Image
          src="/whyEsgOne/Catalyst’s ESG Initiatives.png"
          alt="Outcome Desktop"
          width={1020}
          height={450}
          className="w-full h-full p-5"
        />
      </div>
    </div>
  )
}

export default CatalystESGInitiatives
