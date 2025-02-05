import React from "react"

const Heading = ({ title, desc }) => {
  return (
    <>
      <div className="flex justify-center my-12 md:my-16 px-4 md:px-0">
        <div
          className="w-full md:w-3/4 space-y-2 md:space-y-3"
         
        >
          <h2 className="text-2xl md:text-3xl lg:text-3xl text-[#249F7A] font-semibold text-center">
            In today’s interconnected world, the ripple effects of our actions
            demand a collaborative approach to sustainability.
          </h2>
          <p className="text-base md:text-lg lg:text-lg text-[#171717] text-center">
            It’s essential for organisations to expand their focus beyond direct
            operations and embrace responsible practices across the entire value
            chain. By prioritising policies and practices that benefit people,
            the planet, and long-term sustainability, we can foster meaningful
            change.
          </p>
          <div className="flex justify-center mt-8">
        <button className="bg-[#7F3F97] text-white px-8 py-2 rounded-md hover:bg-[#9254a9] transition-colors">
          Know More
        </button>
      </div>
        </div>
      </div>
    </>
  )
}

export default Heading
