"use client";
import { useState } from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: "Home", href: "/", dropdown: false },
    { name: "About Us", href: "/about-us", dropdown: false },
    { name: "Our Team", href: "/our-team", dropdown: false },
    { name: "Treatments", href: "/treatments", dropdown: false },
    { name: "Blogs", href: "/blogs", dropdown: false },
    {
      name: "Media",
      href: "#",
      dropdown: true,
      subMenu: [
        { name: "Gallery", href: "/media/gallery" },
        { name: "Videos", href: "/media/videos" },
      ],
    },
    { name: "Contact Us", href: "/contact-us", dropdown: false },
  ];

  const callData = {
    phone: "9810465644",
    display: "+91 98104 65644",
  };

  return (
    <nav className="bg-[#1e3b70] text-white font-semibold relative z-50 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-3 lg:py-4 gap-y-3 lg:gap-y-0">
        {/* ✅ Desktop Menu (Now visible from lg breakpoint) */}
        <ul className="hidden lg:flex flex-wrap items-center gap-x-5 xl:gap-x-8 relative">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <div className="flex items-center space-x-1 hover:text-sky-400 transition duration-200 cursor-pointer">
                <Link href={item.href}>{item.name}</Link>
                {item.dropdown && <IoIosArrowDown className="text-xs" />}
              </div>

              {item.dropdown && item.subMenu && (
                <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300">
                  {item.subMenu.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-sky-100"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* ✅ Desktop Call Button (Visible from lg) */}
        <div className="hidden lg:flex shrink-0 ml-auto">
          <Link
            href={`tel:${callData.phone}`}
            className="bg-[#00D7FF] hover:bg-[#00bfe6] text-white flex items-center space-x-2 px-6 py-2 rounded-md shadow transition duration-200"
          >
            <FaPhoneAlt />
            <span className="text-sm lg:text-base">
              Call Anytime:
              <strong className="ml-1 text-base">{callData.display}</strong>
            </span>
          </Link>
        </div>

        {/* ✅ Mobile Menu Toggle (shows below lg) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ✅ Mobile Menu (active below lg) */}
      <div
        className={`lg:hidden bg-[#1e3b70] border-t border-white/10 transition-all duration-300 ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-2 px-6 py-4">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="flex items-center justify-between w-full text-left py-1 hover:text-sky-400"
                  >
                    <span>{item.name}</span>
                    <IoIosArrowDown
                      className={`transition-transform duration-300 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === index && (
                    <ul className="pl-4 mt-1 space-y-1">
                      {item.subMenu.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-1 hover:text-sky-400"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-sky-400 py-1"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}

          {/* ✅ Mobile Call Button */}
          <li className="pt-2">
            <Link
              href={`tel:${callData.phone}`}
              className="bg-[#00D7FF] hover:bg-[#00bfe6] text-white flex items-center justify-center space-x-2 px-4 py-3 rounded-md shadow transition duration-200"
            >
              <FaPhoneAlt />
              <span>
                Call Anytime:
                <strong className="ml-1">{callData.display}</strong>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;
