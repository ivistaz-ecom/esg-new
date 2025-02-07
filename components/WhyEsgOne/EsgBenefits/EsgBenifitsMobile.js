import Image from "next/image"
import { useState } from "react"
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"

const EsgBenifitsMobile = () => {
  const [openSection, setOpenSection] = useState("environment")

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  // Define your sections array
  const sections = [
    {
      title: "Environment",
      key: "environment",
      content: (
        <>
          <div className="relative pl-4">
            <span className="absolute -left-4 top-1 w-2 h-2 bg-[#7F3F97] rounded-full"></span>
            <p className="font-semibold text-[#7F3F97]">
              Net Zero & Decarbonisation
            </p>
          </div>

          <div className="relative pl-4">
            <span className="absolute -left-4 top-1 w-2 h-2 bg-[#7F3F97] rounded-full"></span>
            <p className="font-semibold text-[#7F3F97]">
              Climate-Related Risk and Opportunities Assessment
            </p>
          </div>
          <div className="ml-4 text-sm">
            <p className="font-semibold text-[#7F3F97]">
              - Biosphere Restoration:
            </p>
            <p>
              Tree/Bamboo Growth, Regenerative Agri, Soil/Water Development &
              Livelihoods
            </p>
          </div>
          <div className="relative pl-4">
            <span className="absolute -left-4 top-1 w-2 h-2 bg-[#7F3F97] rounded-full"></span>
            <p className="font-semibold text-[#7F3F97]">
              Data for Climate Change - Research and Data Collection
            </p>
          </div>
          <div className="relative pl-4">
            <span className="absolute -left-4 top-1 w-2 h-2 bg-[#7F3F97] rounded-full"></span>
            <p className="font-semibold text-[#7F3F97]">
              Energy Simulation, Optimisation & Renewable Energy
            </p>
          </div>
        </>
      ),
    },
  ]

  return (
    <>
      <div className="max-w-7xl mx-auto bg-white relative md:mt-10 mt-4 z-0">
        <div className="absolute z-50 hidden sm:block right-0">
          <Image
            src="/solutions/icon-002.svg"
            className=""
            width={100}
            height={100}
          />
        </div>

        {sections.map((section) => (
          <div key={section.key}>
            <button
              className="flex justify-between w-full p-7 md:text-2xl text-xl font-semibold text-[#622F88] bg-gray-100 my-1 md:pe-28"
              onClick={() => toggleSection(section.key)}
            >
              {section.title}
              {openSection === section.key ? (
                <AiOutlineCaretUp />
              ) : (
                <AiOutlineCaretDown />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === section.key
                  ? "max-h-80 overflow-y-auto"
                  : "max-h-0"
              }`}
            >
              <div className="p-4 pl-6 space-y-3 text-gray-700 relative">
                {/* Vertical Dotted Line */}
                <div className="absolute left-[11px] top-0 h-full w-[2px] border-l-2 border-dashed border-[#4f4e4e]"></div>
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default EsgBenifitsMobile
