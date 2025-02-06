"use client"
import { MdArrowOutward } from "react-icons/md"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { IoMdClose } from "react-icons/io"
import { usePathname } from "next/navigation"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const pathname = usePathname()

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu()
    }
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  const navlinks = [
    { navName: "Home", navLink: "/" },
    { navName: "About Us", navLink: "/why-esg-one" },
    { navName: "Solutions", navLink: "/solutions" },
    { navName: "Reporting", navLink: "/reporting" },
    { navName: "Resources", navLink: "/resources" },
    // {
    //   navName: "Resources",
    //   navLink: "https://cms.org.in/insights",
    //   target: "_blank",
    // },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
            ESG
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href="/contact-us">
            <button
              type="button"
              className="text-white bg-cms-primary focus:ring-4 focus:outline-none focus:ring-cms-secondary font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-8"
            >
              Contact Us
            </button>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {menuOpen ? (
              <IoMdClose
                className="w-6 h-6 text-[#05AC8D] dark:text-gray-400 cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="#05AC8D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          ref={menuRef}
          className={`ml-auto absolute top-full left-0 w-full lg:shadow-inherit shadow-lg bg-white dark:bg-gray-800 md:static md:w-auto md:flex md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:dark:bg-gray-900 dark:border-gray-700 ${
            menuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col px-5 p-2 md:p-0 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navlinks.map((nav, index) => {
              const isActive = pathname === nav.navLink

              return (
                <li
                  key={index}
                  className={`py-1 ${
                    isActive ? "lg:border-b-2 border-[#05AC8D]" : ""
                  }`}
                >
                  <Link
                    target={nav.target}
                    href={nav.navLink}
                    onClick={closeMenu}
                    className="nav-link"
                  >
                    <span
                      className={`flex gap-1 items-center ${
                        isActive
                          ? "text-[#05AC8D]"
                          : "hover:text-[#05AC8D] transition-all duration-200 group py-1 lg:py-0"
                      }`}
                    >
                      {nav.navName}
                      <MdArrowOutward
                        className={`transition-opacity duration-200 ${
                          isActive
                            ? "opacity-"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
