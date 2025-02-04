import React, { useState, useEffect } from "react"
import Image from "next/image"

const CatalystESGInitiatives = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleImageClick = () => {
    if (window.innerWidth < 1024) {
      setIsModalOpen(true)
      document.body.classList.add("overflow-hidden") // Prevent background scrolling
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.classList.remove("overflow-hidden") // Allow background scrolling
  }

  useEffect(() => {
    return () => {
      document.body.classList.remove("overflow-hidden") // Cleanup on unmount
    }
  }, [])

  return (
    <div
      className="lg:flex flex-col justify-end items-center bg-cover bg-center bg-no-repeat mb-16 relative"
      data-aos="zoom-in"
    >
      <div className="relative w-full h-full">
  {/* Image */}
  <Image
    src="/whyEsgOne/ESGinitiatives.jpg"
    alt="Outcome Desktop"
    width={1000}
    height={450}
    className="w-full h-full p-3"
    
  />

  {/* Overlay */}
  {/* <div className="absolute inset-0 bg-black bg-opacity-25"></div> */}

  {/* Centered Text */}
  <div onClick={handleImageClick} className="absolute inset-0 flex justify-center items-center text-lg">
    {/* <span className="shadow-lg rounded-none text-black font-semibold">View Image</span> */}
  </div>
</div>


      {/* Mobile Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 lg:hidden bg-black bg-opacity-50"
          onClick={closeModal} // Close when clicking on the background
        >
          <div
            className="bg-white p-5 rounded-lg relative w-96 h-[60vh] flex flex-col items-center justify-center "
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 text-xl z-50"
            >
              ✕
            </button>

            {/* Horizontal Scrollable Image */}
            <div className="w-full h-full overflow-x-auto justify-center items-center">
              <Image
                src="/whyEsgOne/ESGinitiatives.jpg"
                alt="Modal Image"
                width={1020}
                height={450}
                className="w-auto h-full max-w-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CatalystESGInitiatives
