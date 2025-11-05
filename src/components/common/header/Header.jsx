"use client";
import React, { useState, useEffect, useRef } from "react";
import Top from "./Top";
import Navbar from "./Navbar";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navLinksRef = useRef(null);
  const [navLinksTop, setNavLinksTop] = useState(0);

  useEffect(() => {
    // Set initial offsetTop AFTER the component mounts
    if (navLinksRef.current) {
      setNavLinksTop(navLinksRef.current.offsetTop);
    }

    const handleScroll = () => {
      setIsSticky(window.scrollY >= navLinksTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinksTop]);

  return (
    <header className="w-full">
      {/* 🔹 Top section */}
      <Top />

      {/* 🔹 Normal Navbar (not sticky) */}
      <Navbar />

      {/* 🔹 Sticky NavLinks only */}
      <div
        ref={navLinksRef}
        className={`w-full z-50 transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 bg-[#17396B] shadow-md" // same bg as before
            : "relative"
        }`}
      >
        <NavLinks />
      </div>

      {/* 🔹 Placeholder to avoid layout shift */}
      {isSticky && <div className="h-[70px]" />} {/* adjust height as per NavLinks */}
    </header>
  );
};

export default Header;
