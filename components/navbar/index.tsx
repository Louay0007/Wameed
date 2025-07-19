"use client";

import Image from "next/image";
import Link from "next/link";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import ActionButton from "../ActionButton";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="relative">
      {/* Sticky navbar with backdrop blur and shadow */}
      <nav
        className="w-full z-50 transition-all duration-300 flex items-center justify-between px-2 xs:px-3 sm:px-6 py-3 sm:py-4 fixed top-0 left-0 navbar-gradient text-white backdrop-blur-md shadow-lg"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Larger clickable logo area */}
        <Link href="/" className="flex items-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary100" aria-label="Go to homepage">
          <Image
            src="/wameed.png"
            alt="MenaSYP logo"
            width={160}
            height={80}
            className="w-32 sm:w-40 md:w-48 lg:w-52 h-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center space-x-4 lg:space-x-8">
          {navbarLinks.map((link) => (
            <NavLink
              key={link.route}
              href={link.route}
              isActive={pathname === link.route}
              className={`relative px-2 py-1 transition-all duration-300 rounded focus:outline-none focus:ring-2 focus:ring-[#BC8940] transform hover:scale-105 ${
                pathname === link.route
                  ? "text-[#BC8940] bg-amber-900/20 border-b-2 border-[#BC8940]"
                  : "text-white hover:text-[#BC8940] hover:bg-amber-900/10"
              }`}
              aria-current={pathname === link.route ? "page" : undefined}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          {/* Tooltip for disabled registration button */}
         
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#BC8940] p-2 transform transition-all duration-300 hover:scale-110 hover:text-[#BC8940]"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? (
            <X className="w-8 h-8 cursor-pointer" />
          ) : (
            <Menu className="w-8 h-8 cursor-pointer" />
          )}
        </button>
      </nav>

      {/* Mobile Menu with animation */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-dark bg-opacity-95 pt-24 px-4 md:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
          <div className="flex flex-col items-center space-y-6">
          {/* Larger close button at the top */}
          <button
            className="absolute top-6 right-6 text-white focus:outline-none focus:ring-2 focus:ring-[#BC8940] p-3 rounded-full bg-amber-900/20 hover:bg-amber-900/30 hover:text-[#BC8940] transition-all duration-300 transform hover:scale-110"
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
          >
            <X className="w-8 h-8" />
          </button>
            {navbarLinks.map((link) => (
              <Link
                key={link.route}
                href={link.route}
              className={`text-xl font-medium px-4 py-2 rounded transition-all duration-300 w-full text-center transform hover:scale-105 ${
                  pathname === link.route
                  ? "text-[#BC8940] bg-amber-900/20 border-b-2 border-[#BC8940]"
                  : "text-white hover:text-[#BC8940] hover:bg-amber-900/10"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              aria-current={pathname === link.route ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          <div className="pt-4 w-full flex justify-center">
           
          </div>
        </div>
      </div>
    </div>
  );
}
